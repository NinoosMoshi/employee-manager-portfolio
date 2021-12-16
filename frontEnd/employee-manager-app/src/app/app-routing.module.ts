import { EmployeeListSaveComponent } from './components/employee-list-save/employee-list-save.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'list',component:EmployeeListComponent},
  {path:'save',component:EmployeeListSaveComponent},
  {path:'',redirectTo:'/list',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
