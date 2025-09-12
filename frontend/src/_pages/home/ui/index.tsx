import { Box, Container, Stack } from "@mui/material";
import { HeroSection } from "./components/hero-section";
import { TopRatedSection } from "./components/top-rated-section";
import { BrowseCategoriesSection } from "./components/browse-categories-section";
import { MoreNFTsSection } from "./components/more-nfts-section";
import { HowItWorksSection } from "./components/how-it-works-section";
import { SubscribeSection } from "./components/subscribe-section";
import { MAIN_BOX } from "@/shared/config";

export async function HomePage() {
  return (
    <Box
      sx={{
        pt: {
          sm: `${MAIN_BOX.PT_MAIN_DESKTOP}px`,
          xs: `${MAIN_BOX.PT_MOBILE}px`,
        },

        pb: {
          sm: `${MAIN_BOX.PB_MAIN_DESKTOP}px`,
          xs: `${MAIN_BOX.PB_MOBILE}px`,
        },
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={{ md: 20, xs: 10 }}>
          <HeroSection />
          <TopRatedSection />
          <BrowseCategoriesSection />
          <MoreNFTsSection />
          <HowItWorksSection />
          <SubscribeSection />
        </Stack>
      </Container>
    </Box>
  );
}
