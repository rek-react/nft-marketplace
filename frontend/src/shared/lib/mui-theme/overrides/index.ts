import { Theme } from "@mui/material";
import Button from "./Button";
import Badge from "./Badge";
import Input from "./Input";
import Tabs from "./Tabs";
import Chip from "./Chip";
import Table from "./Table";

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme: Theme) {
  return Object.assign(
    Button(theme),
    Badge(theme),
    Input(theme),
    Tabs(theme),
    Chip(theme),
    Table(theme),
  );
}
