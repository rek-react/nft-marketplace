import { UserRejectedRequestError } from "viem";
import { BaseError } from "wagmi";
import { notify } from "./notify";
import axios, { AxiosError } from "axios";
import { ErrorResponse } from "../api/base";

export function handleTransactionError(err: unknown) {
  if (err instanceof UserRejectedRequestError) {
    notify("Transaction was rejected by the user", "error");
  } else if (err instanceof BaseError) {
    notify(`Transaction failed: ${err.shortMessage || err.message}`, "error");
  } else if (axios.isAxiosError(err)) {
    const axiosError = err as AxiosError<ErrorResponse>;
    notify(
      axiosError.response?.data?.message ||
        axiosError.message ||
        "Unknown Axios error",
      "error",
    );
  } else {
    notify("Unknown error occurred while sending transaction", "error");
    console.error(err);
  }
}
