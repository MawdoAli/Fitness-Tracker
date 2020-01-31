import { AuthData } from './auth-data.model';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { TrainingService } from '../training/training.service';
import { UIService } from '../ui.service';


@Injectable()

export class AuthService{

    authChange= new Subject<boolean>();
    private isAuthenticated = false;

    constructor(
        private router: Router, 
        private afAuth: AngularFireAuth,
        private trianingService: TrainingService,
        private uiService: UIService)
        
    {}

    initAuthListner(){
        this.afAuth.authState.subscribe(user => {
            if(user){
                this.isAuthenticated= true;
                this.authChange.next(true);
                this.router.navigate(['/training']) 
            }else{
                this.trianingService.cancelSubscription();
                this.authChange.next(false);
                this.router.navigate(['/login'])
                this.isAuthenticated= false;
            }
        })
    }

    registerUser(authData: AuthData){
        this.uiService.loadingStateChanged.next(true);
        this.afAuth.auth.createUserWithEmailAndPassword(
            authData.email,
            authData.password
        ).then(result =>{
            this.uiService.loadingStateChanged.next(false);

        })
        .catch(error => {
            this.uiService.loadingStateChanged.next(false);
            this.uiService.showSnackBar(error.message, null, 3000);

        });
    }

    login(authData: AuthData) {
        this.uiService.loadingStateChanged.next(true);
        this.afAuth.auth
          .signInWithEmailAndPassword(authData.email, authData.password)
          .then(result => {
            this.uiService.loadingStateChanged.next(false);

          })
          .catch(error => {             
            this.uiService.loadingStateChanged.next(true);
            this.uiService.showSnackBar(error.message, null, 3000);
          });
    }

    logout(){
        this.afAuth.auth.signOut();

    }



    isAuth(){
        return this.isAuthenticated;
    }


}