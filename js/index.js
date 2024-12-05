// add event listiner for calculate button
const calculateButton = document.getElementById('calculate');
calculateButton.addEventListener('click', function(){
    const income = parseFloat(document.getElementById('income').value);
    const software = parseFloat(document.getElementById('software').value);
    const courses = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('internet').value);
    
    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;

    const totalExpensesElement = document.getElementById('total-expenses');
    totalExpensesElement.innerText = totalExpenses.toFixed(2);

    const totalBalanceElement = document.getElementById('balance');
    totalBalanceElement.innerText = balance.toFixed(2);

    const results = document.getElementById('results');
    results.classList.remove('hidden');
});

// add event listiner for saving button

const calculateSavingButton = document.getElementById('calculate-savings');
calculateSavingButton.addEventListener('click', function(){
    const savingsParcentage = parseFloat(document.getElementById('savings').value);

    const income = parseFloat(document.getElementById('income').value);
    const software = parseFloat(document.getElementById('software').value);
    const courses = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('internet').value);
    
    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;

    const savingAmount = (savingsParcentage * balance) / 100;

    const savingAmountElement = document.getElementById('savings-amount');
    savingAmountElement.innerText = savingAmount.toFixed(2);

    // remaining balance


    const remainingBalanceElement = document.getElementById('remaining-balance');
    const remainingBalance = balance - savingAmount;

    remainingBalanceElement.innerText = remainingBalance.toFixed(2);

});