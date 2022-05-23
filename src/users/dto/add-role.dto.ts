import { IsString, IsNumber } from "class-validator";

export class AddRoleDto {
  @IsString({ message: "Role must be a string" })
  readonly value: string;

  @IsNumber({}, { message: "User id must be a number" })
  readonly userId: number;
}
