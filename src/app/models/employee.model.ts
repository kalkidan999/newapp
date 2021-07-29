export class Employee {
    id: number;
    name: string;
    gender: string;
    email?: string;
    phonenumber: number;
    contactpreference: string;
    DateofBirth: Date;
    department: string;
    isActive?: boolean;
    photoPath?: string
    constructor(id: number,
        name: string,
        gender: string,
        phonenumber: number,
        contactpreference: string,
        DateofBirth: Date,
        department: string,
        email?: string,
        isActive?: boolean,
        photoPath?: string) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.email = email;
        this.phonenumber = phonenumber;
        this.contactpreference = contactpreference;
        this.DateofBirth = DateofBirth;
        this.department = department;
        this.isActive = isActive;
        this.photoPath = photoPath;

    }
}