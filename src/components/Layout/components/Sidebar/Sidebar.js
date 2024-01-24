import React from 'react'

import * as S from './Sidebar.styles'
import logoPic from 'images/logo.png'
import { sidebarItems } from './Sidebar.config'
import cx from 'classnames'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'

export const Sidebar = () => {
  const location = useLocation()

  return (
    <S.SidebarContainer>
      <S.SidebarHeader>
        <S.AppLink to='/home'>
          <S.Logo src={logoPic} />
          <S.SidebarTitle>
            ԵԻՊՔ Ադմին
          </S.SidebarTitle>
        </S.AppLink>
      </S.SidebarHeader>
      <S.SidebarContent>
        <S.SidebarItems>
          {
            sidebarItems.map(item => ((
              <S.SidebarItem
                key={item.id}
                to={item.path}
                className={cx({ active: item.path === location.pathname })}
              >
                { item.text }
              </S.SidebarItem>
            )))
          }
        </S.SidebarItems>
      </S.SidebarContent>
      <S.SidebarFooter>
        Copyright © 1960 - 2022 Երևանի Ինֆորմատիկայի Պետական Քոլեջ
      </S.SidebarFooter>
    </S.SidebarContainer>
  )
}