import { FilesModule } from "./../files/files.module";
import { SequelizeModule } from "@nestjs/sequelize";
import { Module } from "@nestjs/common";
import { PostsService } from "./posts.service";
import { PostsController } from "./posts.controller";
import { User } from "src/users/users.models";
import { Post } from "src/posts/posts.model";

@Module({
  providers: [PostsService],
  controllers: [PostsController],
  imports: [SequelizeModule.forFeature([User, Post]), FilesModule],
})
export class PostsModule {}
