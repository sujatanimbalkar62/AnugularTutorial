import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { config } from './../../config'
import { AuthResponce } from './appInterface/auth-interface';
import { Subject } from 'rxjs';
import { User } from './appmodel/usermodel';
import { catchError, tap } from 'rxjs/operators';
import { ErrorService } from './error.service';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  user=new Subject<User>();
   

  constructor(private http:HttpClient,
              private errorService:ErrorService
  ) { }
  
  signUp(email: any,password: any)
  {
    return this.http.post<AuthResponce>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${config.API_KEY}`,{
      email:email,
      password:password,
      returnSecureToken:true
    })
   .pipe(
     catchError(err=>{
         return this.errorService.handleError(err)
     }),
     tap(res=>{
      this.authenticatedUser(res.email,res.localId,res.idToken,+res.expiresIn);
    }) 
    )
    
  }
  signIn(email:any,password:any)
  {
     return this.http.post<AuthResponce>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${config.API_KEY}`,{
      email:email,
      password:password,
      returnSecureToken:true
     })
     .pipe(
      catchError(err=>{
          return this.errorService.handleError(err)
      }),
    
     tap(res=>{
       this.authenticatedUser(res.email,res.localId,res.idToken,+res.expiresIn);
     })
     )
    }
     
   private authenticatedUser( email:any,userId:any,token:any,expirationIn:any)
   {
     const expirationDate=new Date(new Date().getTime() +expirationIn*1000);
     const user=new User(email,userId,token,expirationDate)
     console.log('user =>',user);
     this.user.next(user);
  }
  googleSignIn()
  {

  }
}
