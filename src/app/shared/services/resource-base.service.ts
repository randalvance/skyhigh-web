import { Injectable } from "@angular/core";
import { Http, Response, RequestOptionsArgs, RequestOptions, Headers } from "@angular/http";
import { Observable, ObservableInput } from "rxjs/Observable";

import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";

import "rxjs/add/observable/throw";

export abstract class ResourceServiceBase<T> {

    protected resourceUrl: string;

    constructor(private http: Http, private apiBaseUrl, private resource: string) {
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

    public delete(id) : Observable<Response> {
      var sanitizedId = encodeURIComponent(id);
      return this.http.delete(this.resourceUrl + `/${sanitizedId}`);
    }
}
