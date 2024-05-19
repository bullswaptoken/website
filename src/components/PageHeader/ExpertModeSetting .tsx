import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Input, Text } from 'uikit'
import { useUserDeadline, useExpertModeManager } from 'state/user/hooks'
import QuestionHelper from '../QuestionHelper'
import TranslatedText from '../TranslatedText'
import Toggle from 'components/Toggle'

const StyledTransactionDeadlineSetting = styled.div`
  margin-bottom: 16px;
`

const Label = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 8px;
`

const Field = styled.div`
  align-items: center;
  display: inline-flex;

  & > ${Input} {
    max-width: 100px;
  }

  & > ${Text} {
    font-size: 14px;
    margin-left: 8px;
  }
`

const ExpertModeSetting = () => {
  const [expertMode, toggleSetExpertMode] = useExpertModeManager()
  const [error, setError] = useState<string | null>(null)

  return (
    <StyledTransactionDeadlineSetting>
      <Label>
        <Text style={{ fontWeight: 600, marginRight: 10 }}>
          <TranslatedText translationId={90}>Expert Mode</TranslatedText>
        </Text>
        <Toggle toggle={() => {
          toggleSetExpertMode()
        } } isActive={expertMode} />
      </Label>
      {error && (
        <Text mt="8px" color="failure">
          {error}
        </Text>
      )}
    </StyledTransactionDeadlineSetting>
  )
}

export default ExpertModeSetting
