import React, { useEffect, useState } from 'react';

import { Table } from 'components';
import * as S from './CreditsPage.styles';
import { Layout } from 'components/Layout';
import { tableColumns } from 'constants/tableColumns';
import { Button } from 'ui';
import cx from 'classnames';

export const CreditsPage = ({ credits, loadCredits }) => {
	const [selectedOption, setSelectedOption] =
		useState('myDebths');

	const myDebthsClicked = () => {
		loadCredits('', {});
		setSelectedOption('myDebths');
	};

	const myCreditsClicked = () => {
		loadCredits('myCredits=true', {});
		setSelectedOption('myCredits');
	};

	useEffect(() => {
		myDebthsClicked();
	}, []);

	return (
		<Layout>
			<S.CreditsPageContainer>
				<S.FlexColumn>
					<S.RadioInputs>
						<Button
							onClick={myDebthsClicked}
							className={
								selectedOption === 'myDebths'
									? 'main'
									: 'bordered'
							}
						>
							Ինձ են պարտք
						</Button>
						<Button
							onClick={myCreditsClicked}
							className={
								selectedOption === 'myCredits'
									? 'main'
									: 'bordered'
							}
						>
							Ես եմ պարտք
						</Button>
					</S.RadioInputs>

					<Table
						title='Պարտքեր'
						data={credits.list}
						total={credits.total}
						loadData={loadCredits}
						columns={tableColumns.credits}
					/>
				</S.FlexColumn>
			</S.CreditsPageContainer>
		</Layout>
	);
};
