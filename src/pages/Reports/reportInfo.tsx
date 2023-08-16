import React from 'react'
import { Trans } from 'react-i18next'

import { Button, Modal } from '@/components'
import { IReport } from '@/types'
import { t } from '@/i18n'

import { listOfUsers, reportInfo } from './mock'

interface IReportInfo {
  onClose?: () => void
  selected?: IReport
}

const ReportInfo: React.FC<IReportInfo> = ({ selected, onClose }) => {
  return (
    <Modal
      closeOnBackdrop
      open={!!selected}
      onClose={onClose}
      className="w-1128"
      title={t('reportName')}
    >
      <div className="scroll-wrap">
        <div className="report-table">
          <div className="report-data">
            <div className="report-name">
              <Trans i18nKey="listUsers" count={listOfUsers.length}>
                <h4>
                  <span />
                </h4>
              </Trans>
            </div>
            <div className="data-table">
              <table>
                <thead>
                  <tr>
                    <td>{t('logIn')}</td>
                    <td>{t('name')}</td>
                    <td>{t('group')}</td>
                    <td>{t('country')}</td>
                    <td>{t('equity')}</td>
                    <td>{t('sL')}</td>
                  </tr>
                </thead>
                <tbody>
                  {listOfUsers.map((user, idx) => (
                    <tr key={idx}>
                      <td>{user.logIn}</td>
                      <td>{user.name}</td>
                      <td>{user.group}</td>
                      <td>{user.country || '-'}</td>
                      <td>
                        {t('number', {
                          value: user.equity,
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </td>
                      <td>{user.sL || '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="btn-group">
              <div className="group-wrap">
                <Button iconLeft="plus" type="button" className="main-btn">
                  {t('add')}
                </Button>
                <Button type="button" className="main-btn outline">
                  {t('group')}
                </Button>
                <Button type="button" className="main-btn outline">
                  {t('country')}
                </Button>
              </div>
            </div>
          </div>
          <div className="report-data">
            <div className="report-name">
              <Trans i18nKey="listSelectedUsers" count={reportInfo.length}>
                <h4>
                  <span />
                </h4>
              </Trans>
            </div>
            <div className="data-table">
              <table>
                <thead>
                  <tr>
                    <td>{t('logIn')}</td>
                    <td>{t('name')}</td>
                    <td>{t('group')}</td>
                  </tr>
                </thead>
                <tbody>
                  {reportInfo.map((info, idx) => (
                    <tr key={idx}>
                      <td>{info.logIn}</td>
                      <td>{info.name}</td>
                      <td>{info.group}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="btn-group">
              <div className="group-wrap">
                <Button
                  type="button"
                  iconLeft="delete"
                  className="main-btn delete"
                >
                  {t('delete')}
                </Button>
              </div>
              <div className="group-wrap">
                <Button type="button" className="main-btn">
                  {t('ok')}
                </Button>
                <Button
                  type="button"
                  iconLeft="close"
                  onClick={onClose}
                  className="main-btn outline"
                >
                  {t('cancel')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default ReportInfo
