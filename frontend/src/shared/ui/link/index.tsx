import { Link as MUILink, LinkProps as MUILinkProps } from "@mui/material";
import NextLink from "next/link";
import { PropsWithChildren } from "react";

interface LinkProps extends MUILinkProps {
  href: string;
}

export function Link({
  children,
  href,
  ...props
}: PropsWithChildren<LinkProps>) {
  return (
    <MUILink
      component={NextLink}
      href={href}
      color="#ffffff"
      variant="body2"
      sx={{ textDecoration: "none", fontWeight: 600, ...props.sx }}
      {...props}
    >
      {children}
    </MUILink>
  );
}
