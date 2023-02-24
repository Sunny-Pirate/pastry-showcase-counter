import {AppProps} from 'next/app'
import "../styles/globals.scss"
import {ThemeProvider} from "@mui/material";
import {muiTheme} from "../components/mui-theme";


function MyApp({Component, pageProps}: AppProps) {
    return <ThemeProvider theme={muiTheme}>
        <Component {...pageProps} />
    </ThemeProvider>;
}


export default MyApp;

