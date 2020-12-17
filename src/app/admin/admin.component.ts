import { Router } from '@angular/router';
import { AdminService } from './../core/service/admin.service';
import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';

export interface TokenDecoded {
  id: string;
  role: string;
  iat: number;
  exp: number;
}


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  constructor(
    private adminService: AdminService,
    private router: Router
  ) { }

  redirectTo(uri: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([uri]));
  }

  ngOnInit(): void {
    const token = localStorage.getItem('token') as string;
    if (!token) {
      this.redirectTo('/');
    }
    const user = jwt_decode(token) as TokenDecoded;

    if (user.role != 'admin') {
      this.redirectTo('/');
    }
  }

  onProfileClick(): void {
    this.redirectTo('/admin/profile')
  }

  onClientsClick(): void {
    this.redirectTo('/admin/clients')
  }
}
