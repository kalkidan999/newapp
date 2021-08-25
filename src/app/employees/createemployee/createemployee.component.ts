import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from 'src/app/models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit {
  datePickerConfig: Partial<BsDatepickerConfig>;
  previewPhoto=false;
  employees: Employee [] = [
    {
      id: 1,
      Firstname: 'kalkidan',
      Lastname: 'Demes',
      gender: 'female',
      email: 'kalkidandemes99@gmail.com',
      phonenumber: 901234567,

      DateofBirth: new Date('11/02/1996')
}
     
  ]

  
  constructor() {
 this.datePickerConfig = Object.assign({},
   {containerClass: 'theme-dark-blue',
   showWeekNumbers: false,
   minDate: new Date('2003/7/27'),
   maxDate: new Date('2021/7/27'),
  })
  
   }
  ngOnInit(): void {
    
  }

  saveemployee(empform: NgForm): void {
 console.log(empform.value);
  }
}
