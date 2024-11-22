import { NestFactory } from '@nestjs/core';
import { AppModule } from './application/modules/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
  .setTitle('Gym Service')
  .setDescription('The Gym Service API description')
  .setVersion('1.0')
  .addTag('gym-service')
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(4200);
}
bootstrap();
