import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WorkersListComponent } from './components/workers-list/workers-list.component';
import { OperatorComponent } from './components/operator/operator.component';
import { MasterComponent } from './components/master/master.component';
import { FuelAttendantComponent } from './components/fuel-attendant/fuel-attendant.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'workers', component: WorkersListComponent},
  {path: 'operator', component: OperatorComponent},
  {path: 'master', component: MasterComponent},
  {path: 'fuel', component: FuelAttendantComponent},
  {path: 'forbidden', component: ForbiddenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
