**To Install angular 11**
1) Install node js and npm. Check version using node -v and npm -v
2) Run npm install -g @angular/cli
3) Create a new project ng new PaymentApp
4) In cmd go to the folder and type code . to open the folder in vs code

Angular Project Files
  1. Create a component using ng g c payment-details
  2. Inside that create a child component ng g c payment-details/payment-detail-form
  3. Create a shared folder and inside that we create service and model files ng g s shared/payment-detail-service and ng g class shared/payment-detail --type=model

**Install Toastr**
To install toastr for showing the notifications visit https://www.npmjs.com/package/ngx-toastr \
Command to install the latest package: npm i ngx-toastr \
Follow all the steps mentioned in setup

This app calls .Net Core API "PaymentAPI"
