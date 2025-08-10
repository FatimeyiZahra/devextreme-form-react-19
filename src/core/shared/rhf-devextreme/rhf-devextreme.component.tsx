import React from "react";
import { Controller, FieldValues } from "react-hook-form";
import { DevextremeControlProps } from "./types";

export function RHFDevextreme<T extends FieldValues>({
  name,
  control,
  rules,
  component: Component,
  componentProps = {},
}: DevextremeControlProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <div style={{ marginBottom: "1rem" }}>
          <Component
            {...componentProps}
            value={field.value}
            onValueChanged={(e: any) => field.onChange(e.value)}
            isValid={!fieldState.error}
          />
          {fieldState.error && (
            <div style={{ color: "red", fontSize: "12px", marginTop: "4px" }}>
              {fieldState.error.message}
            </div>
          )}
        </div>
      )}
    />
  );
}
