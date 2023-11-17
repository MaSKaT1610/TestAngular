import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  public users = [
    {
      firstName: 'Ivan',
      lastName: 'Petrov',
      email: 'IvanPetrov@gmail.com',
      password: '12345678',
      phone: '+72121213456',
      webURL: 'IvanPetrov.com',
    },
    {
      firstName: 'Petr',
      lastName: 'Ivanov',
      email: 'PetrIvanov@gmail.com',
      password: '12345678',
      phone: '+72121213456',
      webURL: 'PetrIvanov.com',
    },
    {
      firstName: 'Ivan',
      lastName: 'Ivanov',
      email: 'IvanIvanov@gmail.com',
      password: '12345678',
      phone: '+72121213456',
      webURL: 'IvanIvanov.com',
    },
  ]
}
