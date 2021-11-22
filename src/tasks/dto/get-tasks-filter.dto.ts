/* eslint-disable prettier/prettier */
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { TaskStatus } from '../tasks-status.enum';


// ? is for optionaling an item
export class GetTasksFilterDto {

  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;

  @IsOptional()
  @IsString()
  search?: string;
}
