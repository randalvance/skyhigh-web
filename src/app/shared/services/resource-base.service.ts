import { Injectable } from "@angular/core";
import { Http, Response, RequestOptionsArgs, RequestOptions, Headers } from "@angular/http";
import { Observable, ObservableInput } from "rxjs/Observable";

import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";

export abstract class ResourceServiceBase<T> {

    private apiBaseUrl: string = "http://localhost:5000/api/";
    protected resourceUrl: string;

    constructor(private http: Http, private resource: string) {
        this.resourceUrl = this.apiBaseUrl + (resource.startsWith("/") ? resource.substr(1) : resource);
    }

    public getAll() : Observable<T[]>{
        return this.http.get(this.resourceUrl)
            .map((response: Response) => <T[]>response.json())
            .do(data => console.log(`All: ${JSON.stringify(data)}`))
            .catch((err, caught) => {
                return Observable.throw(err || "An error occured");
            });
    }

    public add(entity: T): Observable<Response> {
        return this.http.post(this.resourceUrl, JSON.stringify(entity), {
            headers: new Headers({ "Content-Type": "application/json" })
        });
    }
}
