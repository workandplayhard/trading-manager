import { useEffect, useRef, useState } from 'react'

type ISearchFn<T> = (_text: string) => Promise<T>

export function useSearch<ResType = void>(searchFn: ISearchFn<ResType>) {
  const timer = useRef<NodeJS.Timeout>()
  const [searching, setSearching] = useState<boolean>(false)
  const [searchRes, setSearchRes] = useState<ResType | undefined>()
  const [text, setText] = useState<string | undefined>()

  useEffect(() => {
    const debounce = text ? 300 : 0
    if (text !== null && text !== undefined) {
      timer.current = setTimeout(() => {
        setSearching(true)
        searchFn(text)
          .then((res: ResType) => setSearchRes(res))
          .finally(() => setSearching(false))
      }, debounce)
    }

    return () => {
      if (timer.current) {
        clearTimeout(timer.current)
      }
    }
  }, [text, searchFn])

  return {
    text,
    searching,
    searchRes,
    onChangeText: (val: string) => setText(val),
  }
}
