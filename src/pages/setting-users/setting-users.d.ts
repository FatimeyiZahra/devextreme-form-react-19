import { IRule } from "../../core/types/rule";

export interface IUser {
  id: number | null;
  name: string | null;
  username: string | null;
  position: string | null;
  active: boolean | null;
  createdDate: string | null;
  employeeId: number | null;
  divisionId: number | null;
  division: string | null;
}

export interface IGetUser {
  name?: string | null;
  username?: string | null;
  searchInput?: string | null;
}

export interface IPostUser {
  employeeId: number | null;
  username: string;
  repeatPassword: string;
  password: string;
}

export interface IPutUser extends IPostUser {
  id: number | null;
}

export interface IPostUserRules {
  employeeId: IRule[];
  username: IRule[];
  repeatPassword: IRule[];
  password: IRule[];
}

interface EmployeeFormModalProps {
   visible: boolean;
   onClose: () => void;
   onSubmit: (data: IPostUser) => void;
   editData?: IPostUser | null;
   title?: string;
   width?: number;
   height?: number;
}
