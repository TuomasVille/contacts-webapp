import {Component, OnInit} from '@angular/core';
import {UserCredentials} from '../user-credentials';
import {AuthenticationService} from '../service/authentication.service';
import {Router} from '@angular/router';
import {DialogService} from '../../dialog/dialog.service';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'cw-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userCredentials: UserCredentials;
  loginFailed: boolean;
  errorMessage: string;

  constructor(private  authenticationService: AuthenticationService, private router: Router,
              private dialog: MatDialog, private dialogService: DialogService) {
    this.userCredentials = new UserCredentials();
    this.loginFailed = false;
    this.errorMessage = '';
  }

  ngOnInit() {
    this.authenticationService.signOutUser();
  }

  onSignIn() {
    console.log(this.userCredentials);
    this.loginFailed = false;
    this.errorMessage = '';
    this.authenticationService.signInUser(this.userCredentials).subscribe(result => {

      this.router.navigate(['/contacts']);
    }, error1 => {
      this.userCredentials.username = '';
      this.userCredentials.password = '';
      this.loginFailed = true;
      this.errorMessage = 'Sign in failed';
      this.dialogService.errorDialog(this.errorMessage);
      console.error('user sign in failed');
    });
  }
}
