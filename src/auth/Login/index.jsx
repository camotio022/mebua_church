import { Box, Button, TextField } from "@mui/material"
import { Root } from "../../styles/Root"
import { CssLoginStyles } from "./styles"

export const Login = () => {
    return (
        <CssLoginStyles.container>
            Insira seu código de acesso!!             <TextField />
            <Button sx={{
                color: Root.primary,
                backgroundColor: Root.pastelPrimary
            }}>
                ENTRAR
            </Button>
        </CssLoginStyles.container>
    )
}