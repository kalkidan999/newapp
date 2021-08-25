export class Employee {
    id: number;
    Firstname: string;
    Lastname: string;
    gender: string;
    email?: string;
    DateofBirth: Date;
    phonenumber: number;
    constructor(id: number,
        Firstname: string,
        Lastname: string,
        gender: string,
        phonenumber: number,
        DateofBirth: Date,
        email?: string,) {
        this.id = id;
        this.Firstname = Firstname;
        this.Lastname = Lastname;
        this.gender = gender;
        this.email = email;
        this.phonenumber = phonenumber;
        this.DateofBirth = DateofBirth;

    }
}