import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuynowComponent } from './buynow/buynow.component';
import { BedComponent } from './bed/bed.component';
import { SkirtComponent } from './skirt/skirt.component';
import { DenimComponent } from './denim/denim.component';
import { BeachVibesComponent } from './beach-vibes/beach-vibes.component';
import { TraditionalWomenComponent } from './traditional-women/traditional-women.component';
import { TraditionalMenComponent } from './traditional-men/traditional-men.component';



const routes: Routes = [
  {path: '', component: BuynowComponent},
  {path: 'jeans', component: BedComponent},
  {path: 'skirt', component: SkirtComponent},
  {path: 'jacket', component: DenimComponent},
  {path: 'shirt', component: BeachVibesComponent},
  {path: 'women', component: TraditionalWomenComponent},
  {path: 'men', component: TraditionalMenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
