"use client";

import { topCreators } from "@/_mock";
import { PATHS } from "@/shared/config";
import { Image, Link, RocketIcon } from "@/shared/ui";
import {
  Badge,
  Box,
  Button,
  Card,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

export function TopRatedSection() {
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
          <Typography variant="h3">Top creators</Typography>
          <Typography sx={{ mt: 1 }}>
            Checkout Top Rated Creators on the NFT Marketplace
          </Typography>
        </Box>
        <Button
          sx={{
            flexShrink: 0,
            display: { xs: "none", sm: "inline-flex" },
          }}
          href={PATHS.rankings}
          variant="outlined"
          startIcon={<RocketIcon initialColor={theme.palette.primary.main} />}
          component={Link}
        >
          View Rankings
        </Button>
      </Stack>
      <Box sx={{ mt: { xs: 5, md: 7 } }}>
        <Grid container spacing={{ lg: 4, md: 3, xs: 2 }}>
          {topCreators.map(({ id, image, author, totalSales }, index) => (
            <Grid size={{ lg: 3, md: 4, sm: 6, xs: 12 }} key={id}>
              <Card sx={{ p: 2 }}>
                <Box sx={{ position: "relative" }}>
                  <Badge
                    sx={{
                      position: "absolute",
                      left: { lg: 20, xs: 6 },
                      top: { lg: 18, xs: 6 },
                    }}
                    badgeContent={index + 1}
                  />

                  <Stack
                    direction={{ lg: "column", xs: "row" }}
                    alignItems={{ lg: "center" }}
                    spacing={2}
                  >
                    <Image
                      src={image}
                      alt={author}
                      sx={{
                        width: { xs: 60, lg: 120 },
                        height: { xs: 60, lg: 120 },
                        borderRadius: "50%",
                      }}
                    />
                    <Stack alignItems={{ lg: "center" }} spacing={1}>
                      <Typography variant="h5">{author}</Typography>
                      <Stack direction="row" spacing={1}>
                        <Typography variant="body2" color="action.active">
                          Total Sales:
                        </Typography>
                        <Typography variant="body2">
                          {totalSales} ETH
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Button
        sx={{
          mt: 5,
          display: { xs: "flex", sm: "none" },
        }}
        href={PATHS.rankings}
        variant="outlined"
        startIcon={<RocketIcon initialColor={theme.palette.primary.main} />}
        component={Link}
      >
        View Rankings
      </Button>
    </Box>
  );
}
