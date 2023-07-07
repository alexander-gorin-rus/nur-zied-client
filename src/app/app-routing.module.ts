import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { WorkersListComponent } from './workers-list/workers-list.component';
import { OperatorComponent } from './operator/operator.component';
import { MasterComponent } from './master/master.component';
import { FuelAttendantComponent } from './fuel-attendant/fuel-attendant.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';

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
