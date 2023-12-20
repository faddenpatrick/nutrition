let profileName = localStorage.getItem('profileName') || '';
let goalCalories = parseFloat(localStorage.getItem('goalCalories')) || 0;
let goalProtein = parseFloat(localStorage.getItem('goalProtein')) || 0;
let goalCarbs = parseFloat(localStorage.getItem('goalCarbs')) || 0;
let goalFats = parseFloat(localStorage.getItem('goalFats')) || 0;

// Functions for setting profile name, goals, clearing log, etc.
// (These functions are the same as before, I omitted them for brevity)

window.onload = function() {
    if (profileName) {
        document.getElementById('profile-name').value = profileName;
    }
    document.getElementById('goal-calories').value = goalCalories;
    document.getElementById('goal-protein').value = goalProtein;
    document.getElementById('goal-carbs').value = goalCarbs;
    document.getElementById('goal-fats').value = goalFats;

    // Load food log from localStorage and update totals
    const foodLog = JSON.parse(localStorage.getItem('foodLog')) || [];
    foodLog.forEach(addToFoodLog);
    updateTotals(foodLog);
}
