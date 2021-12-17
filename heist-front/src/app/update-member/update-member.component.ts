import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from '../member';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-update-member',
  templateUrl: './update-member.component.html',
  styleUrls: ['./update-member.component.css']
})
export class UpdateMemberComponent implements OnInit {

  id: number;
  member: Member = new Member()

  constructor(private memberService: MemberService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.memberService.getMemberById(this.id).subscribe(data => {
      this.member = data;
    }, error => console.log(error))
  }
  goToMemberList(){
    this.router.navigate(['/member-list'])
  }

  onSubmit() {
    this.memberService.updateMember(this.id, this.member).subscribe(data => {
      this.goToMemberList();
    },error => console.log(error));
  }

}
