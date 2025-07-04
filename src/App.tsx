import Router from "./components/Router"
import AppLayout from "./Layout/AppLayout"

function App() {
  return <AppLayout children={<Router />} />
}

export default App
