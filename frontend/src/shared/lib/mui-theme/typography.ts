import { TypographyVariantsOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface TypographyVariantsOptions {
    fontSecondaryFamily?: string;
  }

  interface TypographyVariants {
    fontSecondaryFamily: string;
  }
}

export function pxToRem(value: number): string {
  return `${value / 16}rem`;
}

interface Responsive {
  sm: number;
  md: number;
  lg: number;
}

export function responsiveFontSizes({ sm, md, lg }: Responsive) {
  return {
    "@media (min-width:600px)": {
      fontSize: pxToRem(sm),
    },
    "@media (min-width:900px)": {
      fontSize: pxToRem(md),
    },
    "@media (min-width:1200px)": {
      fontSize: pxToRem(lg),
    },
  };
}

// ----------------------------------------------------------------------

const typography: TypographyVariantsOptions = {
  fontFamily: "var(--font-work-sans), sans-serif",
  fontSecondaryFamily: "var(--font-space-mono)",
  h1: {
    fontWeight: 600,
    lineHeight: 1.1,
    fontSize: pxToRem(28),
    ...responsiveFontSizes({ sm: 28, md: 38, lg: 67 }),
  },
  h2: {
    fontWeight: 600,
    lineHeight: 1.1,
    fontSize: pxToRem(28),
    ...responsiveFontSizes({ sm: 28, md: 38, lg: 51 }),
  },
  h3: {
    fontWeight: 600,
    lineHeight: 1.2,
    fontSize: pxToRem(28),
    ...responsiveFontSizes({ sm: 28, md: 28, lg: 38 }),
  },
  h4: {
    fontWeight: 600,
    lineHeight: 1.4,
    fontSize: pxToRem(22),
    ...responsiveFontSizes({ sm: 22, md: 22, lg: 28 }),
  },
  h5: {
    fontWeight: 600,
    lineHeight: 1.4,
    fontSize: pxToRem(16),
    ...responsiveFontSizes({ sm: 16, md: 16, lg: 22 }),
  },
  body1: {
    lineHeight: 1.6,
    fontSize: pxToRem(16),
    ...responsiveFontSizes({ sm: 16, md: 16, lg: 22 }),
  },
  body2: {
    lineHeight: 1.4,
    fontSize: pxToRem(16),
  },
  caption: {
    lineHeight: 1.1,
    fontSize: pxToRem(12),
  },
  button: {
    fontWeight: 600,
    lineHeight: 1.4,
    fontSize: pxToRem(16),
    textTransform: "capitalize",
  },
};

export default typography;
