import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxChessBoardComponent, NgxChessBoardService } from 'ngx-chess-board';
import { NgxChessBoardView } from 'ngx-chess-board';

@Component({
  selector: 'app-chessboard',
  templateUrl: './chessboard.component.html',
  styleUrls: ['./chessboard.component.scss']
})

export class ChessboardComponent implements OnInit {

  darkTileColor = "#779556";
  lightTileColor = "#ebecd0";
  engine: any

  @ViewChild('chessBoard') chessBoard!: NgxChessBoardView;

  constructor(private ngxChessBoardService: NgxChessBoardService){
    // const game = new Game()
  }
  ngOnInit() {
    
  }
  onPieceMove(event: any) {
    if (event.x == true) {
      this.onCaptureAudio()
    }
    else if(event.x == false)  {
      this.onMoveAudio()
    }
  }
  onMoveAudio() {
    let audio = new Audio();
    audio.src  = "../../assets/move-self.mp3"
    audio.load()
    audio.play()
  }
  onCaptureAudio() {
    let audio = new Audio();
    audio.src  = "../../assets/capture.mp3"
    audio.load()
    audio.play()
  }

}


