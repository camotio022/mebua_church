import { Box } from "@mui/material"
import { Root } from "../../styles/Root"

export const Login = () => {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100vw',
            height: '100vh',
            backgroundColor: Root.background1
        }}>
            Hello word!!
        </Box>
    )
}