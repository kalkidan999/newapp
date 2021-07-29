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
    name: 'kalkidan Demes',
    gender: 'female',
    email: 'kalkidandemes99@gmail.com',
    phonenumber: 901234567,
    contactpreference: 'female',
    DateofBirth: new Date('11/02/1996'),
    department: 'programmer',
    isActive: true,
    photoPath: 'assets/images/kal.jpg'},
    {
      id: 1,
      name: 'John Dawit',
      gender: 'male',
      email: 'joe99@gmail.com',
      phonenumber: 9000234567,
      contactpreference: 'male',
      DateofBirth: new Date('20/09/1990'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/laketana.jpeg'}
]
  constructor() { }

  ngOnInit(): void {
  }

}
