import jwt_decode from 'jwt-decode';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenDecoded } from 'src/app/admin/admin.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, OnChanges {
  public isLogin: boolean = false;
  constructor(
    private router: Router
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    const token = localStorage.getItem('token') as string;
    if (token) {
      this.isLogin = true;
    }
  }


}
