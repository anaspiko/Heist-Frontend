import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Heist } from '../heist';
import { HeistService } from '../heist.service';
import { Member } from '../member';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  members: Member[];
  heist: Heist;
  query: String;

  constructor(private memberService: MemberService, private router: Router, private heistService: HeistService) { }

  ngOnInit(): void {
    this.getAllMembers();
  }

  private getAllMembers() {
    this.memberService.getMemberList().subscribe(data => {
      this.members = data;
    });
  }

  updateMember(id: number) {
    this.router.navigate(['update-member', id]);
  }

  goToHeist() {
    var id = this.heist == null ? 0 : this.heist.id
    this.router.navigate(['heist', id])
  }

  deleteMember(id: number) {
    this.memberService.deleteMember(id).subscribe(data => {
      console.log(data)
      this.getAllMembers(); 
    })
  }
  addMemberToHeist(member: Member) {
    var heistId = this.heist == null ? 0 : this.heist.id;
    this.heistService.addMemberToHeist(heistId, member).subscribe(data => {
      console.log(data);
      this.heist = data;
      var list = this.members;
      const index = list.indexOf(member, 0);
      if (index > -1) {
        list.splice(index, 1);
      }
      this.members = list;
    })
  }

  searchMembers(text: string) {
    console.log(text);
    console.log(this.members);
    var list = this.members.filter(member => member.skill.includes(text, 0));
    console.log(list);
    this.members = list;
    if(text == "") {
      this.getAllMembers();
    }
  }
    
}
