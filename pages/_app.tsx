import { wrapper } from "../store";
import "../styles/globals.css";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import Navbar from "components/common/navbar";

export default function App({ Component, pageProps, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore({ pageProps, ...rest });
  return (
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  );
}
