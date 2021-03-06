import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaymentDetailServiceService } from 'src/app/shared/payment-detail-service.service';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styleUrls: ['./payment-detail-form.component.css'],
})
export class PaymentDetailFormComponent implements OnInit {
  constructor(public service: PaymentDetailServiceService, private toastr: ToastrService) {}

  ngOnInit(): void {}
  onSubmit(form: NgForm) {
   if(this.service.formData.paymentDetailId==0)
   {
    this.insertRecord(form);
   }
   else
   {
    this.updateRecord(form);
   }
  }
  insertRecord(form:NgForm)
  {
    this.service.postPaymentDetails().subscribe(
      (res) => {
        this.toastr.success('Card Added Successfully');
        this.service.getPaymentDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }
  updateRecord(form:NgForm)
  {
    this.service.updatePaymentDetails().subscribe(
      (res) => {
        this.toastr.success('Card Updated Successfully');
        this.service.getPaymentDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }
  
  resetForm(form:NgForm)
  {
    form.form.reset();
    this.service.formData=new PaymentDetail();
  }
}
