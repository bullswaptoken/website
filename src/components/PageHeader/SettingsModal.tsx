import React from 'react'
import { Modal } from 'uikit'
import SlippageToleranceSetting from './SlippageToleranceSetting'
import TransactionDeadlineSetting from './TransactionDeadlineSetting'
import ExpertModeSetting from './ExpertModeSetting '

type SettingsModalProps = {
  onDismiss?: () => void
}

// TODO: Fix UI Kit typings
const defaultOnDismiss = () => null

const SettingsModal = ({ onDismiss = defaultOnDismiss }: SettingsModalProps) => {
  return (
    <Modal title="Settings" onDismiss={onDismiss}>
      <SlippageToleranceSetting />
      <TransactionDeadlineSetting />
      <ExpertModeSetting />
    </Modal>
  )
}

export default SettingsModal
