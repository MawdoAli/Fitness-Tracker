import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { UIService } from 'src/app/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, OnDestroy{


  loginForm: FormGroup;
  isLoading = false;
  private loadingSubs: Subscription;

  constructor(
    private authServise: AuthService,
    private uiService: UIService)
  { }

  ngOnInit() {

    this.loadingSubs= this.uiService.loadingStateChanged.subscribe(isloading =>{
      this.isLoading= isloading;
    });

    this.loginForm= new FormGroup({
      email: new FormControl('',{
        validators:[Validators.required,Validators.email]
      }),

      password: new FormControl('', {validators: [Validators.required ]})
    });
  }

  onSubmit(){
    this.authServise.login({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    });
  }

  ngOnDestroy(): void {
    this.loadingSubs.unsubscribe();
  }
  

}
