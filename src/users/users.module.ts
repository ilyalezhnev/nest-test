import { AuthModule } from "./../auth/auth.module";
import { forwardRef, Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { User } from "./users.models";
import { Role } from "src/roles/roles.models";
import { RolesModule } from "./../roles/roles.module";
import { UserRoles } from "src/roles/user-roles.model";
import { Post } from "src/posts/posts.model";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRoles, Post]),
    RolesModule,
    forwardRef(() => AuthModule),
  ],
  exports: [UsersService],
})
export class UsersModule {}
