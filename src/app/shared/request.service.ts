import {Product} from "../shop/item/product.model";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {User} from "./user.model";
import {Injectable} from "@angular/core";
import {Request} from "./request.model";

@Injectable()
export class RequestService {
  private url: string;

  constructor(private http: HttpClient) {
  }
  // :Promise<Product[]>
  getProductsFromServer(specific: string,extras: Request)
  {
    this.setConnectionSpecifics('Product',specific)
    this.readRequest(extras,'Product')
  }

  getAllOrdersFromServer(specific: string,extras: Request){
    this.setConnectionSpecifics('Order',specific)
    this.readRequest(extras,'Order')
  }

  logInFromAdmin() {
  }





  private readRequest( readyRequest:Request,className: string): any[] {
    let content: any[];
      content = this.addOnToRequest(readyRequest, className);
      this.http.request(readyRequest.duty, this.url, {
        headers: this.giveHeadingToRequest(readyRequest)
      })
        .subscribe(((response: any[]) => {
          content = response;
        }));
    return content;
  }


  private giveHeadingToRequest(request: Request): HttpHeaders {
    let headerOfRequest: HttpHeaders = new HttpHeaders();
    headerOfRequest.set("adminCode", request.userNr.toString() );
    return headerOfRequest

  }

  private addOnToRequest(request: Request, className: string): any[] {
    let content: any[];
    let parameters: HttpParams = this.formRequest(request, className)
    this.http.request(request.duty, this.url, {
      headers: this.giveHeadingToRequest(request),
      params: parameters
    })
      .subscribe((response: any[]) => {
        content = response;
      }, (error) => {
        // throw errorContext(
        alert(JSON.stringify(error));
      });

    return content;
  }

  private formRequest(jsonRequest: Request, className: string): HttpParams {
    let parameters: HttpParams = new HttpParams();
    for (let aModel of jsonRequest.givenVariables) {
      parameters.append(className.toLowerCase(), aModel.toString());
    }
    return parameters;
  }

  private setConnectionSpecifics(className: string, specific: string): void {
    this.url = ("http://localhost:8080/" + className.toLowerCase());
    if (specific !== "") {
      this.url = (this.url + "/" + specific);
    }
  }

}
