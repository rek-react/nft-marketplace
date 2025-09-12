import * as zod from "zod";

export const SubscribeSchema = zod.object({
  email: zod.email({
    error: "",
  }),
});

export type SubscribeSchemaType = zod.infer<typeof SubscribeSchema>;
