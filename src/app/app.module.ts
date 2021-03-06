import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from './material.module';
import { SignupComponent } from './auth/signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './navigation/header/header.component';
import { StopTrainingComponent } from './training/current-training/stop-training.component';
import {AuthService} from './auth/auth.service';
import { TrainingService } from './training/training.service';
import { AngularFireModule} from 'angularfire2';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { UIService } from './ui.service';
import { TrainingComponent } from './training/training.component';
import { CurrentTrainingComponent } from './training/current-training/current-training.component';
import { NewTrainingComponent } from './training/new-training/new-training.component';
import { PastTrainingsComponent } from './training/past-trainings/past-trainings.component';
import { SideListComponent } from './navigation/side-list/side-list.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './auth/login/login.component';


@NgModule({
  declarations: [
    TrainingComponent,
    StopTrainingComponent,
    AppComponent,
    LoginComponent,
    SignupComponent,
    WelcomeComponent,
    HeaderComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingsComponent,
    StopTrainingComponent,
    SideListComponent
    
    
  ],

  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule

  ],
  
  providers: [AuthService, TrainingService, UIService],
  bootstrap: [AppComponent],
  entryComponents:[StopTrainingComponent]
})
export class AppModule { }
