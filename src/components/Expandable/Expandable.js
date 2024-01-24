import React, { useState } from 'react'
import cx from 'classnames'

import * as S from './Expandable.styles'
import arrowIcon from 'images/arrow.png'

export const Expandable = ({
  title,
  children
}) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <S.ExpandableContainer className={cx('Expandable', { expanded: isExpanded })}>
      <S.ExpandableContainerHeader
        className='Expandable-Header'
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div>{ title }</div>
        <S.ExpandIconContainer className='Expand-Icon'>
          <img alt='expand-icon' src={arrowIcon} />
        </S.ExpandIconContainer>
      </S.ExpandableContainerHeader>
      {
        isExpanded && <S.Divider />
      }
      {
        isExpanded &&
          <S.ExpandableContent>
            { children }
          </S.ExpandableContent>
      }
    </S.ExpandableContainer>
  )
}