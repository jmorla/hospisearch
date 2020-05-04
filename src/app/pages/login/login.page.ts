import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username = '';
  password = '';
  error: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLogin() {
    if (this.username === 'paciente01' && this.password === 'paciente01') {
      this.router.navigateByUrl('tabs/tab2');
      this.username = '';
      this.password = '';
    } else {
      this.error = true;
    }
  }

}
