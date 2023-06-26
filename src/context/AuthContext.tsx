'use client'
import { SessionProvider } from "next-auth/react"

// 13 버전에서는 이렇게 씀 (우산 만들기임, 씌우는 건 app -> layout)

type Props = {
  children: React.ReactNode;
}

export default function AuthContext({children}: Props) {
  return <SessionProvider>{children}</SessionProvider>
}