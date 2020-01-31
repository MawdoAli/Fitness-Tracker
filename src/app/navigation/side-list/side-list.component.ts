import { Component, OnInit, EventEmitter, Output, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription'
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-side-list',
  templateUrl: './side-list.component.html',
  styleUrls: ['./side-list.component.css']
})
export class SideListComponent implements OnInit, OnDestroy {


  @Output() closeSidenav= new EventEmitter<void>();
  isAuth= false;
  authSubscription: Subscription;
  constructor(private authServise: AuthService) { }

  ngOnInit() {
    this.authSubscription=this.authServise.authChange.subscribe(authStatus => {
      this.isAuth= authStatus;
    });
  }

  onClose(){
    this.closeSidenav.emit();
  }

  onLogout(){
    this.onClose();
    this.authServise.logout();
  }

  ngOnDestroy(){
    this.authSubscription.unsubscribe();
  }


}
