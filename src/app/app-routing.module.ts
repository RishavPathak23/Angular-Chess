import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChessboardComponent } from './components/chessboard/chessboard.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: "chessboard", component: ChessboardComponent
  },
  {
    path: "", component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
