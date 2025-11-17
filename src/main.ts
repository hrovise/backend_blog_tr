import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 app.setGlobalPrefix('api');
const configService = app.get(ConfigService);

   app.enableCors({
    origin: configService.get<string>('EXTERNAL_URL'), 
    credentials: true, 
  });

const config = new DocumentBuilder()
    .setTitle('Blog API')
    .setDescription('Документация API для Блога')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

const PORT= Number(configService.get<number>('PORT'))??3000;
  await app.listen(PORT);
  console.log("Server started on port", PORT);
}
bootstrap();
