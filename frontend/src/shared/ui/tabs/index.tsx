"use client";

import {
  Tabs as MuiTabs,
  Tab,
  Box,
  Chip,
  Typography,
  useTheme,
  SxProps,
  Theme,
} from "@mui/material";
import { SyntheticEvent, useState, ReactElement } from "react";

/**
 * Reusable MUI Tabs component (FSD-friendly)
 *
 * Place in `shared/ui/tabs` if you plan to reuse it across features.
 *
 * Props
 * - items: array of tabs { label, value, count?, disabled? }
 * - value: controlled value
 * - defaultValue: initial value for uncontrolled mode
 * - onChange: (value: string) => void
 * - variant / centered / sx: forwarded to MUI Tabs
 */
export type TabItem = {
  label: string | ReactElement;
  value: string;
  count?: number;
  disabled?: boolean;
};

type TabsProps = {
  items: TabItem[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  variant?: "standard" | "scrollable" | "fullWidth";
  centered?: boolean;
  sx?: SxProps<Theme>;
};

function getIndexByValue(items: TabItem[], v: string | undefined) {
  return Math.max(
    0,
    items.findIndex(t => t.value === v),
  );
}

export function Tabs({
  items,
  value,
  defaultValue,
  onChange,
  variant = "fullWidth",
  centered = false,
  sx,
}: TabsProps) {
  const theme = useTheme();

  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(
    defaultValue ?? items[0]?.value ?? "",
  );

  const activeValue = isControlled ? value! : internalValue;
  const activeIndex = getIndexByValue(items, activeValue);

  const handleChange = (_event: SyntheticEvent, newIndex: number) => {
    const newValue = items[newIndex]?.value;
    if (!newValue) return;
    if (!isControlled) setInternalValue(newValue);
    onChange?.(newValue);
  };

  return (
    <Box sx={{ width: "100%", ...sx }}>
      <MuiTabs
        value={activeIndex}
        onChange={handleChange}
        variant={variant}
        centered={centered}
        aria-label="tabs"
      >
        {items.map((item, idx) => (
          <Tab
            key={item.value}
            label={
              item.count !== undefined ? (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <Typography fontWeight="inherit">{item.label}</Typography>
                  <Chip
                    sx={{
                      display: { xs: "none", sm: "inline-flex" },
                      ...(activeIndex === idx && {
                        backgroundColor: theme.palette.action.active,
                      }),
                    }}
                    label={
                      <Typography variant="body2">{item.count}</Typography>
                    }
                  />
                </Box>
              ) : (
                <Typography fontWeight="inherit">{item.label}</Typography>
              )
            }
            id={`tab-${idx}`}
            aria-controls={`tabpanel-${idx}`}
            disabled={item.disabled}
          />
        ))}
      </MuiTabs>
    </Box>
  );
}

/**
 * Example usage
 *
 * <Tabs
 *   items={[
 *     { label: "NFTs", value: "nfts", count: 382 },
 *     { label: "Collections", value: "collections", count: 67 },
 *   ]}
 *   defaultValue="nfts"
 *   variant="fullWidth"
 *   onChange={(v) => console.log("tab:", v)}
 * />
 */
