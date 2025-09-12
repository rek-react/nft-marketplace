import { Tabs } from "@/shared/ui";
import { Typography } from "@mui/material";
import { PropsWithChildren } from "react";

const Label = ({
  children,
  variant,
}: PropsWithChildren<{ variant: "mobile" | "desktop" }>) => (
  <Typography
    component="span"
    sx={{
      fontWeight: "inherit",
      display:
        variant === "mobile"
          ? { xs: "block", sm: "none" }
          : { xs: "none", sm: "block" },
    }}
  >
    {children}
  </Typography>
);

interface RankingsTabsProps {
  tab: string;
  onChange: (value: string) => void;
}

export function RankingsTabs({ tab, onChange }: RankingsTabsProps) {
  const tabItems = [
    {
      value: "today",
      label: (
        <>
          <Label variant="mobile">1d</Label>
          <Label variant="desktop">Today</Label>
        </>
      ),
    },
    {
      value: "week",
      label: (
        <>
          <Label variant="mobile">7d</Label>
          <Label variant="desktop">This Week</Label>
        </>
      ),
    },
    {
      value: "month",
      label: (
        <>
          <Label variant="mobile">30d</Label>
          <Label variant="desktop">This Month</Label>
        </>
      ),
    },
    {
      value: "all",
      label: (
        <>
          <Label variant="mobile">All</Label>
          <Label variant="desktop">All Time</Label>
        </>
      ),
    },
  ];

  return <Tabs value={tab} onChange={onChange} items={tabItems} />;
}
