import { Injectable} from '@nestjs/common';
import { RegisterRequestDto } from '../models/dto/register-request.dto';
import { RegisterResponseDto } from '../models/dto/register-response.dto';
import { AuthService } from '../service/auth.service';
import { LoginRequestDto } from 'src/modules/auth/models/dto/login-request.dto';

@Injectable()
export class AuthProvider {
  constructor(private readonly authService: AuthService) {}

  public async register(
    registerRequestDto: RegisterRequestDto
  ): Promise<RegisterResponseDto> {
    return await this.authService.register(
      registerRequestDto
    );
  }

  public async login(
    loginRequestDto: LoginRequestDto
  ): Promise<RegisterResponseDto> {
    return await this.authService.login(
      loginRequestDto
    );
  }
  }