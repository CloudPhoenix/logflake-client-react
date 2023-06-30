import LogFlake from "@logflake/client"
import React from "react"

export interface ILogFlakeContext {
  appId: string
  hostname?: string | null
  server?: string | null
}

export const LogFlakeContext = React.createContext<LogFlake | null>(null)
