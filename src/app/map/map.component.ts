import { Component, OnInit, Pipe } from '@angular/core';
import { from, interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators'
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  Sub1: Subscription | undefined;
  msg1: any;

  Sub2: Subscription | undefined;
  msg2: any;


  constructor(private service:MyserviceService) { }

  ngOnInit(): void {

    const broadCastVideos = interval(1000);
    //Ex:1
    this.Sub1 = broadCastVideos.pipe(
      map(data => 'Video' + data)
    ).
      subscribe((res: any) => {
        //console.log(res);
        this.msg1 = res;

      })
    setTimeout(() => {
      this.Sub1?.unsubscribe();
    }, 10000)

    //Ex:2

    this.Sub2 = broadCastVideos.pipe(map(data => 'Table:' + data * 2))
      .subscribe(res => {
        //console.log(res)
        this.msg2 = res;
      })
    setTimeout(() => {
      this.Sub2?.unsubscribe();
    }, 10000)
      //Ex:3
  const members =  from([
    {
      id: 1, name: "sujata"
    },
    {
      id: 2, name: "amol"
    },
    {
      id: 3, name: "reyansh"
    },
    {
      id: 4, name: "smita"
    },
    {
      id: 5, name: "nikhil"
    },
    {
      id: 6, name: "sujata"
    }
  ])
    members.pipe(map(data=>data.name))
    .subscribe((res: any)=>{
      console.log(res)
      this.service.print(res,'elcontainer')
    })
  }
  

}


