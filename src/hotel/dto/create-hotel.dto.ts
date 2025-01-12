import {
    IsEmpty,
    IsEnum,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
  } from 'class-validator';

  

  
  export class CreateHotelDto {
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
  