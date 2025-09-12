import { NFT } from "@/_mock/arrays/nfts";
import { NFTCard } from "@/entities/nft";
import { Grid, SxProps, Theme } from "@mui/material";

interface NFTListProps {
  items: NFT[];
  cardSx?: SxProps<Theme>;
}

export function NFTList({ items, cardSx }: NFTListProps) {
  return (
    <Grid container spacing={{ lg: 4, md: 3, xs: 2 }}>
      {items.map(item => (
        <Grid size={{ md: 4, sm: 6, xs: 12 }} key={item.id}>
          <NFTCard {...item} sx={cardSx} />
        </Grid>
      ))}
    </Grid>
  );
}
