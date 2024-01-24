import React from 'react'
import cx from 'classnames'

import * as S from './Layout.styles'
import { AppLoader } from 'ui/AppLoader'
import { Header } from './components/Header'

export const Layout = ({
  children,
  appLoading
}) => {
  return (
    <S.LayoutContainer className='Layout'>
      {
        appLoading &&
          <AppLoader />
      }
      <S.ContentContainer className={cx('Content-Container', { blur: appLoading })}>
        <S.LayoutHeader className='Layout-Header'>
          <Header />
        </S.LayoutHeader>
        <S.LayoutContent className='Layout-Content'>
          { children }
        </S.LayoutContent>
      </S.ContentContainer>
    </S.LayoutContainer>
  )
}