let count = 0;

// make document using function
function getInputValueById(id){
    return parseFloat(document.getElementById(id).value);
}

function showError(id){
    return document.getElementById(id).classList.remove('hidden');
}

// add event listiner for calculate button
const calculateButton = document.getElementById('calculate');
calculateButton.addEventListener('click', function(){
    count += 1;
    // const income = parseFloat(document.getElementById('income').value);
    // const software = parseFloat(document.getElementById('software').value);
    // const courses = parseFloat(document.getElementById('courses').value);
    // const internet = parseFloat(document.getElementById('internet').value);

    // using function

    const income = getInputValueById('income');
    const software = getInputValueById('software');
    const courses = getInputValueById('courses');
    const internet = getInputValueById('internet');


    if(income <= 0 || isNaN(income)){
        showError('income-error');
        return;
    }
    if(software <= 0 || isNaN(software)){
        showError('software-error');
        return;
    }
    if(courses <= 0 || isNaN(courses)){
        showError('courses-error');
        return;
    }
    if(internet <= 0 || isNaN(internet)){
        showError('internet-error');
        return;
    }

    
    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;

    if(totalExpenses > income){
        showError('logic-error');
        return;
    }

    const totalExpensesElement = document.getElementById('total-expenses');
    totalExpensesElement.innerText = totalExpenses.toFixed(2);

    const totalBalanceElement = document.getElementById('balance');
    totalBalanceElement.innerText = balance.toFixed(2);

    const results = document.getElementById('results');
    results.classList.remove('hidden');

    // Expense History
    // const historyList = document.getElementById('history-list');
    const historyItems = document.createElement('div');
    historyItems.className = 'bg-white p-3 rounded-md border-l-2 border-indigo-500';

    historyItems.innerHTML = `
        <p class="text-xs font-bold text-rose-500">Invoice:-${count}</p>
        <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
        <p class="text-xs font-bold">Income: ${income.toFixed(2)}</p>
        <p class="text-xs text-gray-500">Expenses: ${totalExpenses.toFixed(2)}</p>
        <p class="text-xs text-gray-500">Balance: ${balance.toFixed(2)}</p>
    `;
    const historyContainer = document.getElementById('history-list');
    historyContainer.insertBefore(historyItems, historyContainer.firstChild)
});

// add event listiner for saving button

const calculateSavingButton = document.getElementById('calculate-savings');
calculateSavingButton.addEventListener('click', function(){
    const savingsParcentage = parseFloat(document.getElementById('savings').value);
    
    if(savingsParcentage <= 0 || isNaN(savingsParcentage)){
        showError('savings-error');
        return;
    }

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

// history tab functionality

const historyTab = document.getElementById('history-tab');
const assistantTab = document.getElementById('assistant-tab');
historyTab.addEventListener('click', function(){
    historyTab.classList.add(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600",
    )
    historyTab.classList.remove('text-gray-600');
    assistantTab.classList.remove(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600",
    )
    assistantTab.classList.add('text-gray-600');
    document.getElementById('expense-form').classList.add('hidden');
    showError('history-section');
});

assistantTab.addEventListener('click', function(){
    assistantTab.classList.add(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600",
    )
    historyTab.classList.add('text-gray-600');
    historyTab.classList.remove(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600",
    )
    historyTab.classList.add('text-gray-600');
    document.getElementById('expense-form').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');
})

// input field validation

