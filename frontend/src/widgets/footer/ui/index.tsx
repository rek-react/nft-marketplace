"use client";

import {
  Container,
  Divider,
  Grid,
  Stack,
  SxProps,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";
import { Links } from "./Links";
import { Info } from "./Info";
import { Subscribe } from "@/features/subscribe";

interface FooterProps {
  sx?: SxProps<Theme>;
}

export function Footer({ sx }: FooterProps) {
  const theme = useTheme();

  return (
    <Stack component="footer" sx={sx}>
      <Divider
        sx={{
          borderWidth: 1,
          borderColor: theme.palette.background.default,
        }}
      />
      <Stack
        justifyContent="center"
        sx={{ py: 5, bgcolor: "background.paper", flexGrow: 1 }}
      >
        <Container maxWidth="lg">
          <Grid container sx={{ px: { lg: 4 } }} spacing={{ lg: 10, xs: 4 }}>
            <Grid size={{ lg: 4, xs: 12 }}>
              <Info />
            </Grid>
            <Grid size={{ lg: 3, xs: 12 }}>
              <Links />
            </Grid>
            <Grid size={{ lg: 5, md: 6, xs: 12 }}>
              <Subscribe />
            </Grid>
          </Grid>
          <Stack sx={{ mt: 4 }} spacing={3}>
            <Divider />
            <Typography variant="caption" color="text.secondary">
              Ⓒ NFT Market. Use this template free ly.
            </Typography>
          </Stack>
        </Container>
      </Stack>
    </Stack>
  );
}
