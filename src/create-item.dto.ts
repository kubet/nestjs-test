import { Type } from 'class-transformer';
import {
  IsString,
  ValidateNested,
} from 'class-validator';

export class ItemDto {
  @IsString()
  name: string;
  @IsString()
  description: string;
}

export class CreateItemsDto {
  @Type(() => ItemDto)
  @ValidateNested({ each: true })
  Items: ItemDto[];
}