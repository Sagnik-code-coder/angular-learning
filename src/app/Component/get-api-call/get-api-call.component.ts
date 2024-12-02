import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { GetServiceService } from '../../Service/get-service.service';

@Component({
  selector: 'app-get-api-call',
  standalone: true,
  imports: [],
  templateUrl: './get-api-call.component.html',
  styleUrl: './get-api-call.component.css'
})
export class GetApiCallComponent {
http = inject(HttpClient);
constructor(private getServ: GetServiceService) { }
/*
getUser()
{
  
  this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe((res:any) =>
  {
    console.log(res);
  })
}
*/
getUser()
{
  this.getServ.getUser1().subscribe((res:any) =>
  {
    console.log(res);
  })
}
}
