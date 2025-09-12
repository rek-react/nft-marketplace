import {
  Box,
  TableRow,
  TableCell,
  TableHead,
  TableSortLabel,
  SxProps,
  Theme,
} from "@mui/material";

// ----------------------------------------------------------------------

const visuallyHidden: SxProps<Theme> = {
  border: 0,
  margin: -1,
  padding: 0,
  width: "1px",
  height: "1px",
  overflow: "hidden",
  position: "absolute",
  whiteSpace: "nowrap",
  clip: "rect(0 0 0 0)",
};

// ----------------------------------------------------------------------

export interface HeadCell {
  id: string;
  label: string;
  align?: "right" | "left" | "center" | "justify" | "inherit";
  width?: string | number;
  minWidth?: string | number;
  sx?: SxProps<Theme>;
}

interface TableHeadProps {
  order?: "asc" | "desc";
  orderBy?: string;
  headLabel: HeadCell[];
  onSort?: (id: string) => void;
  sx?: SxProps<Theme>;
}

export function TableHeadCustom({
  order,
  orderBy,
  headLabel,
  onSort,
  sx,
}: TableHeadProps) {
  return (
    <TableHead sx={sx}>
      <TableRow>
        {headLabel.map(headCell => (
          <TableCell
            key={headCell.id}
            align={headCell.align || "left"}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{
              width: headCell.width,
              minWidth: headCell.minWidth,
              ...headCell.sx,
            }}
          >
            {onSort ? (
              <TableSortLabel
                hideSortIcon
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={() => onSort(headCell.id)}
                sx={{ textTransform: "capitalize" }}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            ) : (
              headCell.label
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
