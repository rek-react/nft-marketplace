"use client";

import { Box, Stack, Typography } from "@mui/material";
import { Image } from "@/shared/ui";
import { ConnectWallet } from "@/features/auth";

export function ConnectWalletPage() {
  return (
    <Stack
      direction={{ md: "row" }}
      alignItems={{ xs: "center", md: "stretch" }}
      spacing={7}
    >
      <Image
        src="/images/scenery.png"
        sx={{
          flexBasis: "50%",
          width: 1,
          minHeight: { xs: 232, md: 1 },
        }}
        alt="scenery"
      />
      <Box sx={{ flexBasis: "50%", py: { xs: 4, md: 10, lg: 12 } }}>
        <Box sx={{ maxWidth: { xs: 340, md: 410 }, px: { xs: 2, md: 0 } }}>
          <Box>
            <Typography variant="h2">Connect wallet</Typography>
            <Typography sx={{ mt: 2 }}>
              Welcome! enter your details and start creating, collecting and
              selling NFTs. Choose a wallet you want to connect. There are
              several wallet providers.
            </Typography>
            <Box sx={{ mt: { xs: 4, md: 5, maxWidth: 320 } }}>
              <ConnectWallet />
            </Box>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
}
