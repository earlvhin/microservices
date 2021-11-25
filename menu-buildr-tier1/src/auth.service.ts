import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

@Injectable()
export class AuthService {
	private client: ClientProxy;

	constructor() {
		this.client = ClientProxyFactory.create({
			transport: Transport.REDIS,
			options: {
				url: 'redis://localhost:6379'
			}
		})
	}

	add(data: number[]) {
		return this.client.send<number, number[]>('add', data);
	}

	multiply(data: number[]) {
		return this.client.send<number, number[]>('multiply', data);
	}
}