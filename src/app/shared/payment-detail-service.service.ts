import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import {HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PaymentDetailServiceService {

  constructor(private http: HttpClient) { }
  formData: PaymentDetail=new PaymentDetail();
  readonly baseURL="http://localhost:57253/api/PaymentDetails"
  postPaymentDetails(){
   return this.http.post(this.baseURL,this.formData);
  }
}
