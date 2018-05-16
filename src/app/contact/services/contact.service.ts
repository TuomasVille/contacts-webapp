import {Injectable} from '@angular/core';
import {Contact} from '../contact';
import {Observable} from 'rxjs';
import {ContactHttpService} from './contact-http.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  // contacts: Contact[];

  constructor(private contactHttpService: ContactHttpService) {
    /*
    constructor() {
      this.contacts = [];
      this.contacts.push(new Contact(1, 'Seppo', 'Taalasmaa'));
      this.contacts.push(new Contact(2, 'Jorma', 'Jokinen'));
      this.contacts.push(new Contact(3, 'Keijo', 'Kuningas'));
      */
  }

  /*
  getContacts(): Contact[] {
    return this.contacts;
  }
  */
  getContacts(): Observable<Contact[]> {
    return this.contactHttpService.get();
  }
}
