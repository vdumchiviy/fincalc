import { Injectable } from "@angular/core";
import type { InvestmentFormType, InvestmentType } from "../models/investment.model";

@Injectable({providedIn: 'root'})
export class InvestmentService{
    resultData: InvestmentType[] = [];

    public calculateInvestmentResults(data: InvestmentFormType) {
        const { initialInvestment, annualInvestment, expectedReturn, duration } = data;
        
        const annualData: InvestmentType[] = [];
        let investmentValue = initialInvestment;
        
      
        for (let i = 0; i < duration; i++) {
          const year = i + 1;
          const interestEarnedInYear = investmentValue * (expectedReturn / 100);
          investmentValue += interestEarnedInYear + annualInvestment;
          const totalInterest =
            investmentValue - annualInvestment * year - initialInvestment;
          annualData.push({
            year: year,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment: annualInvestment,
            totalInterest: totalInterest,
            totalAmountInvested: initialInvestment + annualInvestment * year,
          });
        }
      
        this.resultData = annualData
      }
      

}