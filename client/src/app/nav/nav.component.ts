import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_modals/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}
  //loggedIn: Boolean;
  //currentUser$: Observable<User>;

  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
    //this.getCurrentUser();
    //this.currentUser$ = this.accountService.currentUser$;
  }

  login(){
    //console.log(this.model);
    this.accountService.login(this.model).subscribe(response => 
      {
        console.log(response);
      }, error => {
        console.log(error);
      } )
  }

  logout(){
    this.accountService.logout();
  }
}
