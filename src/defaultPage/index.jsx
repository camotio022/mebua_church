import { Box, Button, Container, styled, Typography } from "@mui/material"
import MebuaLogo from '../images/background.jpg'
import { Root } from "../styles/Root"
export const WelcomePage = () => {
    return (
        <Styles.container>
            <Styles.childContainer>
                <Styles.TitleWelcome variant="h1">
                    Bem-vindo à Paróquia Nossa Senhora de Anunciação Moneia!
                    Estamos felizes em ter você aqui. 🌸
                    Nossa paróquia é um lugar de acolhimento, oração e fé. Juntos, buscamos crescer espiritualmente e viver o amor de Deus em comunidade.
                    Que a paz e as bênçãos de Nossa Senhora de Anunciação Moneia estejam sempre com você e sua família.
                    Seja bem-vindo(a)!
                </Styles.TitleWelcome>
                <Typography sx={{
                    width: '90%',
                    borderRadius: '12px',
                    color: Root.white,
                    backgroundColor: Root.primary,
                    fontFamily: 'Lobster, cursive',
                    padding: '12px',
                    textAlign: 'center'
                }}>
                    ENTRAR
                </Typography>
            </Styles.childContainer>
        </Styles.container>
    )
}
export const Styles = {
    container: styled(Box)(({ }) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '100vw',
        height: '100vh',
        backgroundImage: `url(${MebuaLogo})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat-y', // Repete a imagem apenas verticalmente
        backgroundPosition: '0 0',
        animation: 'scrollBackground 60s linear infinite', // Duração ajustada para um rolo suave
        '@keyframes scrollBackground': {
            '0%': {
                backgroundPosition: '0 0',
            },
            '100%': {
                backgroundPosition: '0 100vh', // Move a imagem para cima
            },
        },
    })),
    childContainer: styled(Container)(({ }) => ({
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
        minWidth: '100%',
        height: '100%',
        backgroundColor: 'rgba(51, 255, 87, 0.3)',
        backgroundBlendMode: 'overlay',
    })),
    TitleWelcome: styled(Typography)(({ }) => ({
        width: '90%',
        fontFamily: 'Lobster, cursive',
        fontSize: '1.3rem',
        padding: '12px',
        color: Root.white,
        backgroundColor: Root.primary,
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        letterSpacing: '1px',
        textAlign: 'center',
        borderRadius: '12px',
        boxShadow: ' rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px'
    }))
}