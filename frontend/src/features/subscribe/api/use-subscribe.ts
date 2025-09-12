import { useMutation } from "@tanstack/react-query";
import { ENDPOINTS, fetcher } from "@/shared/api";
import { SubscribeSchemaType } from "../model/schemas/subscribe-schema";

export const useSubscribe = () => {
  const mutation = useMutation({
    mutationKey: ["subscribe"],
    mutationFn: (formData: SubscribeSchemaType) =>
      fetcher<boolean>({
        url: ENDPOINTS.subscribe,
        method: "POST",
        data: formData,
      }),
  });
  return mutation;
};
