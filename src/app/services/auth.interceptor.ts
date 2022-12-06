import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private login: LoginService) { }
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        //add the JWT token(local storage) request
        const token ='Bearer '+this.login.getToken();
        let authReq = req;
        
        if (token != null) {
            console.log(token)
            authReq=authReq.clone({
                headers: authReq.headers
                        .set('Authorization', token)
                        .set('enctype', 'multipart/form-data')
                        .set('Access-Control-Allow-Origin', '*')
                        .set('Access-Control-Allow-Methods','GET, POST, PATCH, PUT, DELETE, OPTIONS')
                        .set('Access-Control-Allow-Headers','Origin, Content-Type')
            })
        }
        return next.handle(authReq);
    }
}
export const AuthInterceptorProviders = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true,
    }
]