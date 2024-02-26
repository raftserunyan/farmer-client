import React from 'react';
import cx from 'classnames';
import { useLocation } from 'react-router-dom';

import { Dropdown } from 'ui';
import * as S from './Header.styles';
import profilePic from 'images/profile.png';
import { headerItems } from './Header.config';
import logoPic from 'images/logo.png';

export const Header = ({ user, logout }) => {
	const location = useLocation();

	return (
		<S.HeaderContainer>
			<S.HomeContainer>
				<S.AppLink to='/students'>
					<img src={logoPic} />
					<S.SidebarTitle>Ադմին</S.SidebarTitle>
				</S.AppLink>
			</S.HomeContainer>
			<S.HeaderItemsList>
				{headerItems.map(item => {
					return item.list ? (
						<Dropdown
							key={item.id}
							className='Header-Items-Dropdown'
						>
							<S.DropdownName>{item.text}</S.DropdownName>
							<S.DropdownItems className='Dropdown-Items'>
								{item.list.map(subItem => (
									<S.HeaderItem
										key={subItem.id}
										to={subItem.path}
										className={cx('Header-Item', {
											active:
												location.pathname === subItem.path,
										})}
									>
										{subItem.text}
									</S.HeaderItem>
								))}
							</S.DropdownItems>
						</Dropdown>
					) : (
						<S.HeaderItem
							key={item.id}
							to={item.path}
							className={cx({
								active: location.pathname === item.path,
							})}
						>
							{item.text}
						</S.HeaderItem>
					);
				})}
			</S.HeaderItemsList>
			<Dropdown>
				<S.UserContainer>
					<S.UserInfo>
						<S.Name>{user.name}</S.Name>
						<S.Role>{user.role}</S.Role>
					</S.UserInfo>
					<S.UserPic src={profilePic} />
				</S.UserContainer>
				<S.DropdownItems>
					<S.Item>Կարգավորումներ</S.Item>
					<S.Item onClick={logout}>Ելք</S.Item>
				</S.DropdownItems>
			</Dropdown>
		</S.HeaderContainer>
	);
};
