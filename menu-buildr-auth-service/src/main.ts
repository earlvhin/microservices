import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

/** Create a logger instance */
const logger = new Logger('Main');

// Create the microservice options object
const microserviceOptions = {
	transport: Transport.GRPC,
	options: {
		package: 'app',
		protoPath: join(__dirname, '../src/app.proto')
	}
};

// Redis Way
// transport: Transport.REDIS,
// options: {
// 	url: 'redis://localhost:6379'
// }

// TCP Way
// transport: Transport.TCP,
// options: {
// 	host: '127.0.0.1',
// 	port: 8877
// }

async function bootstrap() {
	const app = await NestFactory.createMicroservice(AppModule, microserviceOptions);
	await app.listen();
	logger.log('AuthService is running');
}

bootstrap();