import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
    constructor(private http: Http) {}

    public getExercises() {
        return this.http.get('http://localhost:3000/resources/exercises')
            .map(res => res.json());
    }
    
}