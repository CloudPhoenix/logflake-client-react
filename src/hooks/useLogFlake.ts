import React from "react"
import LogFlake from "@logflake/client"
import { LogFlakeContext } from "../context/LogFlakeContext"

const useLogFlake = () => {
  const logFlake = React.useContext(LogFlakeContext)

  if (!logFlake) {
    throw new Error("Make sure to only call useLogFlake within a <LogFlakeProvider>")
  }

  const sendLog = React.useCallback(
    async (level: number, content: string, correlation?: string | null, params?: object | undefined) => {
      await logFlake.sendLog(level, content, correlation, params)
    },
    [logFlake]
  )

  const sendException = React.useCallback(
    async (exception: Error, correlation?: string | null) => {
      await logFlake.sendException(exception, correlation)
    },
    [logFlake]
  )

  const sendPerformance = React.useCallback(
    async (label: string, duration?: number | null) => {
      await logFlake.sendPerformance(label, duration)
    },
    [logFlake]
  )

  const measurePerformance = React.useCallback(
    (label: string) => {
      return logFlake.measurePerformance(label).stop
    },
    [logFlake]
  )

  return {
    LogLevels: LogFlake.LogLevels,
    sendLog,
    sendException,
    sendPerformance,
    measurePerformance,
  }
}

export default useLogFlake
