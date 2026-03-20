import { Component, signal } from '@angular/core';
import { CurrencyConverterPipe } from './pipe/currency-converter-pipe';

@Component({
  selector: 'app-root',
  imports: [CurrencyConverterPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  amount = 10;
}
