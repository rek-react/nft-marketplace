import { Category, CategoryCard } from "@/entities/category";
import { Grid, Skeleton } from "@mui/material";

interface CategoryListProps {
  isLoading: boolean;
  items: Category[];
}

export function CategoryList({ isLoading, items }: CategoryListProps) {
  return (
    <Grid container spacing={{ lg: 4, md: 3, xs: 2 }}>
      {isLoading
        ? [...Array(8)].map((_, index) => (
            <Grid size={{ lg: 3, sm: 4, xs: 6 }} key={index}>
              <Skeleton
                variant="rounded"
                sx={{ height: { md: 300, xs: 200 } }}
              />
            </Grid>
          ))
        : items.map(item => (
            <Grid size={{ lg: 3, sm: 4, xs: 6 }} key={item.id}>
              <CategoryCard {...item} />
            </Grid>
          ))}
    </Grid>
  );
}
