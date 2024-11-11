import { Component, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  name: string = "Saggy";
  age: number = 30;
  isIndian: boolean = true;
  currentDate: Date = new Date();
  inputtype = "checkbox"; 
  cssty: string = "sty";
  input = "test";

  sports = signal("Football");

  constructor()
  {
    

  }
  alertMessage(message: string)
  {
    alert(message);

  }
  changeName()
  {
    this.name = "Sagnik Mukherjee";
    
  }
  changeSports()
  {
    this.sports.set("Cricket");
  }
}
