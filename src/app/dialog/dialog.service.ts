import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material';
import {DialogComponent} from './dialog.component';


@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) {}

  errorDialog(errorMessage: string) {
    const dialogRef = this.dialog.open(DialogComponent, { data: { message: errorMessage } });
  }
}
