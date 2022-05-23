import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto {
  @ApiProperty({ example: "admin", description: "User role" })
  readonly value: string;

  @ApiProperty({ example: "Cool admin", description: "Role description" })
  readonly description: string;
}
