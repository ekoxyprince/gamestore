import { useMutation } from "@tanstack/react-query";
import { post, patch } from "@/utils/api";
import { AxiosError } from "axios";
import useAuthStore from "@/stores/useAuthStore";
import { toast, ToastPosition } from "@backpackapp-io/react-native-toast";

const useMutate = (url: string, key: string[], type: string) => {
  const auth = useAuthStore().auth;
  function queryFn(type: string) {
    switch (type) {
      case "post":
        return post;

      case "patch":
        return patch;
    }
  }
  return useMutation({
    mutationFn: (data: any) => {
      return queryFn(type)!(url, data, auth.token);
    },
    mutationKey: key,
    onError: (err: AxiosError<any>) => {
      console.log(err);
      toast.error(err.message, {
        duration: 2000,
        position: ToastPosition.BOTTOM,
      });
    },
    onSuccess: (resp) => {
      toast.success(resp.message, {
        duration: 1500,
        position: ToastPosition.BOTTOM,
      });
    },
  });
};

export default useMutate;
