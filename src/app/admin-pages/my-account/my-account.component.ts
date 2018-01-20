import { Component, OnInit } from '@angular/core';
import { MyAccountService } from '../my-account/my-account.service';
import { User } from '../../model/user';
import { AbstractControl, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
// declare const $: any;
@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  providers: [MyAccountService]
})
export class MyAccountComponent implements OnInit {
  public user=new User();
  private passwordValue: string;
  private confirmPasswordValue: string;
  private load:boolean=false;
  constructor(private service: MyAccountService) {
    
    // this.user.firstName="";
    // this.user.email="";
    // this.user.lastName="";
    
  }

  ngOnInit() {
    this.load=true;
    this.passwordValue = "";
    this.confirmPasswordValue = "";
    // if(localStorage.getItem('userData'))
    // {
    //   var data=JSON.parse(localStorage.getItem('userData'));
    //   this.user.firstName=data.first_name;
    //   this.user.email=data.email;
    //   this.user.lastName=data.last_name;
    // }
    // else{
      this.service.getCustomerInfo(JSON.parse(localStorage.getItem('currentUser')));
      // this.user = this.service.user;
      this.service.user.subscribe((data:any)=>{
        if(data.id)
        {
          localStorage.setItem('userData', JSON.stringify(data));
          this.user.firstName=data.first_name;
          this.user.email=data.email;
          this.user.lastName=data.last_name;
          this.load=false;
          // this.user.firstName=data.first_name;
        }
      })
    // }
    
  }

  saveAccountsInformation(form:any) {
    if(form.value.password) 
    {
      delete form.value.confirmPassword;      
      this.service.updateAccountInfo(JSON.parse(localStorage.getItem('currentUser')),form.value); 
      form.reset();
    }   
    else{
      this.service.updateAccountInfo(JSON.parse(localStorage.getItem('currentUser')),form.value);
      // this.router.navigate(['/payouts']);
    }
            
  }

}
