import { API } from './../utils/api.util';
import { LocalStorageServiceProvider } from './../providers/local-storage-service/local-storage-service';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from "@angular/common/http";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
      public storage: LocalStorageServiceProvider
    ){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let localUser = this.storage.getToken();

        let N = API.URL.length;
        let requestToAPI = req.url.substring(0, N) == API.URL;

        if (localUser && requestToAPI) {
            const authReq = req.clone({headers: req.headers.set('authorization', localUser)});
            return next.handle(authReq);
        } else {
            return next.handle(req);
        }
    }
}

export const AuthInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
};
