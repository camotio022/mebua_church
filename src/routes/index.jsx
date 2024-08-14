import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "../auth/Login"
export const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )

}