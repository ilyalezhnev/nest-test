import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { ValidationExeption } from "src/exeptions/validation.exeption";

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
    const object = plainToClass(metadata.metatype, value);
    const errors = await validate(object);

    if (errors.length) {
      let messages = errors.map(
        (err) =>
          `${err.property} - ${Object.values(err.constraints).join(", ")}`
      );

      throw new ValidationExeption(messages);
    }

    return value;
  }
}
