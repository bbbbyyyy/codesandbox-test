import { useContext } from "react";
import {
  LoginUserContext,
  LoginUserContextType
} from "../providers/LoginuserProvider";

export const useLoginUser = (): LoginUserContextType =>
  useContext(LoginUserContext);
