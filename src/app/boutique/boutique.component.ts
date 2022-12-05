import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ApiService } from '../api.service';
import { PokemonModel } from '../models/pokemon.model';
import { PokemonComponent } from '../pokemon/pokemon/pokemon.component';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css'],
})
export class BoutiqueComponent {
  pokemons: PokemonModel[] = [];

  min: number = 1;
  max: number = 200;
  random = Math.floor(Math.random() * (this.max - this.min)) + this.min;

  constructor(private pokemonService: ApiService) {}

  getPokemon(i: number) {
    while (i < 10) {
      this.pokemonService.get(this.random).subscribe((data) => {
        console.log(data);
        let pokemon = {
          name: data['name'],
          poke_id: data['poke_id'],
          stats: data['stats'],
          image: data['image'],
          type: data['type'],
        };
        this.pokemons.push(pokemon);
      });
      i++;
    }
  }

  // getPokemonImageUrl(): string {
  // return `https://raw.githubusercontent.com/PokeAPI///sprites/master/sprites/pokemon/${this.pokemon.poke_id}.//png `;
  // }
}
