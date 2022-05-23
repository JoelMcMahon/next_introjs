import "../styles/globals.css";
import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import ToolTipContextProvider from "../context/ToolTipContextProvider";
import { GetStaticPaths } from "next";
import { getSteps } from "../services";
import "intro.js/introjs.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ToolTipContextProvider>
      <Component {...pageProps} />
    </ToolTipContextProvider>
  );
}

export default MyApp;
