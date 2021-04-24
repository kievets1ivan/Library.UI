import { UserErrorCode } from "../../enums/errors/user-error-code";

export interface UserResponse {
  isSuccess: boolean;
  errorCode: UserErrorCode;
}
