"use client";

import { Controller, useFormContext } from "react-hook-form";

import TextField, { TextFieldProps } from "@mui/material/TextField";

// ----------------------------------------------------------------------

type RHFTextFieldProps = TextFieldProps & {
  name: string;
};

export function RHFTextField({
  name,
  helperText,
  slotProps,
  type = "text",
  ...other
}: RHFTextFieldProps) {
  const { control } = useFormContext();

  const isNumberType = type === "number";

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          value={field.value}
          type={isNumberType ? "text" : type}
          error={!!error}
          helperText={error?.message ?? helperText}
          slotProps={{
            ...slotProps,
            htmlInput: {
              autoComplete: "off",
              ...slotProps?.htmlInput,
              ...(isNumberType && {
                inputMode: "decimal",
                pattern: "[0-9]*\\.?[0-9]*",
              }),
            },
          }}
          {...other}
        />
      )}
    />
  );
}
