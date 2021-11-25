import { Controller, Get, Logger } from '@nestjs/common';

import { GrpcMethod, MessagePattern } from '@nestjs/microservices';
import { AuthService } from './auth.service';

interface INUmberArray {
	data: number[]
}

interface ISumOfNumberArray {
	sum: number
}

@Controller()
export class AppController {
	private logger = new Logger('AppController');
	
	constructor(private readonly _authService: AuthService) { }
	
	/** GRPC Method */
	@GrpcMethod('AppController', 'Accumulate')
	accumulate(numberArray: INUmberArray, metadata: any): ISumOfNumberArray {
		this.logger.log('Adding ' + numberArray.data.toString());
		return { sum: this._authService.add(numberArray.data)}
	}

	@MessagePattern('add')
	async add(data: number[]) {
		this.logger.log('Adding ' + data.toString());
		return this._authService.add(data);
	}

	@MessagePattern('multiply')
	async multiply(data: number[]) {
		this.logger.log('Multiplying ' + data.toString());
		return this._authService.multiply(data);
	}
}