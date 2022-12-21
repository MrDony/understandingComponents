import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'understandingComponents';
  count: number=0;
  counter(task:string)
  {
    if(task==='-')
      this.count--;
    else
      this.count++;
  }
  ngOnInit()
  {
    console.log(this.title);

  }
}