import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.css']
})
export class ListemployeeComponent implements OnInit {
employees: Employee [] = [
  {
    id: 1,
    Firstname: 'kalkidan',
    Lastname: 'Demes',
    gender: 'female',
    email: 'kalkidandemes99@gmail.com',
    phonenumber: 901234567,
    DateofBirth: new Date('11/02/1996'),
  },
    {
      id: 1,
      Firstname: 'John',
      Lastname: 'Dawit',
      gender: 'male',
      email: 'joe99@gmail.com',
      phonenumber: 9000234567,
      DateofBirth: new Date('20/09/1990'),
     }
]
  constructor() { }

  ngOnInit(): void {
  }

}
