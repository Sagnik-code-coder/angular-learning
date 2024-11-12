import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-dir',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './structural-dir.component.html',
  styleUrl: './structural-dir.component.css'
})
export class StructuralDirComponent {
  isDiv1Visiable: boolean = true;
  isDiv2Visiable: boolean = true;
  num1: string = "";
  num2: string = "";
  isActive: boolean = true;
  selectedCountry: string = "";
  selectedStateList: string [] = ["Kolkata","Patna","Delhi","Jaypur"];
  hideDiv1()
  {
    this.isDiv1Visiable = false;
  }
  showDiv1()
  {
    this.isDiv1Visiable = true;
  }
  toogleDiv2()
  {
    this.isDiv2Visiable = ! this.isDiv2Visiable;
  }
}
