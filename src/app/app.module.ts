import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// Graficos
import { ChartsModule } from 'ng2-charts';
import { LineaComponent } from './components/linea/linea.component';

//Servicios
import { LineaService } from './components/linea/linea.service';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LineaComponent
  ],

  imports: [
    BrowserModule,
    ChartsModule,
    FormsModule
  ],

  providers: [
    LineaService
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
