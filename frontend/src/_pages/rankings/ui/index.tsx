import { MAIN_BOX } from "@/shared/config";
import { Box, Container, Stack, Typography } from "@mui/material";
import { RankingsSection } from "./components/rankings-section";

export async function RankingsPage() {
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
          <Typography variant="h2">Top Creators</Typography>
          <Typography>
            Check out top ranking NFT artists on the NFT Marketplace.
          </Typography>
        </Stack>
        <RankingsSection />
      </Container>
    </Box>
  );
}
