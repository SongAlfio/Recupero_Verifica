import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponenteComponent } from './componente/componente.component';
import { FiglioComponent } from './figlio/figlio.component';
import { ContenutoComponent } from './contenuto/contenuto.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteComponent,
    FiglioComponent,
    ContenutoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
