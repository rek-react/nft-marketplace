import { Image, Link, Logo } from "@/shared/ui";
import { Box, Stack, Typography } from "@mui/material";
import { PLATFORMS } from "../config";

export function Info() {
  return (
    <Stack>
      <Logo
        sx={{
          mb: { md: 4, xs: 3 },
          width: 244,
        }}
      />
      <Typography color="text.secondary" variant="body2">
        NFT marketplace UI created with Anima for Figma.
      </Typography>
      <Stack sx={{ mt: 3 }} spacing={2}>
        <Typography color="text.secondary" variant="body2">
          Join our community
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {PLATFORMS.map(platform => (
            <Link
              key={platform}
              href={`https://${platform}.com`}
              target="_blank"
            >
              <Image
                src={`/icons/platforms/${platform}.svg`}
                alt={platform}
                sx={{ width: 32, height: 32 }}
              />
            </Link>
          ))}
        </Box>
      </Stack>
    </Stack>
  );
}
