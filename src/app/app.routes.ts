import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecureLayoutComponent } from './layouts/secure-layout/secure-layout.component';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent), data: { breadcrumb: [{ title: 'Home', active: true }] } },
      { path: 'contact-us', loadComponent: () => import('./features/contact-us/contact-us.component').then(m => m.ContactUsComponent), data: { breadcrumb: [{ title: 'Contact Us', active: true }] } },
      { path: 'privacy-policy', loadComponent: () => import('./features/privacy-policy/privacy-policy.component').then(m => m.PrivacyPolicyComponent), data: { breadcrumb: [{ title: 'Privacy Policy', active: true }] } },
    ],
  },

  {
    path: '',
    component: SecureLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      // { path: 'dashboard', canActivate: [accessGuard], loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent), data: { breadcrumb: [{ title: 'Dashboard', active: true }] } },
    ],
  },

  { path: '**', redirectTo: 'home' },
];
