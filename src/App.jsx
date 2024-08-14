import { AppProvider } from "./context"
import { AppRoutes } from "./routes";
import './index.css';
const App = ()=> {

    return(
        <AppProvider>
            <AppRoutes/>
        </AppProvider>
    )
}
export default App;