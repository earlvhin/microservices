import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
	add(data: number[]): number {
		console.log('Incoming ADD Data: ', data)
		return (data || []).reduce((a, b) => Number(a) + Number(b))
	}

	multiply(data: number[]): number {
		console.log('Incoming MULTIPLY Data: ', data)
		return (data || []).reduce((a, b) => Number(a) * Number(b))
	}	
}