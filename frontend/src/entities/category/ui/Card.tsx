"use client";

import { Image } from "@/shared/ui";
import { Box, Card, Typography } from "@mui/material";
import { slugify, theme } from "@/shared/lib";
import { Category } from "../model/types/category-type";

export function CategoryCard({ title }: Category) {
  return (
    <Card>
      <Box
        sx={{
          position: "relative",
        }}
      >
        <Image
          src={`/images/categories/${slugify(title)}.png`}
          alt="cover"
          ratio="1/1"
        />

        <Box
          sx={{
            height: 1,
            width: 1,
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            left: 0,
            top: 0,
            backdropFilter: "blur(15px) brightness(100%)",
            backgroundColor: theme.palette.common.white,
          }}
        >
          <Image
            src={`/icons/categories/${slugify(title)}.svg`}
            alt={title}
            sx={{
              width: { md: 100, xs: 80 },
              height: { md: 100, xs: 80 },
            }}
          />
        </Box>
      </Box>
      <Box sx={{ py: { xs: 2, md: 3 }, px: { xs: 2, md: 4 } }}>
        <Typography variant="h5">{title}</Typography>
      </Box>
    </Card>
  );
}
