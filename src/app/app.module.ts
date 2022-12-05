import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { PokemonComponent } from './pokemon/pokemon/pokemon.component';
import { ApiService } from './api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DeckComponent } from './deck/deck.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import {
  PreloadAllModules,
  PreloadingStrategy,
  RouterModule,
} from '@angular/router';
import { ROUTES } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules }),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    PokemonComponent,
    HomeComponent,
    NavbarComponent,
    DeckComponent,
    BoutiqueComponent,
  ],
  providers: [ApiService, HttpClient, PokemonComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
