import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  constructor(public accountService: AccountService, private router: Router, 
    private toastr: ToastrService) { }

  ngOnInit(): void {
    //this.getCurrentUser();
    //this.currentUser$ = this.accountService.currentUser$;
  }

  login(){
    //console.log(this.model);
    this.accountService.login(this.model).subscribe({
      next: () => { this.router.navigateByUrl('/members')},
      error: error => { 
        console.log(error.error); 
        this.toastr.error(error.error);
      }  
    })
  }

  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}
