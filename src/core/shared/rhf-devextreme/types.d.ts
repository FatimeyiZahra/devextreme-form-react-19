export type DevextremeControlProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  rules?: any;
  component: React.ComponentType<any>;
  componentProps?: Record<string, any>;
};
