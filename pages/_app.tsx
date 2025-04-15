import "../src/styles/vendors/fontawesome-free/css/all.min.css";
import "../src/styles/css/style.css";

import "../src/styles/vendors/jquery/jquery.min.js";
import "../src/styles/vendors/popper.js/popper.min.js";
// import "../src/styles/vendors/bootstrap/dist/js/bootstrap.min.js";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
