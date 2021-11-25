import { Body, Controller, Logger, OnModuleInit, Post } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import { IGrpcService } from './grpc.interface';
import { microserviceOption } from './grpc.options';

@Controller()
export class AppController implements OnModuleInit {
	private logger = new Logger('AppController');
	
	/** GRPC WAY */
	@Client(microserviceOption)
	private client: ClientGrpc

	private grpcService: IGrpcService;

	onModuleInit() {
		this.grpcService = this.client.getService<IGrpcService>('AppController');
	}

	@Post('add')
	async add(@Body('data') data: number[]) {
		this.logger.log('Sending Data to Add: ' + data.toString());
		return this.grpcService.accumulate({ data });
	}


	// TCP REDIS WAY
	// constructor(
	// 	private readonly _authService: AuthService
	// ) {}

	// @Post('add')
	// async add(@Body('data') data: number[]) {
	// 	this.logger.log('Sending Data to Add: ' + data.toString());
	// 	return this._authService.add(data);
	// }

	// @Post('multiply')
	// async multiply(@Body('data') data: number[]) {
	// 	this.logger.log('Sending Data to Multiply: ' + data.toString());
	// 	return this._authService.multiply(data);
	// }
}