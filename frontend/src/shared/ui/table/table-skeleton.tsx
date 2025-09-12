// ----------------------------------------------------------------------

import { Skeleton, TableCell, TableRow, TableRowProps } from "@mui/material";

interface TableSkeletonProps extends TableRowProps {
  rowCount?: number;
  cellCount?: number;
}

export function TableSkeleton({
  rowCount = 0,
  cellCount = 0,
  ...other
}: TableSkeletonProps) {
  return Array.from({ length: rowCount }, (_, rowIndex) => (
    <TableRow key={rowIndex} {...other}>
      {Array.from({ length: cellCount }, (__, cellIndex) => (
        <TableCell key={cellIndex}>
          <Skeleton variant="text" />
        </TableCell>
      ))}
    </TableRow>
  ));
}
