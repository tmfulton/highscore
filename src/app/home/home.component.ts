import { Component, OnInit } from '@angular/core';
import { GameService } from '../shared/services/game.service';
import { Game } from '../shared/models/game.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  featuredGame$: Observable<Game>;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.featuredGame$ = this.gameService.getGame(1);
  }

}
