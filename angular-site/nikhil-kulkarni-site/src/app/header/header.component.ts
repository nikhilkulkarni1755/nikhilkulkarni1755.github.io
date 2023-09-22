import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  // url:string = 'http://localhost:4000/ip'
  url:string = 'https://angular-node-project-398119.uc.r.appspot.com/ip'

  // posts:any

  location:any

  constructor(private http: HttpClient) {
    this.http.get(this.url, {responseType: 'text'}).subscribe((res) => {
      this.location = res
    })
    // this.location = parsed['city']

  }
}

