"use client";

import {
  Avatar,
  Badge,
  Box,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import { HeadCell, TableHeadCustom } from "@/shared/ui";
import { topCreators } from "@/_mock";

const TABLE_HEAD: HeadCell[] = [
  {
    id: "id",
    label: "#",
    width: 30,
  },
  {
    id: "artist",
    label: "Artist",
  },
  {
    id: "change",
    label: "Change",
    sx: { display: { sm: "table-cell", xs: "none" } },
  },
  {
    id: "sold",
    label: "NFTs Sold",
    sx: { display: { md: "table-cell", xs: "none" } },
  },
  {
    id: "volume",
    label: "Volume",
  },
];

export function RankingsContent() {
  const theme = useTheme();

  return (
    <TableContainer>
      <Table>
        <TableHeadCustom headLabel={TABLE_HEAD} />
        <TableBody>
          {topCreators.map(
            ({ id, author, image, change, sold, volume }, index) => (
              <TableRow key={id}>
                <TableCell>
                  <Box sx={{ ml: { md: 2, xs: 1 } }}>
                    <Badge
                      badgeContent={index + 1}
                      slotProps={{
                        badge: {
                          sx: {
                            fontSize: {
                              sm: theme.typography.body2.fontSize,
                              xs: theme.typography.caption.fontSize,
                            },
                            backgroundColor: {
                              md: theme.palette.background.default,
                              xs: "transparent",
                            },
                          },
                        },
                      }}
                    />
                  </Box>
                </TableCell>
                <TableCell>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Avatar
                      sx={{
                        width: { md: 60, xs: 24 },
                        height: { md: 60, xs: 24 },
                      }}
                      src={image}
                      alt="avatar"
                    />
                    <Typography variant="h5" noWrap>
                      {author}
                    </Typography>
                  </Stack>
                </TableCell>
                <TableCell sx={{ display: { sm: "table-cell", xs: "none" } }}>
                  <Typography
                    color="success"
                    variant="body2"
                    fontFamily={theme.typography.fontSecondaryFamily}
                  >
                    {change}%
                  </Typography>
                </TableCell>
                <TableCell sx={{ display: { md: "table-cell", xs: "none" } }}>
                  <Typography
                    variant="body2"
                    fontFamily={theme.typography.fontSecondaryFamily}
                  >
                    {sold}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="body2"
                    fontFamily={theme.typography.fontSecondaryFamily}
                    sx={{
                      fontSize: {
                        sm: theme.typography.body2.fontSize,
                        xs: theme.typography.caption.fontSize,
                      },
                    }}
                  >
                    {volume} ETH
                  </Typography>
                </TableCell>
              </TableRow>
            ),
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
