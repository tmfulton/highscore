import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Observable } from 'rxjs';
import { User } from 'firebase';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user$: Observable<User>;

  constructor(private authService: AuthService) { 
    this.user$ = this.authService.user$;
  }

  ngOnInit(): void {
  }

  logout() {
    this.authService.signOut();

  }

}
