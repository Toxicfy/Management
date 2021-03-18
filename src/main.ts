import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

const listenPort = 3000;

// @ts-ignore
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(`app is listening in localhost:${listenPort}`)
  const config = new DocumentBuilder()
    .setTitle('系统api')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(listenPort);
}

bootstrap();
