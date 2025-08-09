import { environment } from 'core/configs/app.config';
import {base64ToBlobUrl} from './base64-to-blob';

export const downloadExcel = (data: string) => {
  const url = base64ToBlobUrl(data);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${environment.applicationName}.${new Date().toLocaleDateString()}.xlsx`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
