import { wrapper } from "../store";
import "../styles/globals.css";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore({ pageProps, ...rest });
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
