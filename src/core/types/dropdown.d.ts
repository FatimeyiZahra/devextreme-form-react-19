export interface IDropdown {
  value: number | string;
  label: string;
  isDefault?: boolean;
  options?: IDropdown[];
}
