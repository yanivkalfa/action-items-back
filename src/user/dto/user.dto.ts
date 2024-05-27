import { Type } from 'class-transformer';
import { ValidateNested, IsDate, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, IsObject } from 'class-validator';

export class Picture {
  @IsString()
  @IsOptional()
  large: string;

  @IsString()
  @IsOptional()
  medium: string;

  @IsString()
  @IsOptional()
  thumbnail: string;
}

export class UserDetailsCreate {
  @IsString()
  title: string;
  
  @IsString()
  first: string;

  @IsString()
  last: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsDate()
  dob: Date

  @IsString()
  street: string;

  @IsString()
  city: string;

  @IsString()
  state: string;

  @IsString()
  country: string;

  @IsString()
  phone: string;

  @IsString()
  gender: string;


  @IsObject()
  @ValidateNested()
  @Type(() => Picture)
  picture: Picture;
}

export class UserDetailsUpdate {
  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  first: string;

  @IsString()
  @IsOptional()
  last: string;

  @IsNotEmpty()
  @IsEmail()
  @IsOptional()
  email: string;

  @IsDate()
  @IsOptional()
  dob: Date;

  @IsString()
  @IsOptional()
  street: string;

  @IsString()
  @IsOptional()
  city: string;

  @IsString()
  @IsOptional()
  state: string;

  @IsString()
  @IsOptional()
  country: string;

  @IsString()
  @IsOptional()
  phone: string;

  @IsString()
  @IsOptional()
  gender: string;


  @IsObject()
  @ValidateNested()
  @Type(() => Picture)
  @IsOptional()
  picture: Picture;
}