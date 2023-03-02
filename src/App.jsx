import { BrowserRouter } from "react-router-dom"
import CustomRoutes from "./CustomRoutes"
import {QueryClientProvider, QueryClient} from 'react-query'


const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <CustomRoutes/>
        </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
