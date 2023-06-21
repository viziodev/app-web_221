import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './public/login/login.component';
import { RegisterComponent } from './public/register/register.component';
import { PublicComponent } from './public/public.component';
import { SecureComponent } from './secure/secure.component';
import { ListComponent } from './secure/users/list/list.component';
import { FormComponent } from './secure/users/form/form.component';
import { ProfilComponent } from './secure/users/profil/profil.component';
import { DashboardComponent } from './secure/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },
  {
    path: '',
    component: SecureComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'users/list',
        component: ListComponent,
      },
      {
        path: 'users/save',
        component: FormComponent,
      },
      {
        path: 'users/profil',
        component: ProfilComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
