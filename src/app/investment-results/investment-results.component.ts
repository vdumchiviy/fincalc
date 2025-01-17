import { Component, Input, input, computed } from '@angular/core';
import { InvestmentFormType, InvestmentType } from '../models/investment';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  // @Input({required: true}) formValues!: InvestmentFormType;

  formValues = input.required<InvestmentFormType>();
  investmentResults = computed(()=> this.calculateInvestmentResults());




  calculateInvestmentResults() {
    const annualData: InvestmentType[] = [];
    let investmentValue = this.formValues().initialInvestment;
    
  
    for (let i = 0; i < this.formValues().duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (this.formValues().expectedReturn / 100);
      investmentValue += interestEarnedInYear + this.formValues().annualInvestment;
      const totalInterest =
        investmentValue - this.formValues().annualInvestment * year - this.formValues().initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: this.formValues().annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: this.formValues().initialInvestment + this.formValues().annualInvestment * year,
      });
    }
  
    return annualData;
  }
  

}
