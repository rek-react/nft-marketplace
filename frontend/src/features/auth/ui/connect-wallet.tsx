"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { SiweMessage } from "siwe";
import { useAccount, useChainId, useSignMessage } from "wagmi";
import { useConnectWallet } from "../api/use-connect-wallet";
import { handleTransactionError } from "@/shared/lib";
import { useAuthContext } from "@/shared/auth";
import { useGenerateNonce } from "../api/use-generate-nonce";
import { LoadingScreen } from "@/shared/ui";

export function ConnectWallet() {
  const { address, isConnected, connector } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const chainId = useChainId();

  const [isLoading, setIsLoading] = useState(false);

  const { mutateAsync: connectWallet } = useConnectWallet();
  const { mutateAsync: generateNonce } = useGenerateNonce();

  const { setUser, setAddress, logout } = useAuthContext();

  const handleSIWE = async () => {
    try {
      setIsLoading(true);

      const { nonce } = await generateNonce();

      const domain = window.location.host;
      const origin = window.location.origin;
      const statement = "Sign in to Example App with your Ethereum account";
      const msg = new SiweMessage({
        domain,
        address,
        statement,
        uri: origin,
        version: "1",
        chainId,
        nonce,
      });
      const messageToSign = msg.prepareMessage();

      const signature = await signMessageAsync({
        message: messageToSign,
        connector,
      });

      const { user, wallet } = await connectWallet({
        message: messageToSign,
        signature,
      });

      setUser(user);
      setAddress(wallet.address);
    } catch (err) {
      logout();
      handleTransactionError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isConnected && connector) {
      handleSIWE();
    }
  }, [isConnected, connector]);

  if (isLoading) return <LoadingScreen />;

  return (
    <ConnectButton.Custom>
      {({ openConnectModal }) => (
        <Button onClick={openConnectModal}>Connect Wallet</Button>
      )}
    </ConnectButton.Custom>
  );
}
