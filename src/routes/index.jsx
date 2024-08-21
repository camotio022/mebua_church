import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "../auth/Login"
import { WelcomePage } from "../defaultPage"
export const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
            </Routes>
        </BrowserRouter>
    )

}