import { Injectable } from '@angular/core';
import {FormGroup,FormControl,Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
    form : FormGroup = new FormGroup({
    $key:new FormControl(null),
    fullname:new FormControl('',Validators.required),
    email : new FormControl('',Validators.email),
    mobileno : new FormControl('',[Validators.required,Validators.minLength(8)]),
    city : new FormControl(''),
    gender : new FormControl('1'),
    department:new FormControl(0),
    hiredate : new FormControl(),
    isPermenant: new FormControl(false)
  });

  initializeFormGroup(){
    this.form.setValue({
      $key:null,
      fullname:null,
      email :null,
      mobileno :null,
      city :null,
      gender :1,
      department:0,
      hiredate : null,
      isPermenant:false
    });
   
  }
}
