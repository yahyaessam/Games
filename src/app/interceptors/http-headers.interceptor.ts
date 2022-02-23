import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()

export class HttpHeadersInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      req = req.clone({
        setHeaders: { // 0b6a00fd22msh569b508f1fcd896p1cfcc4jsnb43dd07d4543
          // 'x-rapidapi-key': 'esGbwrm390mshS2BCl0RALxQRtZTp1W7sFMjsnyJlJzDXVkW0H',
          'x-rapidapi-key': '0b6a00fd22msh569b508f1fcd896p1cfcc4jsnb43dd07d4543',
          'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
        },
        setParams: {
          key: 'e40e743af2c94b0c916a8aa618fb4473',
        }
      });
      return next.handle(req);
  }
}
