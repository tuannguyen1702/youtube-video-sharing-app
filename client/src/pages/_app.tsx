import React from "react";
import { AppProps } from "next/app";
// import { Provider } from 'react-redux';
// import store from '../store';
import "../styles/globals.css";
import Header from "@/shared/layouts/Header";

const App = ({ Component, pageProps }: AppProps) => {
    return (
        // <Provider store={store}>
        <>
            <Header />
            <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <Component {...pageProps} />
            </div>
        </>
        // </Provider>
    );
};

export default App;
