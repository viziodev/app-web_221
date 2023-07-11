import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './users/list/list.component';
import { FormComponent } from './users/form/form.component';
import { ProfilComponent } from './users/profil/profil.component';
import { SecureComponent } from './secure.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './menu/menu.component';
import { UiModule } from '../shared/components/ui/ui.module';



@NgModule({
  declarations: [
    ListComponent,
    FormComponent,
    ProfilComponent,
    SecureComponent,
    DashboardComponent,
    NavComponent,
    MenuComponent,
  ],
  imports: [CommonModule, RouterModule, UiModule],
})
export class SecureModule {}
