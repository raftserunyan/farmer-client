export const constructRafikFilters = (
	values,
	{ stringFields = [] }
) => {
	const filters = { andFilters: [] };

	if (!values) return filters;

	Object.keys(values).forEach(filterKey => {
		const filterValue = values[filterKey];
		console.log(filterValue, 'filterValue');
		const isNumberField =
			!stringFields.includes(filterKey) &&
			!isNaN(+filterValue) &&
			filterValue[0] !== '0';
		if (!filterValue) return;

		if (filterKey === 'date') {
			if (filterValue.start)
				filters.andFilters.push({
					property: filterKey,
					value: filterValue.start,
					operation: 'gte',
				});

			if (filterValue.end)
				filters.andFilters.push({
					property: filterKey,
					value: filterValue.end,
					operation: 'lte',
				});

			return;
		}

		filters.andFilters.push({
			property: filterKey,
			value: isNumberField ? +filterValue : filterValue,
			operation: isNumberField ? 'gte' : 'like',
		});

		if (isNumberField)
			filters.andFilters.push({
				property: filterKey,
				value: +filterValue,
				operation: 'lte',
			});
	});
	console.log(filters, 'sfioewfoi');
	return filters;
};
