import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeListSaveComponent } from './components/employee-list-save/employee-list-save.component';
import { EmployeeListViewComponent } from './components/employee-list-view/employee-list-view.component'
import { FormsModule } from '@angular/forms';
import { EmployeeListDeleteComponent } from './components/employee-list-delete/employee-list-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    EmployeeListComponent,
    EmployeeListSaveComponent,
    EmployeeListViewComponent,
    EmployeeListDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
