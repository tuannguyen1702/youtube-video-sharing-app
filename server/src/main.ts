import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get(ConfigService);
  const port = config.get<number>('server.port');
  const host = config.get<string>('server.host');

  await app.listen(port, host, () => {
    console.log(`Service started ${host}:${port}`);
  });
}

bootstrap();
