import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../services/investment.service.js';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  // @Input({required: true}) formValues!: InvestmentFormType;
  constructor(private investmentService: InvestmentService) {} 

  get investmentResults() {
    return this.investmentService.resultData;
  }
}
