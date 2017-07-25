import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TermService{
    constructor(private http:Http){}
    
    //read
    getTerms(){
        return this.http.get('/api/terms')
            .map(res => res.json()
        );
    }
    //create
    addTerm(newTerm){
        var headers = new Headers();
        headers.append('content-type', 'application/json');
        return this.http.post('/api/terms', JSON.stringify(newTerm), {headers: headers })
            .map(res => res.json()
        );
    }
    //update
    updateTerm(term){
        var headers = new Headers();
        headers.append('content-type', 'application/json');
        return this.http.put('/api/terms/' + term._id, JSON.stringify(term), {headers: headers })
            .map(res => res.json()
        );
    }
    //delete
    deleteTerm(id){
        return this.http.delete('/api/terms/' + id)
            .map(res => res.json()
        );
    }
}