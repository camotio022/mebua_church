import { Container, styled } from "@mui/material";
import { Root } from "../../styles/Root";
import Image1 from '../../images/background.jpg'
export const CssLoginStyles = {
    container: styled(Container)(({ }) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '100vw',
        height: '100vh',
        gap: '10px',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    })),

}