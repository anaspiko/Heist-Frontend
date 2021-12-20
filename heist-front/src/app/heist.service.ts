import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Heist } from './heist';
import { Member } from './member';

@Injectable({
  providedIn: 'root'
})
export class HeistService {

  public heistList: any = []
  public memberList = new BehaviorSubject<any>([]);

  private baseURL = "http://localhost:8080/api/v1/heist";
  private addMemberToHeistUrlPath = "addMemberToHeist";
  private getMembersForHeistUrlPath = "getMembersForHeist";
  private removeMembersFromHeistUrlPath = "removeMemberFromHeist";

  constructor(private httpClient : HttpClient) { }

  getMembersForHeist(heistId: number): Observable<Member[]> {
    return this.httpClient.get<Member[]>(`${this.baseURL}/${this.getMembersForHeistUrlPath}/${heistId}`);
  }

  setMember (member : any) {
    this.heistList.push(...member),
    this.memberList.next(member)
  }
  
  addMemberToHeist(heistId: number, member: Member): Observable<Heist> {
    return this.httpClient.put<Heist>(`${this.baseURL}/${this.addMemberToHeistUrlPath}/${heistId}`, member); 
  }

  removeMemberFromHeist(heistId: number, member: Member): Observable<Heist> {
    return this.httpClient.put<Heist>(`${this.baseURL}/${this.removeMembersFromHeistUrlPath}/${heistId}`, member); 
  }
  
}
