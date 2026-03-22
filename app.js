// app.js

// State Management
let currentStep = 0;
const totalSteps = 8;
const formData = {};

// Function to show current step
function showStep(step) {
    const steps = document.getElementsByClassName('form-step');
    Array.from(steps).forEach((s, index) => {
        s.style.display = (index === step) ? 'block' : 'none';
    });
}

// Function to next step
function nextStep() {
    if (currentStep < totalSteps - 1) {
        currentStep++;
        showStep(currentStep);
        saveData();
    }
}

// Function to previous step
function previousStep() {
    if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
        saveData();
    }
}

// Form data persistence
function saveData() {
    const stepsData = document.querySelectorAll('.form-step');
    stepsData.forEach((step, index) => {
        if (index === currentStep) {
            const inputs = step.querySelectorAll('input, textarea');
            inputs.forEach(input => {
                formData[input.name] = input.value;
            });
        }
    });
}

// Form Validation
function validateStep() {
    const inputs = document.querySelectorAll('.form-step')[currentStep].querySelectorAll('input, textarea');
    let isValid = true;
    inputs.forEach(input => {
        if (!input.checkValidity()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    return isValid;
}

// Event listeners for next and prev buttons
document.getElementById('nextBtn').addEventListener('click', () => {
    if (validateStep()) {
        nextStep();
    }
});

document.getElementById('prevBtn').addEventListener('click', previousStep);

// Initiate form
showStep(currentStep);