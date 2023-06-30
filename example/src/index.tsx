import React from "react"
import ReactDOM from "react-dom/client"
import { LogFlakeProvider } from "@logflake/react"
import App from "./App"
import "dotenv/config"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <LogFlakeProvider appId={process.env.LOG_FLAKE_APP_ID!} hostname={process.env.LOG_FLAKE_HOSTNAME} server={process.env.LOG_FLAKE_SERVER}>
      <App />
    </LogFlakeProvider>
  </React.StrictMode>
)
