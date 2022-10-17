import { useContext } from "react";
import { RootContext } from "../Provider";

export default function useRootStore() {
  return useContext(RootContext);
}
