import { IsEmail, IsNotEmpty } from 'class-validator';

export class CategoriesDto {
  @IsNotEmpty()
  fullname: string;
}