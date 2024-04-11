import React, { useState } from 'react';

import { Table } from 'components';
import * as S from './CreditsPage.styles';
import { Layout } from 'components/Layout';
import { tableColumns } from 'constants/tableColumns';

export const CreditsPage = ({ credits, loadCredits }) => {
  const [selectedOption, setSelectedOption] = useState("myDebths");
  
  const myDebthsClicked = () => {
		loadCredits('', {});
		setSelectedOption('myDebths');
	};

	const myCreditsClicked = () => {
		loadCredits('myCredits=true', {});
		setSelectedOption('myCredits');
	};

  return (
    <Layout>
      <S.CreditsPageContainer>
        <S.FlexColumn>
          <S.RadioInputs>
			<S.CustomLabel>
				<S.CustomRadio id="myDebths" name="creditType" value="myDebths" style={{ borderRadius: "1em 0 0 1em" }}
					checked={selectedOption === 'myDebths'} onChange={myDebthsClicked} />
				<S.CustomSpan>Ինձ են պարտք</S.CustomSpan>
			</S.CustomLabel>
			
			<S.CustomLabel>
				<S.CustomRadio id="myCredits" name="creditType" value="myCredits" style={{ borderRadius: "0 1em 1em 0" }}
					checked={selectedOption === 'myCredits'} onChange={myCreditsClicked} />
				<S.CustomSpan>Ես եմ պարտք</S.CustomSpan>				
			</S.CustomLabel>
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
