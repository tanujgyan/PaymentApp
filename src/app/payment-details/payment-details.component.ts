import { Component, OnInit } from '@angular/core';
import { Toast, ToastrService } from 'ngx-toastr';
import { PaymentDetailServiceService } from '../shared/payment-detail-service.service';
import { PaymentDetail } from '../shared/payment-detail.model';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css'],
})
export class PaymentDetailsComponent implements OnInit {
  constructor(
    public service: PaymentDetailServiceService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.service.getPaymentDetails();
  }
  populateForm(row: PaymentDetail) {
    //Object.assign will copy the data into form controls
    this.service.formData = Object.assign({}, row);
  }
  deleteRecord(row: PaymentDetail) {
    if (confirm('Are you sure you want to Delete')) {
      this.service
        .deletePaymentDetails(row.paymentDetailId)
        .subscribe((res) => {
          this.toastr.error('Card deleted successfully');
          this.service.getPaymentDetails();
        });
    }
  }
}
