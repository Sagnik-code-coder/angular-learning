import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
//import { AddEmpComponent } from './Component/add-emp/add-emp.component';
//import { EmpListComponent } from './Component/emp-list/emp-list.component';
//import { DataBindingComponent } from './Component/data-binding/data-binding.component';
//import { StructuralDirComponent } from './Component/Directives/structural-dir/structural-dir.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink],//AddEmpComponent,EmpListComponent,DataBindingComponent,StructuralDirComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-learning';
}
