import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthUser } from '../models/entity/auth-user.entity';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { RegisterRequestDto } from '../models/dto/register-request.dto';
import { RegisterResponseDto } from '../models/dto/register-response.dto';
import { LoginRequestDto } from '../models/dto/login-request.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(AuthUser)
    private readonly authRepo: Repository<AuthUser>,
  ) {}

  async register(registerRequestDto: RegisterRequestDto): Promise<RegisterResponseDto> {
    const email = registerRequestDto.email;
    const password = registerRequestDto.password;
    const existing = await this.authRepo.findOne({ where: { email } });
    if (existing) throw new Error('Email already in use');

    const hashed = await bcrypt.hash(password, 10);
    const user = await this.authRepo.save({ email, password: hashed });

    // const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        const token = jwt.sign({ id: user.id }, "process.env.JWT_SECRET", { expiresIn: '7d' });

    return { id: user.id, token };
  }

  async login(loginRequestDto: LoginRequestDto): Promise<RegisterResponseDto> {
    const email = loginRequestDto.email;
    const password = loginRequestDto.password;

    const user = await this.authRepo.findOne({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Invalid credentials');
    }

    // const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    const token = jwt.sign({ id: user.id }, "process.env.JWT_SECRET", { expiresIn: '7d' });

    return { id: user.id, token };
  }
}