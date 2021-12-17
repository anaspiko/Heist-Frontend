import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from './member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private baseURL = "http://localhost:8080/api/v1/member";
  private getMemberByIdUrlPath = "getMemberById";
  private getAllMembersUrlPath = "getAllMembers";
  private updateMemberUrlPath = "updateMember";
  private createMemberUrlPath = "createMember";

  constructor(private httpClient : HttpClient) { } //dependencies

  getMemberList(): Observable<Member[]> {
    return this.httpClient.get<Member[]>(`${this.baseURL}/${this.getAllMembersUrlPath}`);
  }

  createMember(member: Member): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/${this.createMemberUrlPath}`, member);
  }
  getMemberById(id: number): Observable<Member> {
    return this.httpClient.get<Member>(`${this.baseURL}/${this.getMemberByIdUrlPath}/${id}`);
  }

  updateMember(id: number, member: Member): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${this.updateMemberUrlPath}/${id}`, member)
  }

  deleteMember(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
