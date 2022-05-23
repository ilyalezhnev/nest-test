import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from "./pipes/validation.pipe";
import { AppModule } from "./app.module";

async function start() {
  const PORT = process.env.PORT || 5500;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("Nestjs tutorial")
    .setDescription("RestAPI documentation")
    .setVersion("0.0.1")
    .addTag("Ilya Lee")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api/docs", app, document);

  app.useGlobalPipes(new ValidationPipe());

  app.listen(PORT, () => {
    console.log(`Server has been started on port = ${PORT}`);
  });
}

start();
