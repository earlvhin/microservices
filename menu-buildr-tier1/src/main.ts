import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/** Create Logger */
const logger = new Logger('Main');

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	await app.listen(3000);
	logger.log('Tier1 is running')
}

bootstrap();
