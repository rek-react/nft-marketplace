"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import { AuthContext } from "@/shared/auth";
import { User } from "@/shared/model";
import { useGetUserMe } from "@/entities/user";
import { useLogout } from "@/features/auth";
import { useDisconnect, useAccount } from "wagmi";
import { Address } from "viem";

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const {
    data: userData,
    isSuccess: isSuccessGetUser,
    refetch: refetchUser,
  } = useGetUserMe();

  const logoutUser = useLogout();
  const { disconnect } = useDisconnect();
  const { address: wagmiAddress, isConnected } = useAccount();

  const [user, setUser] = useState<User | null>(userData?.user ?? null);
  const [address, setAddress] = useState<Address | null>(
    userData?.wallet?.address ?? null,
  );

  useEffect(() => {
    if (isSuccessGetUser && userData) {
      setUser(userData.user);
      setAddress(userData.wallet.address);
    } else {
      setUser(null);
      setAddress(null);
    }
  }, [isSuccessGetUser, userData]);

  useEffect(() => {
    if (!isConnected) {
      setAddress(null);
    } else if (wagmiAddress) {
      setAddress(wagmiAddress);
    }
  }, [wagmiAddress, isConnected]);

  const checkUserLoad = async () => {
    await refetchUser();
  };

  const logout = async () => {
    disconnect();
    setUser(null);
    setAddress(null);
    logoutUser.mutate();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        address,
        setUser,
        setAddress,
        authenticated: !!user && !!address,
        checkUserLoad,
        clearUser: () => {
          setUser(null);
          setAddress(null);
        },
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
