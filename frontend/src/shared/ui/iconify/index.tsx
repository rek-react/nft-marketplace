"use client";

import { forwardRef } from "react";
import { Icon, IconProps } from "@iconify/react";
import { styled, SxProps, Theme } from "@mui/material";

// ----------------------------------------------------------------------

interface IconifyProps extends IconProps {
  sx?: SxProps<Theme>;
  width?: number | string;
  className?: string;
}

export const Iconify = forwardRef<SVGSVGElement, IconifyProps>((props, ref) => {
  const { className, width = 20, sx, ...other } = props;
  return (
    <IconRoot
      ssr
      ref={ref}
      className={className}
      sx={[
        {
          width,
          height: width,
          flexShrink: 0,
          display: "inline-flex",
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    />
  );
});

Iconify.displayName = "Iconify";

// ----------------------------------------------------------------------

const IconRoot = styled(Icon)``;
