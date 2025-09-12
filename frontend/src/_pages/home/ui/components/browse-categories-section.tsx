"use client";

import { useGetCategories } from "@/entities/category";
import { CategoryList } from "@/widgets/category-list";
import { Box, Typography } from "@mui/material";

export function BrowseCategoriesSection() {
  const { data, isLoading } = useGetCategories();

  return (
    <Box>
      <Typography variant="h3">Browse Categories</Typography>
      <Box sx={{ mt: { xs: 5, md: 7 } }}>
        <CategoryList items={data?.categories || []} isLoading={isLoading} />
      </Box>
    </Box>
  );
}
