import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import { Button, Icon, Modal } from '@/components'
import { IUser } from '@/types'
import { t } from '@/i18n'

import { PATHS } from './constants'

import {
  TradesTab,
  ProfileTab,
  ExposureTab,
  NewOrderTab,
  SecurityTab,
} from './tabs'

interface IAccountModal {
  open: boolean
  onClose?: () => void
  user?: IUser
}

const AccountModal: React.FC<IAccountModal> = ({ open, onClose, user }) => {
  return (
    <Tabs className="full">
      <Modal
        open={open}
        closeOnBackdrop={false}
        onClose={onClose}
        className="w-1128"
        title={t(!user ? 'newAccount' : 'viewAccount', { id: user?.Login })}
        modalActions={[
          <Button
            key={1}
            type="button"
            iconLeft="close"
            onClick={onClose}
            children={t('cancel')}
            className="main-btn outline"
          />,
          <Button
            key={2}
            type="button"
            children={t('help')}
            iconLeft="help-circle"
            className="main-btn outline"
          />,
        ]}
      >
        <div className="nav-box">
          <TabList>
            {PATHS[!!user ? 'edit' : 'create'].map((pathDetail, idx) => (
              <Tab key={idx} selectedClassName="active">
                <a onClick={() => undefined}>
                  <Icon iconName={pathDetail.icon} />
                  {t(pathDetail.label)}
                </a>
              </Tab>
            ))}
          </TabList>
        </div>
        <div className="data-content">
          <div className="scroll-wrap">
            <TabPanel default>
              <ProfileTab open={open} user={user} />
            </TabPanel>
            {!!user && (
              <>
                <TabPanel>
                  <TradesTab user={user} />
                </TabPanel>
                <TabPanel>
                  <ExposureTab />
                </TabPanel>
                <TabPanel>
                  <NewOrderTab />
                </TabPanel>
                <TabPanel>
                  <SecurityTab user={user} />
                </TabPanel>
              </>
            )}
          </div>
        </div>
      </Modal>
    </Tabs>
  )
}

export default AccountModal
