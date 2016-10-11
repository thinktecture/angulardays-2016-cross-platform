import {Injectable} from '@angular/core';
import {Http, RequestOptionsArgs, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {TokenService} from './tokenService';

@Injectable()
export class AuthenticatedHttp {
    constructor(private _http: Http,
                private _tokenService: TokenService) {
    }

    request(url: string, options?: RequestOptionsArgs): Observable<Response> {
        options = this.prepareOptions(options);
        return this._http.request(url, options);
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        options = this.prepareOptions(options);
        return this._http.get(url, options);
    }

    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        options = this.prepareOptions(options);
        return this._http.post(url, body, options);
    }

    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        options = this.prepareOptions(options);
        return this._http.put(url, body, options);
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        options = this.prepareOptions(options);
        return this._http.delete(url, options);
    }

    patch(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        options = this.prepareOptions(options);
        return this._http.patch(url, body, options);
    }

    head(url: string, options?: RequestOptionsArgs): Observable<Response> {
        options = this.prepareOptions(options);
        return this._http.head(url, options);
    }

    protected prepareOptions(options: RequestOptionsArgs): RequestOptionsArgs {
        let token = this._tokenService.token;

        if (token) {
            options = options || {};

            if (!options.headers) {
                options.headers = new Headers();
            }
            options.headers.append('Authorization', 'Bearer ' + token);
        }

        return options;
    }
}
