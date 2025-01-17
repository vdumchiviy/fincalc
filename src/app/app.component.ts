import { Component, Input } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { type InvestmentFormType } from './models/investment.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
})
export class AppComponent {
 investmentFormValues: InvestmentFormType ;
 constructor() {
    this.investmentFormValues = {initialInvestment: 0, annualInvestment: 0, expectedReturn: 0, duration: 0};
  }
 
 

  onGotValues(investmentFormValues: InvestmentFormType) {
    console.log("IN AppComponent(): ");
    console.log(investmentFormValues);
    this.investmentFormValues = investmentFormValues;
  }


}

