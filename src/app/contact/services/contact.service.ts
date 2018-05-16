import {Injectable} from '@angular/core';
import {Contact} from '../contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[];

  constructor() {
    this.contacts = [];
    this.contacts.push(new Contact(1, 'Seppo', 'Taalasmaa'));
    this.contacts.push(new Contact(2, 'Jorma', 'Jokinen'));
    this.contacts.push(new Contact(3, 'Keijo', 'Kuningas'));
  }

  getContacts(): Contact[] {
    return this.contacts;
  }
}
