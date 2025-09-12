import { Image } from "@/shared/ui";
import { Box, Card, Grid, Stack, Typography } from "@mui/material";

interface Item {
  imageName: string;
  title: string;
  text: string;
}

const array: Item[] = [
  {
    imageName: "your-wallet",
    title: "Setup Your wallet",
    text: "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
  },
  {
    imageName: "collection",
    title: "Create Collection",
    text: "Upload your work and setup your collection. Add a description, social links and floor price.",
  },
  {
    imageName: "start-earning",
    title: "Start Earning",
    text: "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
  },
];

export function HowItWorksSection() {
  return (
    <Box>
      <Typography variant="h3">How it works</Typography>
      <Typography sx={{ mt: 1 }}>Find out how to get started</Typography>
      <Grid
        container
        spacing={{ lg: 4, md: 3, xs: 2 }}
        sx={{ mt: { xs: 5, md: 7 } }}
      >
        {array.map(({ imageName, title, text }) => (
          <Grid size={{ sm: 4, xs: 12 }} key={title}>
            <Card sx={{ height: 1, p: { xs: 2, sm: 3 } }}>
              <Stack
                direction={{ xs: "row", sm: "column" }}
                alignItems="center"
                spacing={2}
              >
                <Image
                  src={`/illustrations/${imageName}.svg`}
                  sx={{
                    width: { md: 250, sm: 160, xs: 100 },
                    height: { md: 250, sm: 160, xs: 100 },
                    flexShrink: 0,
                  }}
                  alt={title}
                />
                <Stack spacing={1} textAlign={{ xs: "left", sm: "center" }}>
                  <Typography variant="h5">{title}</Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: { xs: 12, md: 16 } }}
                  >
                    {text}
                  </Typography>
                </Stack>
              </Stack>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
