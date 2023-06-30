import React from "react"
import { ILogFlakeContext, LogFlakeContext } from "../LogFlakeContext"
import LogFlake from "@logflake/client"

export const LogFlakeProvider: React.FC<React.PropsWithChildren<Pick<ILogFlakeContext, "appId" | "hostname" | "server">>> = ({
  appId,
  hostname,
  server,
  children,
}) => {
  const logFlakeInstance = React.useMemo(() => {
    return !appId ? null : new LogFlake(appId, hostname, server)
  }, [appId, hostname, server])

  return <LogFlakeContext.Provider value={logFlakeInstance}>{children}</LogFlakeContext.Provider>
}
