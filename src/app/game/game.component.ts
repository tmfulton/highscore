import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Game } from '../shared/models/game.model';
import { GameService } from '../shared/services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private service: GameService
  ) { }

   game$: Observable<Game>;
   

  ngOnInit(): void {
    this.game$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getGame(params.get('id')))
    );
  }

}
