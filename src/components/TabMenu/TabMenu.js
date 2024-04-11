import React, { useState } from 'react';
import cx from 'classnames';

import * as S from './TabMenu.styles';

export const TabMenu = ({ tabs, children }) => {
	const [activeTab, setActiveTab] = useState(0);

	const activeTabContent = children[activeTab];

	return (
		<S.TabMenu className='TabMenu'>
			<S.TabHeader>
				{tabs.map((tabName, tabIndex) => (
					<S.TabItem
						key={tabName}
						onClick={() => setActiveTab(tabIndex)}
						className={cx('Tab-Item', {
							active: activeTab === tabIndex,
						})}
					>
						{tabName}
					</S.TabItem>
				))}
			</S.TabHeader>
			<S.TabContent>{activeTabContent}</S.TabContent>
		</S.TabMenu>
	);
};

TabMenu.defaultProps = {
	children: [],
};
