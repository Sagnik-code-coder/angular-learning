import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AddEmpComponent } from './Component/add-emp/add-emp.component';
import { EmpListComponent } from './Component/emp-list/emp-list.component';
import { StructuralDirComponent } from './Component/Directives/structural-dir/structural-dir.component';

export const routes: Routes = [
  {
  path:'add-emp',
  component: AddEmpComponent
  },
    {
    path:'emp-list',
    component: EmpListComponent
    },
    {
      path:'structural-dir',
      component: StructuralDirComponent
    }
];
