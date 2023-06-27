'use client'
import { SWRConfig } from "swr"

// 13 버전에서는 이렇게 씀 (우산 만들기임, 씌우는 건 app -> layout)

type Props = {
  children: React.ReactNode;
}

export default function SWRConfigContext({children}: Props) {
  return <SWRConfig
    value={{
      refreshInterval: 3000,
      fetcher: (url: string) => fetch(url).then((res) => res.json())
    }}
  >
    {children}
  </SWRConfig>
}