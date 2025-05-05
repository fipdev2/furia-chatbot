import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'https://furia-gg-chatbot.vercel.app', // porta do front
  });
  await app.listen(process.env.PORT ?? 5000);
}

bootstrap();
