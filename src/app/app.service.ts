import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { SubmitTaskRequest, TaskResponse } from "./task.model";

@Injectable({
    providedIn: 'root'
})

export class AppService {

    //Declaring adpeai base URL which is common for all actions
    adpeaiUrl: string = "https://interview.adpeai.com/api/v1/";


    constructor(private http: HttpClient) {
    }

    buildHttpOptions() {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
                'key': 'x-api-key',
                'value': 'NNctr6Tjrw9794gFXf3fi6zWBZ78j6Gv3UCb3y0x'
            })
        };
        return httpOptions;
    }

    getTask(): Observable<TaskResponse> {
        let apiUrl = this.adpeaiUrl + "get-task";
        return this.http.get<TaskResponse>(apiUrl, this.buildHttpOptions());
    }

    submitTask(model:SubmitTaskRequest): Observable<string> {
        let apiUrl = this.adpeaiUrl + "submit-task";
        return this.http.post<string>(apiUrl,model, this.buildHttpOptions());
    }

}