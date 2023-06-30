import { useLogFlake } from "@logflake/react"
import React from "react"

const App = () => {
  const { sendLog, sendException, sendPerformance, measurePerformance } = useLogFlake()

  const handleSendLog = React.useCallback(() => {
    sendLog(1, "TEST LogFlake Client React")
  }, [sendLog])

  const handleSendException = React.useCallback(() => {
    sendException(new Error("TEST LogFlake Client React"))
  }, [sendException])

  const handleSendPerformance = React.useCallback(() => {
    sendPerformance("TEST LogFlake Client React", 1000)
  }, [sendPerformance])

  const handleMeasurePerformance = React.useCallback(() => {
    const stop = measurePerformance("TEST LogFlake Client React")

    setTimeout(() => {
      stop()
    }, 3000)
  }, [measurePerformance])

  return (
    <main>
      <h2>LogFlake Client React</h2>
      <hr />
      <button onClick={handleSendLog}>SEND LOG</button>
      <button onClick={handleSendException}>SEND EXCEPTION</button>
      <button onClick={handleSendPerformance}>SEND PERFORMANCE</button>
      <button onClick={handleMeasurePerformance}>MEASURE PERFORMANCE</button>
    </main>
  )
}

export default App
