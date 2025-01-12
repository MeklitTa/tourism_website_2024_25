import {
    IsEmpty,
    IsEnum,
    IsIn,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
  } from 'class-validator';
import { User } from '../schemas/user.schema';
  
  
  export class ModifyUserDto {
    @IsNotEmpty()
    @IsString()
    readonly name: string;
  
    
    @IsNotEmpty()
    @IsString()
    readonly email: string;
  

    @IsNotEmpty()
    @IsString()
    readonly password: string;
  

    
    @IsString()
    @IsIn(['user', 'admin'])
    role: string;
  
    
    isSuspended: boolean;
}