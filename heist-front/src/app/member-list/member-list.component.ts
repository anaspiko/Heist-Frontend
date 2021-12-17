import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from '../member';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  members: Member[];

  constructor(private memberService: MemberService, private router: Router) { }

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

  deleteMember(id: number) {
    this.memberService.deleteMember(id).subscribe(data => {
      console.log(data)
      this.getAllMembers(); 
    })
  }
    
}
