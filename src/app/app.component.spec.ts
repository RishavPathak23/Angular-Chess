import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ChessboardComponent } from './components/chessboard/chessboard.component';

describe('AppComponent', () => {

  let component : AppComponent;
  let fixture : ComponentFixture<AppComponent>;

  beforeEach(() =>{ TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent]
  });
  fixture = TestBed.createComponent(AppComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'chess'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('chess');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('chess app is running!');
  });
});
