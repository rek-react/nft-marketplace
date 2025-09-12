export const ENDPOINTS = {
  auth: {
    connectWallet: "/auth/connect-wallet",
    nonce: "/auth/nonce",
    logout: "/auth/logout",
  },

  users: {
    me: "/users/me",
  },

  subscribe: "/subscribe",

  categories: {
    list: "/categories",
  },
} as const;
