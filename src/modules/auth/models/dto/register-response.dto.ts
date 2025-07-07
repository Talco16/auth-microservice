import { IsNumber, IsString } from "class-validator";

export class RegisterResponseDto {
    @IsNumber()
    id: number;
  
    @IsString()
    token: string;
  }
  