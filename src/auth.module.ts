import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'your_password',
      database: 'baby_tracker',
      autoLoadEntities: true,
      synchronize: true, // לפיתוח בלבד! לא בפרודקשן!
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
