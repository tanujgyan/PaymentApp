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
  paymentDetailsList: PaymentDetail[];
  postPaymentDetails(){
   return this.http.post(this.baseURL,this.formData);
  }
  updatePaymentDetails(){
    return this.http.put(`${this.baseURL}/${this.formData.paymentDetailId}`,this.formData);
   }
  getPaymentDetails()
  {
    this.http.get(this.baseURL).toPromise().then(
      res=>{
        this.paymentDetailsList= res as PaymentDetail[];
      }
    )
  }
  deletePaymentDetails(id:number)
  {
    return this.http.delete(`${this.baseURL}/${id}`)
  }
}
