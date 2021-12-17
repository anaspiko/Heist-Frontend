import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MemberListComponent } from './member-list/member-list.component';
import { UpdateMemberComponent } from './update-member/update-member.component';
import { FormsModule } from '@angular/forms';
import { CreateMemberComponent } from './create-member/create-member.component';
import { HeistComponent } from './heist/heist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MemberListComponent,
    UpdateMemberComponent,
    CreateMemberComponent,
    HeistComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
