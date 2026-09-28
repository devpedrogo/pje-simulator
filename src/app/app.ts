import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Processo } from './components/processo/processo';

@Component({
  imports: [RouterOutlet, Processo],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('pje-simulator');
}
