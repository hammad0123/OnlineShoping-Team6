import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor(private fb: FormBuilder) {}

 
//  registrationForm =  new FormGroup({
//    userName: new FormControl(''),
//    password: new FormControl(''),
//    ConfirmPassword: new FormControl(''),
//    address: new FormGroup({
//     city: new FormControl(''),
//     state: new FormControl(''),
//     postalCode: new FormControl(''),

//    })
    registrationForm= this.fb.group({
      userName:['',[Validators.required, Validators.minLength(3)]],
      password:['',Validators.required],
      ConfirmPassword:['',Validators.required],
      Email:['',Validators.required],
      MobileNo:['',Validators.required],
      Address:['',Validators.required]
    })


 loadApiData(){
   this.registrationForm.patchValue({
     userName:'Aditi',
     password: 'test',
     ConfirmPassword: 'test',
     Email:'test@gmail.com',
     MobileNo:'123456',
     Address: 'mumbai'
    
   });
 }

}
