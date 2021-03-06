import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmployeeDashbordComponent } from './employee-dashbord/employee-dashbord.component';
import { MapComponent } from './map/map.component';
import { MergemapComponent } from './mergemap/mergemap.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: "employeedashbord", component: EmployeeDashbordComponent },
  { path: "map", component: MapComponent },
  { path: "mergemap", component: MergemapComponent },
  { path: "emplist", component: EmpListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
