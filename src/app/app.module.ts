import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChessboardComponent } from './components/chessboard/chessboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NgxChessBoardModule } from 'ngx-chess-board';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ChessboardComponent,
    SidebarComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChessBoardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
