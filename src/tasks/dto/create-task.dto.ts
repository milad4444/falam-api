/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

export class CreatedTaskDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
