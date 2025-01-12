import { IsIn, IsEmail, IsEmpty, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsEmail({}, { message: 'Please enter correct email' })
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  readonly password: string;


  
  @IsString()
  @IsNotEmpty()
  @IsIn(['user', 'admin'])
  role: string;

  
  isSuspended: boolean;
}
