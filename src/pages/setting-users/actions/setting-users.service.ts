import { API } from "../../../core/configs/api.config";
import axiosConfig from "../../../core/configs/axios.config";
import { UserModel } from "../models/setting-users.model";
import { IGetUser, IPostUser, IPutUser } from "../setting-users";
import { DropdownModel } from "../../../core/models/dropdown.model";
import axiosSilentInstance from "../../../core/configs/axios-silent.config";

export const getUsers = async (data: IGetUser) => {
  const res = await axiosConfig.post(`${API.usersGet}`, data);
  return res.data.map((item: any) => new UserModel(item));
};

export const putUser = async (data: IPutUser) => {
  const res = await axiosConfig.put(`${API.userUpdate}`, data);
  return res.data;
};

export const postUser = async (data: IPostUser) => {
  const res = await axiosConfig.post(`${API.userCreate}`, data);
  return res.data;
};
export const deleteUser = async (id: number) => {
  const res = await axiosConfig.delete(`${API.userDelete}${id}`);
  return res.data;
};

export const getEmployeeGroupsDropdown = async () => {
  const res = await axiosSilentInstance.get(`${API.employeeGroups}`);
  return res.data.map((item: any) => new DropdownModel(item));
};
