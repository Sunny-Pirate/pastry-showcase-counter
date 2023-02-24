import React, {ReactNode} from 'react';
import Head from "next/head";

type LayoutComponentProps = {
    children: ReactNode
    pageName: string
}
const Layout = (props: LayoutComponentProps) => {

    const containerClasses = `ctx${props.pageName.substring(0, 1).toUpperCase()}${props.pageName.substring(1).toLowerCase()}`

    return <div className={containerClasses}>
        <Head>
            <meta name={"viewport"} content={"width=device-width, initial-scale=1"}/>
        </Head>
        <main>
            {props.children}
        </main>
    </div>;
};

export default Layout;
