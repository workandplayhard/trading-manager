export interface IDataTableProps<T> {
  loading?: boolean
  headers: string[]
  data: T[]
  pageSize?: number
  onLoadMore?: (_page: number) => void
  renderBody: (_pageData: T[]) => React.ReactNode
  children?: React.ReactNode
}
