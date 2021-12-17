import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMemberComponent } from './create-member/create-member.component';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './member-list/member-list.component';
import {UpdateMemberComponent} from './update-member/update-member.component'

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'member-list', component: MemberListComponent},
  {path: 'update-member/:id', component: UpdateMemberComponent},
  {path: '', redirectTo:'member-list', pathMatch: 'full'},
  {path: 'create-member', component: CreateMemberComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
