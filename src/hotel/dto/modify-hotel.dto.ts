import {
    IsEmpty,
    IsEnum,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
  } from 'class-validator';
  import { User } from '../../auth/schemas/user.schema';

  
  export class ModifyHotelDto {
    @IsNotEmpty()
    @IsString()
    readonly name: string;
  
    
    @IsString()
    city: string;

    @IsNumber()
    rating: number;

    @IsNumber()
    price: number;

  }
  