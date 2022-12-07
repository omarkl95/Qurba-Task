import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SessionStorageService } from 'src/app/services/session-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(    
    private fb: FormBuilder ,
    private auth: AuthService,
    private router: Router,
    private session: SessionStorageService,

    ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
   }

  ngOnInit(): void {
  }

  onSubmit() {
    this.auth
      .login({
        username: this.loginForm.get('username')?.value,
        password: this.loginForm.get('password')?.value,
      })
      .then(res => {
          this.session.set('currentUser', JSON.stringify(res));
          this.auth.setIsLogin();
          this.router.navigateByUrl('/products');
        
      })
      .catch(err => {
        
      });
  }

}
