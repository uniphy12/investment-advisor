// app.js

// Function to handle financial input form
function handleFormSubmission() {
    // Logic for capturing user input from form
}

// Function to create financial scenarios
function createScenario(data) {
    // Logic to create and compare scenarios
}

// Sliders for yield rate (8-15%) and annuity insurance (100,000-1,500,000 won)
let yieldRateSlider = document.getElementById('yieldRate');
let annuityInsuranceSlider = document.getElementById('annuityInsurance');

// Simulate 5-year roadmap
function simulateFiveYearRoadmap(initialInvestment, yieldRate, annuityInsurance) {
    const years = 5;
    let results = [];
    for (let i = 1; i <= years; i++) {
        const compoundInterest = initialInvestment * Math.pow((1 + yieldRate / 100), i);
        results.push({
            year: i,
            value: compoundInterest
        });
    }
    return results;
}

// Calculate tax benefits for IRP and pension savings
function calculateTaxBenefits(investment) {
    const irpTaxCredit = 0.12; // assume 12% tax credit for IRP
    const pensionTaxCredit = 0.15; // assume 15% tax credit for pensions
    let irpBenefits = investment * irpTaxCredit;
    let pensionBenefits = investment * pensionTaxCredit;
    return { irpBenefits, pensionBenefits };
}

// Track ISA limits
let isaLimit = 5000000; // example limit
function checkISALimit(investment) {
    return investment <= isaLimit;
}

// Generate PDF proposal using jsPDF
function generatePDF(results) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.text('Investment Proposal', 20, 20);
    // Logic to fill in the content from 'results'
    doc.save('proposal.pdf');
}

// Form submission listener
document.getElementById('financialForm').addEventListener('submit', handleFormSubmission);