import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Heist } from '../heist';
import { HeistService } from '../heist.service';
import { Member } from '../member';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-heist',
  templateUrl: './heist.component.html',
  styleUrls: ['./heist.component.css']
})
export class HeistComponent implements OnInit {

  id: number;
  members: Member[] = new Array<Member>();
  heist: Heist;

  constructor(private heistService: HeistService, private memberService: MemberService, private route: ActivatedRoute, private router: Router) { }

  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id != null && this.id != 0) {
      this.getMembersForHeist();
    }
  }

  getMembersForHeist() {
    this.heistService.getMembersForHeist(this.id).subscribe(data => {
        this.members = data;
      }, error => console.log(error));
  }

  removeMemberFromHeist(member: Member) {
    this.heistService.removeMemberFromHeist(this.id, member).subscribe(data => {
      this.getMembersForHeist()
    }, error => console.log(error));
  }
 
    isCollapsed: boolean = true;

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;

}
}
