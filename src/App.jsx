import { BrowserRouter } from "react-router-dom"
import CustomRoutes from "./CustomRoutes"
import {QueryClientProvider, QueryClient} from 'react-query'
import NavTabs from './Components/NavTabs'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <NavTabs/>
            <CustomRoutes/>
        </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
