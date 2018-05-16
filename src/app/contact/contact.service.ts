import {Injectable} from '@angular/core';
import {Contact} from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[];

  constructor() {
    this.contacts = [];
    this.contacts.push(new Contact('Seppo', 'Taalasmaa'));
    this.contacts.push(new Contact('Jorma', 'Jokinen'));
    this.contacts.push(new Contact('Keijo', 'Kuningas'));
  }

  getContacts(): Contact[] {
    return this.contacts;
  }
}
