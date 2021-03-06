import { ClientOptions, Transport } from "@nestjs/microservices";
import { join } from 'path';

// Same options object used by microservice server
export const microserviceOption: ClientOptions = {
    transport: Transport.GRPC,
	options: {
		package: 'app',
		protoPath: join(__dirname, '../src/app.proto')
	}
}