"use client";

import { nfts } from "@/_mock/arrays/nfts";
import { PATHS } from "@/shared/config";
import { EyeIcon, Link } from "@/shared/ui";
import { NFTList } from "@/widgets/nft-list";
import { Box, Button, Stack, Typography, useTheme } from "@mui/material";

export function MoreNFTsSection() {
  const theme = useTheme();

  return (
    <Box>
      <Stack
        direction="row"
        spacing={4}
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <Box>
          <Typography variant="h3">Discover More NFTs</Typography>
          <Typography sx={{ mt: 1 }}>Explore new trending NFTs</Typography>
        </Box>
        <Button
          sx={{ flexShrink: 0, display: { xs: "none", sm: "inline-flex" } }}
          href={PATHS.marketplace}
          variant="outlined"
          size="large"
          startIcon={<EyeIcon initialColor={theme.palette.primary.main} />}
          component={Link}
        >
          See All
        </Button>
      </Stack>
      <Box sx={{ mt: { xs: 5, md: 7 } }}>
        <NFTList items={nfts} />
      </Box>
      <Button
        sx={{
          mt: 5,
          display: { xs: "flex", sm: "none" },
        }}
        href={PATHS.marketplace}
        variant="outlined"
        startIcon={<EyeIcon initialColor={theme.palette.primary.main} />}
        component={Link}
      >
        See All
      </Button>
    </Box>
  );
}
