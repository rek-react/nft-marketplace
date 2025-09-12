"use client";

import { Image, RocketIcon } from "@/shared/ui";
import { Box, Button, Stack, Typography } from "@mui/material";

export function HeroSection() {
  return (
    <Stack direction={{ xs: "column", sm: "row" }} spacing={4}>
      <Stack
        spacing={{ xs: 3, lg: 4 }}
        flexBasis="50%"
        alignItems={{ xs: "center", sm: "stretch" }}
      >
        <Stack spacing={{ xs: 2, lg: 3 }}>
          <Typography variant="h1">
            Discover digital art & Collect NFTs
          </Typography>
          <Typography>
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </Typography>
        </Stack>

        <Image
          src="/images/heroanimation.gif"
          alt="heroanimation"
          priority
          sx={{
            height: 310,
            width: "80%",
            display: { xs: "block", sm: "none" },
          }}
        />

        <Stack spacing={{ xs: 3, lg: 4 }}>
          <Button
            variant="contained"
            size="large"
            startIcon={<RocketIcon />}
            sx={{
              alignSelf: { sm: "flex-start" },
            }}
          >
            Get Started
          </Button>
          <Stack direction="row" spacing={{ xs: 4, sm: 6, lg: 8 }}>
            <Box>
              <Typography variant="h4">240k+</Typography>
              <Typography>Total Sale</Typography>
            </Box>
            <Box>
              <Typography variant="h4">100k+</Typography>
              <Typography>Auctions</Typography>
            </Box>
            <Box>
              <Typography variant="h4">240k+</Typography>
              <Typography>Artists</Typography>
            </Box>
          </Stack>
        </Stack>
      </Stack>

      <Image
        src="/images/heroanimation.gif"
        alt="heroanimation"
        sx={{
          height: { lg: 510, md: 380, sm: 310 },
          width: { lg: 510, md: 380, sm: 310 },
          display: { xs: "none", sm: "block" },
        }}
      />
    </Stack>
  );
}
