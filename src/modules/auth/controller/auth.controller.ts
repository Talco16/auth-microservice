import { Body, Controller, Get, Post } from '@nestjs/common';
import { RegisterRequestDto } from '../models/dto/register-request.dto';
import { RegisterResponseDto } from '../models/dto/register-response.dto';
import { AuthProvider } from 'src/modules/auth/provider/auth.provider';
import { LoginRequestDto } from '../models/dto/login-request.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authProvider: AuthProvider) {}

  @Get()
  //Need to add some validations here
  getAllUsers(): string {
    return "Hello Tal Cohen"
  }

  // Need to add validators and swagger.
  //Need to change order of imports.
  // @ApiOperation({ summary: 'Create new guest' })
  // @ApiCreatedResponse({ description: 'Success', type: GetGuestResponseDto })
  // @ApiInternalServerErrorResponse({ description: ApiErrors.GUEST_FAIL })
  @Post('register')
  async register(
    @Body() registerRequestDto: RegisterRequestDto
  ): Promise<RegisterResponseDto> {
    // this.appLogger.debug(`createNewGuest ${JSON.stringify(registerRequestDto)}`);
    return await this.authProvider.register(registerRequestDto);
  }

  @Post('login')
  async login(
    @Body() loginRequestDto: LoginRequestDto
  ): Promise<RegisterResponseDto> {
    // this.appLogger.debug(`createNewGuest ${JSON.stringify(registerRequestDto)}`);
    return await this.authProvider.login(loginRequestDto);
  }
}