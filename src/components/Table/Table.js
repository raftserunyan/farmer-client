import React, {
	useMemo,
	useState,
	useEffect,
	useCallback,
	useRef,
} from 'react';
import {
	useTable,
	useSortBy,
	useExpanded,
	useRowSelect,
	useBlockLayout,
	useResizeColumns,
} from 'react-table';
import qs from 'qs';
import cx from 'classnames';

import { Button } from 'ui';
import * as S from './Table.styles';
import { history } from 'system/history';
import { formatDate, withConfirmation } from 'helpers';
import createIcon from 'images/add.png';
import editIcon from 'images/editing.png';
import deleteIcon from 'images/delete.png';
import filterIcon from 'images/filter.png';
import sortIcon from 'images/sort.png';

const defaultColumn = {
	minWidth: 50,
	width: 250,
	maxWidth: 500,
};

const IndeterminateCheckbox = React.forwardRef(
	({ indeterminate, ...rest }, ref) => {
		const defaultRef = React.useRef();
		const resolvedRef = ref || defaultRef;

		useEffect(() => {
			resolvedRef.current.indeterminate = indeterminate;
		}, [resolvedRef, indeterminate]);

		return (
			<>
				<input
					type='checkbox'
					ref={resolvedRef}
					{...rest}
				/>
			</>
		);
	}
);

export const Table = ({
	data,
	title,
	total,
	columns,
	onDelete,
	loadData,
	showModal,
	isSubTable,
	hideTooltip,
	columnConfig,
	isGroupsPage,
	switchCourse,
	SubComponent,
	customActions,
	hasActionsBar,
	hasSelections,
	FormComponent,
	FilterComponent,
	withoutCheckboxes,
	selectedRowIndexes,
	withoutDefaultActions,
}) => {
	const listData = useMemo(
		() => (!Array.isArray(data) ? [] : data),
		[data]
	);

	const {
		rows,
		prepareRow,
		headerGroups,
		getTableProps,
		selectedFlatRows,
		getTableBodyProps,
	} = useTable(
		{
			data: listData,
			autoResetExpanded: false,
			columns,
			manualPagination: true,
			defaultColumn: {
				...defaultColumn,
				...columnConfig,
			},
			initialState: {
				selectedRowIds: selectedRowIndexes,
			},
		},
		useSortBy,
		useExpanded,
		useRowSelect,
		useBlockLayout,
		useResizeColumns,
		hooks => {
			if (!hasSelections || withoutCheckboxes) return;

			hooks.visibleColumns.push(columns => [
				{
					id: 'selection',
					Header: ({ getToggleAllRowsSelectedProps }) => (
						<div>
							<IndeterminateCheckbox
								{...getToggleAllRowsSelectedProps?.()}
							/>
						</div>
					),
					Cell: ({ row }) => (
						<div>
							<IndeterminateCheckbox
								{...row.getToggleRowSelectedProps()}
							/>
						</div>
					),
					width: 70,
				},
				...columns,
			]);
		}
	);

	const [currentPage, setCurrentPage] = useState(1);

	const totalCount = total || listData.length;
	const pageCount = Math.ceil(totalCount / 6);
	const selectedFirstRow = selectedFlatRows[0]?.original;

	const changePage = useCallback(
		page => {
			const currentQuery = qs.parse(
				history.location.search.replace('?', '')
			);
			setCurrentPage(page);
			loadData?.({
				...currentQuery,
				pageSize: 20,
				pageNumber: page, // (page - 1) * 6,
			});
		},
		[loadData, setCurrentPage]
	);

	const gotoPage = useCallback(
		page => {
			changePage(page);
		},
		[changePage]
	);

	const nextPage = () => {
		changePage(currentPage + 1);
	};

	const prevPage = () => {
		changePage(currentPage - 1);
	};

	useEffect(() => {
		gotoPage(1);
	}, []);

	const paginationButtons = useMemo(() => {
		const buttons = [];
		let num = Math.max(currentPage - 1, 1);
		const buttonsCount = Math.min(pageCount, num + 2);

		for (
			let pageNumber = num;
			pageNumber <= buttonsCount;
			pageNumber++
		) {
			const isPageActive = pageNumber === currentPage;

			buttons.push(
				<Button
					onClick={() => gotoPage(pageNumber)}
					className={cx({
						bordered: !isPageActive,
						main: isPageActive,
					})}
				>
					{pageNumber}
				</Button>
			);
		}

		return buttons;
	}, [pageCount, currentPage, gotoPage]);

	const tBodyRef = useRef(null);

	const tableActions = useMemo(() => {
		let actions = [
			...(customActions?.(selectedFlatRows) || []),
		];

		if (!withoutDefaultActions) {
			actions = [
				...actions,
				{
					key: 1,
					icon: createIcon,
					title: 'Ավելացնել',
					onClick: () =>
						showModal(FormComponent, {
							parentRowId: selectedFirstRow,
						}),
				},
				{
					key: 2,
					icon: editIcon,
					title: 'Փոփոխել',
					disabled: selectedFlatRows.length !== 1,
					onClick: () =>
						showModal(FormComponent, {
							editableData: selectedFirstRow,
						}),
				},
				{
					key: 3,
					title: 'Ջնջել',
					icon: deleteIcon,
					disabled: selectedFlatRows.length !== 1,
					onClick: () =>
						withConfirmation({
							onYes: () =>
								onDelete(
									selectedFlatRows.map(
										row => row.original.id
									)
								),
						}),
				},
			];
		}

		// if (FilterComponent) {
		//   actions.push({
		//     key: 4,
		//     icon: filterIcon,
		//     title: 'Ֆիլտրել',
		//     onClick: () => showModal(FilterComponent)
		//   });
		// }

		return actions;
	}, [
		onDelete,
		selectedFlatRows,
		showModal,
		customActions,
		FormComponent,
		FilterComponent,
		selectedFirstRow,
	]);

	return (
		<S.TableContainer
			className='Table-Container'
			hasActionsBar={hasActionsBar}
		>
			{hasActionsBar && (
				<S.FixedActionsBar>
					{/* <S.FixedActionsBarHeader>
              Գործողություններ
            </S.FixedActionsBarHeader> */}
					<S.FixedActionsBarTitle>
						{title}
					</S.FixedActionsBarTitle>
					<S.ActionsList>
						{isGroupsPage && (
							<Button
								onClick={() =>
									switchCourse(
										selectedFlatRows.map(
											row => row.original.id
										)
									)
								}
								disable={selectedFlatRows.length === 0}
							>
								Փոխադրում
							</Button>
						)}
						{tableActions.map((action, key) => (
							<S.Action
								{...action}
								key={
									action.key || key + tableActions.length
								}
								className={cx({
									disabled: action.disabled,
								})}
							>
								<S.OpacityWrapper title={action.title} />
								<img alt='delete-icon' src={action.icon} />
							</S.Action>
						))}
					</S.ActionsList>
				</S.FixedActionsBar>
			)}
			<table {...getTableProps()} className='Table'>
				<thead>
					<tr className='header-style' />
					{headerGroups.map(headerGroup => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map(column => (
								<th
									{...column.getHeaderProps(
										column.getSortByToggleProps()
									)}
								>
									{column.render('Header')}
									<div
										{...column.getResizerProps()}
										onClick={e => e.stopPropagation()}
										className={`resizer ${
											column.isResizing ? 'isResizing' : ''
										}`}
									/>
									{column.isSorted ? (
										<S.SortIcon
											alt='sort-icon'
											className={cx({
												ascSort: !column.isSortedDesc,
											})}
											src={sortIcon}
										/>
									) : null}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()} ref={tBodyRef}>
					{rows.map(row => {
						prepareRow(row);
						const { onClick: onExpandableRowClick } =
							row.getToggleRowExpandedProps();
						const createdInfo = `Ստեղծվել է - ${formatDate(
							row.original.createdAt
						)}`;
						const updatedInfo = `Թարմացվել է - ${formatDate(
							row.original.updatedAt
						)}`;
						const rowInfo =
							createdInfo + '\n' + updatedInfo;

						return (
							<>
								<tr
									{...row.getRowProps()}
									key={row.original.id}
									className={cx({
										selected: row.isSelected,
									})}
									onClick={() => {
										if (hasSelections)
											row.toggleRowSelected(
												!row.isSelected
											);
										if (SubComponent)
											onExpandableRowClick();
									}}
								>
									{row.cells.map((cell, cellIndex) => {
										const columnKey =
											cell.column.id.split('.')[0];
										let cellInfo = null;

										if (
											row.original[columnKey]?.createdAt
										) {
											cellInfo =
												`Ստեղծվել է - ${formatDate(
													row.original[columnKey].createdAt
												)}` +
												'\n' +
												`Թարմացվել է - ${formatDate(
													row.original[columnKey].updatedAt
												)}`;
										}

										return (
											<td
												{...cell.getCellProps()}
												onClick={e => {
													if (cell.column.onClick) {
														e.stopPropagation();
														e.preventDefault();
														cell.column.onClick?.(
															row.original
														);
													}
												}}
												className='tooltip'
											>
												{cell.render('Cell')}
												{cellIndex > 0 &&
													!isSubTable &&
													!hideTooltip && (
														<span className='tooltiptext'>
															{cellInfo || rowInfo}
														</span>
													)}
											</td>
										);
									})}
								</tr>
								{row.isExpanded && SubComponent ? (
									<div>
										<td
											style={{
												width:
													tBodyRef.current?.clientWidth -
													35,
											}}
										>
											{SubComponent({ row })}
										</td>
									</div>
								) : null}
							</>
						);
					})}
				</tbody>
			</table>
			<S.PaginationContainer>
				<S.PaginationInfoContainer
					hasActionsBar={hasActionsBar}
				>
					<S.TotalCount>
						Ընդհանուր {totalCount} գրառում
					</S.TotalCount>
					<S.PaginationActionsContainer>
						<Button
							onClick={prevPage}
							className={cx('bordered', {
								disable: currentPage === 1,
							})}
						>
							{'<'}
						</Button>
						{paginationButtons}
						<Button
							onClick={nextPage}
							className={cx('bordered', {
								disable: currentPage === pageCount,
							})}
						>
							{'>'}
						</Button>
					</S.PaginationActionsContainer>
				</S.PaginationInfoContainer>
			</S.PaginationContainer>
		</S.TableContainer>
	);
};

Table.defaultProps = {
	data: [],
	columns: [],
	columnConfig: {},
	hasActionsBar: true,
	hasSelections: true,
	selectedRowIndexes: [],
	withoutCheckboxes: false,
	title: 'Գործողություններ',
};
