import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as cors from 'cors';

async function bootstrap() {3000
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get<string>('PORT', '3000');
  app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  }));
  await app.listen(port);
}
bootstrap();