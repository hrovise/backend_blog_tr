import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiController } from './api/api.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
 ConfigModule.forRoot({
      isGlobal: true, // чтобы не импортировать в каждом модуле
    }),

  ],
  controllers: [AppController, ApiController],
  providers: [AppService],
})
export class AppModule {}
