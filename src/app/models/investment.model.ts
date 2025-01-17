export type InvestmentType = {
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number
};

export type InvestmentFormType = {
    initialInvestment: number,
    annualInvestment: number,
    expectedReturn: number,
    duration: number
};