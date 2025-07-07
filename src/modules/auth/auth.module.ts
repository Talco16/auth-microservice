import { Module } from '@nestjs/common';
import { AuthController } from './controller/auth.controller';
import { AuthService } from './service/auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthUser } from './models/entity/auth-user.entity';
import { AuthProvider } from './provider/auth.provider';

@Module({
  imports: [TypeOrmModule.forFeature([AuthUser])],
  controllers: [AuthController],
  providers: [
    AuthProvider,
    AuthService
    // {
    //   provide: GuestService,
    //   useClass: GuestImplService,
    // },
  ]
})
export class AuthModule {}
