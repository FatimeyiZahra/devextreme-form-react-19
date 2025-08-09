import { useMutation, useQueryClient } from "react-query";
import { IPostUser, IPutUser } from "../setting-users";
import { deleteUser, postUser, putUser } from "./setting-users.service";

export const usePutUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: IPutUser) => {
      return putUser(payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("Users");
    },
  });
};

export const usePostUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: IPostUser) => {
      return postUser(payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("Users");
    },
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => {
      return deleteUser(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("Users");
    },
  });
};
