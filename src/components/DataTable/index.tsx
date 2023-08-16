import { useCallback, useEffect, useMemo, useState } from 'react'
import classNames from 'classnames'

import { ArgumentType } from '@/types'
import { Button, FullScreenLoader } from '@/components'
import { t } from '@/i18n'
import { IDataTableProps } from './types'

export const DataTable = <T extends ArgumentType>({
  loading,
  headers,
  data,
  pageSize,
  onLoadMore,
  renderBody,
  children,
}: IDataTableProps<T>) => {
  const [pageIndex, setIndex] = useState(1)

  const pageData = useMemo(() => {
    if (!pageSize) return data
    return data.slice(0, pageIndex * pageSize)
  }, [data, pageIndex, pageSize])

  const hasMore = useMemo(() => {
    if (loading) return false
    if (!pageSize) return false
    if (data.length > pageIndex * pageSize) return true
    return false
  }, [loading, pageSize, data.length, pageIndex])

  const loadMore = useCallback(() => {
    setIndex(prev => prev + 1)
  }, [])

  useEffect(() => {
    onLoadMore?.(pageIndex)
  }, [onLoadMore, pageIndex])

  return (
    <div
      className={classNames('data-table', {
        loading: !!loading,
        'loading-more': loading && data.length,
      })}
    >
      <table>
        <thead>
          <tr>
            {headers.map((header: string, idx: number) => (
              <td key={idx}>{header}</td>
            ))}
          </tr>
        </thead>
        <FullScreenLoader sectionLoader loading={loading} />
        <tbody>{renderBody(pageData)}</tbody>
      </table>
      {hasMore && (
        <div className="more-btn">
          <Button onClick={loadMore} iconRight="chevron-down-double">
            {t('more')}
          </Button>
        </div>
      )}
      {children}
    </div>
  )
}
export default DataTable
