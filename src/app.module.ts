import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456789',
      database: 'auth_user',
      autoLoadEntities: true,
      synchronize: true, 
    }),
    AuthModule
  ],
  providers: [],
  exports: [],
})
export class AppModule {}
