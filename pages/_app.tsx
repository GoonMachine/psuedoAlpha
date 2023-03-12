import { ethos, EthosConnectProvider } from "ethos-connect";
import ExampleIcon from "../icons/ExampleIcon";
import { SignInButton } from 'ethos-connect';


import "tailwindcss/tailwind.css"

import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NETWORK } from "../lib/constants";
const btnClasses = "btn btn-xs sm:btn-sm md:btn-md lg:btn-lg";


function MyApp({ Component, pageProps }: AppProps) {
  const ethosConfiguration = {
    // When testing, use our staging link. When in production you may comment this line out.
    // walletAppUrl: 'https://sui-wallet-staging.onrender.com',
    apiKey: "ethos-example-app",
    preferredWallets: ['Ethos Wallet'],
    network: NETWORK
  };

  return (
    <EthosConnectProvider
      ethosConfiguration={ethosConfiguration}
      dappName="EthosConnect Example App"
      dappIcon={<ExampleIcon />}
      connectMessage="Your connect message goes here!"
    >
      <div
        className="relative flex flex-col flex-1 w-full overflow-hidden bg-black shadow xs:max-w-sm"
        style={{ maxHeight: 812 }}
      >
<header className="flex items-center justify-between px-4 py-3 border-b">
  <div>
    <p className="text-lg font-extrabold text-white p-0">PseudoSui</p>
  </div>
  <div>
  <SignInButton className="btn btn-active btn-accent w-40 ">Sign In</SignInButton>
  </div>
</header>

      </div>
      <Component {...pageProps} />
    </EthosConnectProvider>
  );
}

export default MyApp;


