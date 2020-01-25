import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuynowComponent } from './buynow/buynow.component';
import { BedComponent } from './bed/bed.component';
import { SkirtComponent } from './skirt/skirt.component';
import { DenimComponent } from './denim/denim.component';
import { BeachVibesComponent } from './beach-vibes/beach-vibes.component';
import { TraditionalWomenComponent } from './traditional-women/traditional-women.component';
import { TraditionalMenComponent } from './traditional-men/traditional-men.component';

@NgModule({
  declarations: [
    AppComponent,
    BuynowComponent,
    BedComponent,
    SkirtComponent,
    DenimComponent,
    BeachVibesComponent,
    TraditionalWomenComponent,
    TraditionalMenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
