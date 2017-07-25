import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PlayService{
    constructor(private http:Http){}

    getRandomTerm(){
        return this.http.get('/api/terms/random')
            .map(res => res.json());
    }
}