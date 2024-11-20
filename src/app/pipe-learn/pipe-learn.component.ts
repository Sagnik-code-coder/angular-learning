import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NaPipe } from '../Pipe/na.pipe';

@Component({
  selector: 'app-pipe-learn',
  standalone: true,
  imports: [CommonModule,NaPipe],
  templateUrl: './pipe-learn.component.html',
  styleUrl: './pipe-learn.component.css'
})
export class PipeLearnComponent {
  name: string = "Tukai";
  student: any =
  {
    City: "",
    age: 25,

  };
}
