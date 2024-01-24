import React, { useState } from 'react'
import cx from 'classnames'

import * as S from './Steps.styles'
import checkmarkIcon from 'images/checkmark.png'
import { createArrayOfLength } from 'helpers/createArrayOfLength'
import { Button } from 'ui'
import { ButtonContainer } from 'ui/Button'
import { pick } from 'lodash'
import { isObjectEmpty } from 'helpers'

export const Steps = ({
  onClose,
  onSubmit,
  children,
  validate,
  setErrors,
  onStepChange
}) => {
  const [currentStep, setCurrentStep] = useState(0)

  const stepsCount = children.length
  const isLastStep = currentStep === stepsCount - 1

  const goToNextStep = async () => {
    const nextStep = currentStep + 1
    const errors = await validate()

    if (isObjectEmpty(errors)) {
      if (isLastStep)
        onSubmit()
      else
        setCurrentStep(nextStep)

      onStepChange(nextStep)
    }

    setErrors(errors)
  }

  const changeStep = (step) => {
    if (step <= currentStep + 1) {
      const newStep = step - 1

      setCurrentStep(newStep)
      onStepChange(newStep)
    }
      
  }

  return (
    <S.StepsContainer>
      <S.StepsWrapper>
        <S.StepsListContainer>
          {
            createArrayOfLength(stepsCount).map(step => {
              const checked = currentStep + 1 > step

              return (
                <S.StepItemContainer className={cx({ checked, current: step === currentStep + 1  })}>
                  <S.StepLine />
                  <S.Step onClick={() => changeStep(step)}>
                    {
                      checked
                        ? <img src={checkmarkIcon} />
                        : step
                    }
                  </S.Step>
                  <S.StepLine />
                  <S.StepCircle />
                </S.StepItemContainer>
              )
            })
          }
        </S.StepsListContainer>
        <S.StepContent>
          { children[currentStep] }
        </S.StepContent>
      </S.StepsWrapper>
      <S.ButtonsContainer>
        <Button className='bordered' onClick={onClose}>
          Չեղարկել
        </Button>
        <Button onClick={goToNextStep}>
          {
            isLastStep
              ? 'Հաստատել'
              : 'Շարունակել'
          }
        </Button>
      </S.ButtonsContainer>
    </S.StepsContainer>
  )
}

Steps.defaultProps = {
  count: 0
}