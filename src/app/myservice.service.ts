import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  url="http://localhost:3000/restarents"
  constructor(private http:HttpClient) { }
  getList()
  {
    return this.http.get(this.url)
  }
  saveList(data:any)
  {
    return this.http.post(this.url,data)
  }
  deleteList(id:any)
  {
    return this.http.delete(this.url +"/"+id)
  }
  getCurrentList(id:any)
  {
    return this.http.get(this.url +"/"+id)
  }
  updateList(id:any,data:any)
  {
    return this.http.put(this.url +"/"+id,data)
  }
  print(val:any,containerId:any)
  {
     let e1=document.createElement('li');
     e1.innerHTML=val;
     document.getElementById(containerId)?.appendChild(e1);
  }
}
