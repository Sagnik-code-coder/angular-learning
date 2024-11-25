import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-learn',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-learn.component.html',
  styleUrl: './form-learn.component.css'
})
export class FormLearnComponent {
employee: any= {
  name: "",
  age:"",
  state:"",
  city: ""

}
}
