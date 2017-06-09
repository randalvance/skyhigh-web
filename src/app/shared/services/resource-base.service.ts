import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { Observable, ObservableInput } from 'rxjs/Observable';
import { PageOptions } from '../../shared/models';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import 'rxjs/add/observable/throw';

export abstract class ResourceServiceBase<T> {

    protected resourceUrl: string;

    constructor(private http: Http, private apiBaseUrl, private resource: string) {
        this.resourceUrl = this.apiBaseUrl + (resource.startsWith('/') ? resource.substr(1) : resource);
    }

    public getAll(pageOptions?: PageOptions) : Observable<T[]>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let params = new URLSearchParams();
        
        if (pageOptions && pageOptions.searchTerm) {
            params.set('searchTerm', pageOptions.searchTerm);
        }

        var requestOptions: RequestOptionsArgs = {
            headers: new Headers({ 'Content-Type': 'application/json' }),
            search: params
        };

        return this.http.get(this.resourceUrl, requestOptions)
                        .map((response: Response) => <T[]>response.json())
                        .catch((err, caught) => {
                            return Observable.throw(err || 'An error occured');
                        });
    }

    public add(entity: T): Observable<Response> {
        return this.http.post(this.resourceUrl, JSON.stringify(entity), {
            headers: new Headers({ 'Content-Type': 'application/json' })
        });
    }

    public delete(id) : Observable<Response> {
      var sanitizedId = encodeURIComponent(id);
      return this.http.delete(this.resourceUrl + `/${sanitizedId}`);
    }
}
