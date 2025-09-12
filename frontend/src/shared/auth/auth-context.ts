"use client";

import { createContext, Dispatch, SetStateAction } from "react";
import { User } from "../model";
import { Address } from "viem";

// ----------------------------------------------------------------------

export interface AuthContextType {
  user: User | null;
  address: Address | null;
  authenticated: boolean;
  setUser: Dispatch<SetStateAction<User | null>>;
  setAddress: Dispatch<SetStateAction<Address | null>>;
  checkUserLoad: () => Promise<void>;
  clearUser: () => void;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | null>(null);
