import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type InvestmentFormType } from '../models/investment.model';
import { InvestmentService } from '../services/investment.service.js';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  // Output variables
  // @Output() investmentFormValues = new EventEmitter<InvestmentFormType>();

  // 2-way-binded variables
  initialInvestment: number = 1000;
  annualInvestment: number = 200;
  expectedReturn: number = 5;
  duration: number = 10;

  constructor(private investmentService: InvestmentService) {}

  onSubmit() {
    let investmentFormValue: InvestmentFormType = {
      initialInvestment: this.initialInvestment,
      annualInvestment: this.annualInvestment,
      expectedReturn: this.expectedReturn,
      duration: this.duration
    };
    console.log(investmentFormValue);
    this.investmentService.calculateInvestmentResults(investmentFormValue)
  }
}
