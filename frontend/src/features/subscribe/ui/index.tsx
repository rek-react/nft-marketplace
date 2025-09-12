import { InputAdornment, Button } from "@mui/material";
import { Field, Form, MailIcon } from "@/shared/ui";
import { useForm } from "react-hook-form";
import {
  SubscribeSchema,
  SubscribeSchemaType,
} from "../model/schemas/subscribe-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSubscribe } from "../api/use-subscribe";
import { handleTransactionError, notify } from "@/shared/lib";

const defaultValues: SubscribeSchemaType = {
  email: "",
};

export function Subscribe() {
  const subscribe = useSubscribe();

  const methods = useForm<SubscribeSchemaType>({
    resolver: zodResolver(SubscribeSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = methods;

  const onSubmit = handleSubmit(async data => {
    try {
      await subscribe.mutateAsync(data);
      reset();
      notify("Success subscribe", "success");
    } catch (err) {
      handleTransactionError(err);
    }
  });

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      <Field.Text
        name="email"
        placeholder="Enter your email here"
        sx={{ width: 1 }}
        slotProps={{
          input: {
            sx: { paddingRight: 0 },
            endAdornment: (
              <InputAdornment
                position="end"
                sx={{
                  height: 1,
                  maxHeight: 1,
                  display: { xs: "none", md: "flex" },
                  ml: 0,
                }}
              >
                <Button
                  variant="contained"
                  startIcon={<MailIcon />}
                  size="large"
                  type="submit"
                  loading={isSubmitting}
                >
                  Subscribe
                </Button>
              </InputAdornment>
            ),
          },
        }}
      />

      <Button
        variant="contained"
        startIcon={<MailIcon />}
        type="submit"
        size="small"
        loading={isSubmitting}
        sx={{
          mt: 2,
          width: 1,
          display: { xs: "flex", md: "none" },
        }}
      >
        Subscribe
      </Button>
    </Form>
  );
}
