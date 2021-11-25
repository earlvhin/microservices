import { Observable } from "rxjs";

interface INumberArray {
    data: number[]
}

export interface IGrpcService {
    accumulate(numberArray: INumberArray): Observable<any>;
}