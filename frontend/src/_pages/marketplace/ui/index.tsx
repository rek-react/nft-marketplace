import { MAIN_BOX } from "@/shared/config";
import { SearchInput } from "@/shared/ui";
import { Box, Container, Stack, Typography } from "@mui/material";
import { MarketplaceSection } from "./components/marketplace-section";

export async function MarketplacePage() {
  return (
    <Box
      sx={{
        pt: {
          sm: `${MAIN_BOX.PT_MAIN_DESKTOP}px`,
          xs: `${MAIN_BOX.PT_MOBILE}px`,
        },
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={1} sx={{ mb: 4 }}>
          <Typography variant="h2">Browse Marketplace</Typography>
          <Typography>
            Browse through more than 50k NFTs on the NFT Marketplace.
          </Typography>
        </Stack>
        <SearchInput placeholder="Search your favourite NFTs" />
      </Container>
      <Box sx={{ mt: { sm: 10, xs: 5 } }}>
        <MarketplaceSection />
      </Box>
    </Box>
  );
}
