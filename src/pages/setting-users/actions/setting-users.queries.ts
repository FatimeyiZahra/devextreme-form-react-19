import { useQuery } from "react-query";
import { IGetUser, IUser } from "../setting-users";
import { getEmployeeGroupsDropdown, getUsers } from "./setting-users.service";
import { IDropdown } from "core/types/dropdown";

export const useGetUsers = (data: IGetUser) => {
  return useQuery<IUser[], Error>(["Users", data], () => {
    return getUsers(data);
  });
};

export const useGetEmployeeGroupsDropdown = () => {
  return useQuery<IDropdown[], Error>(["EmployeeGroupsDropdown"], () => {
    return getEmployeeGroupsDropdown();
  });
};
