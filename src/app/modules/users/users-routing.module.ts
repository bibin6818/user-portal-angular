import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  //http://localhost:4200/users
  { path: '', component: UsersListComponent },
  //http://localhost:4200/users/add

  {path:'add',component:AddUserComponent},

  //http://localhost:4200/users/2/edit
{path:':id/edit' ,component:EditUserComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }