import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { map, mergeAll, mergeMap } from 'rxjs/operators';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-mergemap',
  templateUrl: './mergemap.component.html',
  styleUrls: ['./mergemap.component.css']
})
export class MergemapComponent implements OnInit {

  constructor(private service: MyserviceService) { }
  getData(data: any) {
    return of(data + 'Video Uploaded')
  }

  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News'])
    //Ex:1
    source.pipe(map(res => this.getData(res)))
    
      .subscribe(res => {
        console.log(res);
        this.service.print(res, "elcontainer")
  })
    //Ex:2
    source.pipe(map(res => this.getData(res)),
      mergeAll()
    )

      .subscribe(res => {
        console.log(res);
        this.service.print(res, "elcontainer2")

      })
    //Ex:3
    source.pipe(
      mergeMap(res => this.getData(res))

    )
      .subscribe(res => {
        console.log(res);
        this.service.print(res, "elcontainer3")

      })
  }

}
