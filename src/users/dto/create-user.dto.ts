import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsEmail, Length } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ example: "1@2.com", description: "User email" })
  @IsString({ message: "Email must be a string" })
  @IsEmail({}, { message: "Incorrect email" })
  readonly email: string;

  @ApiProperty({ example: "123", description: "User password" })
  @IsString({ message: "Password must be a string" })
  @Length(4, 16, {
    message: "Paswword must be greater than 4 and less than 16 symbols",
  })
  readonly password: string;
}
