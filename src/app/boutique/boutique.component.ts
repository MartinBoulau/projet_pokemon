import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { PokemonModel } from '../models/pokemon.model';
import { PokemonComponent } from '../pokemon/pokemon/pokemon.component';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css'],
})
export class BoutiqueComponent implements OnInit, AfterViewInit {
  constructor(private pokemons: PokemonComponent) {}

  @ViewChild(PokemonComponent) pokemon;

  open = false;
  @Input() boosters: Array<PokemonComponent> | undefined;
  ngOnInit() {}

  ngAfterViewInit() {
    this.boosters.push(this.pokemon.getPokemon());
  }
}
