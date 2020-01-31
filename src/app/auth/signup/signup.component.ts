import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { UIService } from 'src/app/ui.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {


  maxDate;
  isLoading = false;
  private loadingSubs: Subscription;

  constructor(private authServise: AuthService,   private uiService: UIService) { }

  ngOnInit() {

    this.loadingSubs= this.uiService.loadingStateChanged.subscribe(isloading =>{
      this.isLoading= isloading;
    });

    this.maxDate= new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear()-18);
  }

  onSubmit(form: NgForm){
    this.authServise.registerUser({
      email: form.value.email,
      password: form.value.password
    });
    
  }

  ngOnDestroy() {
    if(this.loadingSubs){
      this.loadingSubs.unsubscribe(); 
    }
  }

}
