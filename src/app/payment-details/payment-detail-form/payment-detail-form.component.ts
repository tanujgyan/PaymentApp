import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaymentDetailServiceService } from 'src/app/shared/payment-detail-service.service';

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styleUrls: ['./payment-detail-form.component.css']
})
export class PaymentDetailFormComponent implements OnInit {

  constructor(public service:PaymentDetailServiceService) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm)
  {
    this.service.postPaymentDetails().subscribe(
res=>{

},
err=>{
console.log(err);
}
    )
  }

}
