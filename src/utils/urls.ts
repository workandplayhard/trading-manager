export const notFoundPath = '/404'
export const appPath = '/'
export const overviewPath = 'overview'
export const accountsPath = 'accounts'
export const ordersPath = 'orders'
export const reportsPath = 'reports'
export const journalPath = 'journal'
export const reportsHistoryPath = 'reports-history'
export const settingsPath = 'settings'
export const signInPath = '/sign-in'

export const isActiveLink = (locationPath: string, path: string): boolean => {
  const _path = locationPath.split('/')

  return _path.includes(path)
}

export const generatePath = (
  path: string,
  params: { [x: string]: string | number | undefined | null } = {},
): string => {
  let newPath: string = path
  Object.keys(params).forEach(param => {
    newPath = newPath.replace(`:${param}`, `${params[param] || ''}`)
  })

  return newPath
}
