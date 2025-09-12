"use client";

import {
  Box,
  Card,
  Stack,
  SxProps,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";
import { Image } from "@/shared/ui";
import { NFT } from "@/_mock/arrays/nfts";

interface NFTCardProps extends NFT {
  sx?: SxProps<Theme>;
}

export function NFTCard({
  author,
  avatar,
  highestBid,
  image,
  nftName,
  price,
  sx,
}: NFTCardProps) {
  const theme = useTheme();

  return (
    <Card sx={sx}>
      <Image src={image} alt={nftName} ratio="4/3" />

      <Box sx={{ py: { xs: 2, md: 3 }, px: { xs: 2, md: 4 } }}>
        <Typography variant="h5" sx={{ mb: 1 }}>
          {nftName}
        </Typography>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Image src={avatar} alt="avatar" sx={{ width: 24, height: 24 }} />
          <Typography
            variant="body2"
            sx={{ fontFamily: theme.typography.fontSecondaryFamily }}
          >
            {author}
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Box>
            <Typography variant="caption" color="action.active">
              Price
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontFamily: theme.typography.fontSecondaryFamily }}
            >
              {price} ETH
            </Typography>
          </Box>
          <Box>
            <Typography variant="caption" color="action.active">
              Highest Bid
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontFamily: theme.typography.fontSecondaryFamily }}
            >
              {highestBid} wETH
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Card>
  );
}
