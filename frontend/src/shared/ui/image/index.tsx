import { CSSProperties, forwardRef } from "react";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import { Box, SxProps, Theme } from "@mui/material";
import { getRatio } from "../../lib";

// ----------------------------------------------------------------------

interface ImageProps extends Omit<NextImageProps, "src" | "alt"> {
  src: string;
  alt: string;
  ratio?: string;
  sx?: SxProps<Theme>;
  objectFit?: CSSProperties["objectFit"];
}

export const Image = forwardRef<HTMLSpanElement, ImageProps>(
  ({ ratio, sx = {}, objectFit = "cover", ...other }, ref) => {
    const hasRatio = Boolean(ratio);

    const image = (
      <NextImage
        fill
        style={{
          objectFit,
        }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        {...other}
      />
    );

    if (hasRatio) {
      return (
        <Box
          ref={ref}
          component="span"
          sx={{
            width: 1,
            lineHeight: 1,
            display: "block",
            overflow: "hidden",
            position: "relative",
            pt: getRatio(ratio!),
            "& > span": {
              top: 0,
              left: 0,
              width: "100% !important",
              height: "100% !important",
              position: "absolute !important",
            },
            ...sx,
          }}
        >
          {image}
        </Box>
      );
    }

    return (
      <Box
        ref={ref}
        component="span"
        sx={{
          lineHeight: 1,
          display: "block",
          overflow: "hidden",
          position: "relative",
          ...sx,
        }}
      >
        {image}
      </Box>
    );
  },
);

Image.displayName = "Image";
