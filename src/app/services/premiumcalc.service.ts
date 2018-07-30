import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PremiumcalcService {
baseUrl = environment.apiUrl;

constructor(private http: HttpClient) { }

  getPremiumDetails(customer: Customer): Observable<Customer> {

    return this.http.get<Customer>(this.baseUrl + 'values/' + customer.Name + '/gender/' +
    customer.Gender + '?dob=' +  customer.DOB);
  }
}
