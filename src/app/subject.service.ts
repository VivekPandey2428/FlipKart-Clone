import { Injectable } from '@angular/core';
import { Observable, observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private subject = new Subject<any>();
  sendMessage(message:string){
    this.subject.next({text:message});
  }
  clearMessage(){
    this.subject.next();
  }
  getMessage(): Observable<any>{
    return this.subject.asObservable();
  }
  constructor() { }

}
