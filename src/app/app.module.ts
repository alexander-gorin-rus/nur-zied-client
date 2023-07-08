import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './components/home/home.component';
import { WorkersListComponent } from './components/workers-list/workers-list.component';
import { UpdatePopupComponent } from './components/update-popup/update-popup.component';
import { HeaderComponent } from './components/header/header.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { OperatorComponent } from './components/operator/operator.component';
import { MasterComponent } from './components/master/master.component';
import { FuelAttendantComponent } from './components/fuel-attendant/fuel-attendant.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from '../app/guard/auth.guard';
import { CookieService } from 'ngx-cookie-service';
import { DirectorComponent } from './components/director/director.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    WorkersListComponent,
    UpdatePopupComponent,
    HeaderComponent,
    ForbiddenComponent,
    OperatorComponent,
    MasterComponent,
    FuelAttendantComponent,
    DirectorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [AuthGuard, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
