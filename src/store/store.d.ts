import { ILang } from "../assets/lang/lang";
import { IUser } from "../core/types/user";

export interface IState {
  loader: boolean;
  leftMenu: boolean;
  languages: ILanguages[];
  locale: any;
  user: IUser | null;
}

export interface ILanguages {
  id: number;
  key: ILang;
  value: string;
}

export interface IRegistration {
  personId: number | null;
  cardId: number | null;
  subPage: SubPageType;
}
export type SubPageType<T = unknown> = {
  current: SubPageCurrentType;
  data?: T | null;
};
export interface ICheckout {
  serviceIds: number[];
  appealId: numer | null;
  transactionAmount: number | string | null;
}

export type SubPageCurrentType =
  | "main"
  | "add"
 

export type SubPagesTypes = {
  [key in PageOpenType]?: ReactNode;
};

