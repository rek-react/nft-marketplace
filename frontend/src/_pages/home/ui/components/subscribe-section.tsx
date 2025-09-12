"use client";

import { Subscribe } from "@/features/subscribe";
import { Image } from "@/shared/ui";
import { Box, Card, Stack, Typography, useTheme } from "@mui/material";

export function SubscribeSection() {
  const theme = useTheme();

  return (
    <Card
      sx={{
        p: { lg: 7, sm: 4 },
        backgroundColor: {
          xs: "transparent",
          sm: theme.palette.background.paper,
        },
        boxShadow: {
          xs: "none",
          sm: 1,
        },
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        alignItems={{ sm: "center" }}
        spacing={{ lg: 10, xs: 4 }}
      >
        <Box sx={{ flexBasis: "50%" }}>
          <Image
            src="/images/astronaut.png"
            alt="astronaut"
            sx={{
              height: { lg: 310, sm: 280, xs: 255 },
              borderRadius: "20px",
            }}
          />
        </Box>

        <Stack flexBasis="50%">
          <Typography variant="h3">Join our weekly digest</Typography>
          <Typography sx={{ mt: 1, mb: 5 }}>
            Get exclusive promotions & updates straight to your inbox.
          </Typography>
          <Subscribe />
        </Stack>
      </Stack>
    </Card>
  );
}
