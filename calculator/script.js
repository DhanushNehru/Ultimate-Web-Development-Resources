const buttons = document.querySelectorAll(".buttons > div");
const display = document.querySelector('.display');
let calc = '';

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === 'AC') {
            calc = '';
        } else if (value === 'DE') {
            calc = calc.slice(0, -1);
        } else if (value === '=') {
            try {
                calc = eval(calc);
            } catch (error) {
                calc = 'Error';
            }
        } else {
            calc += value;
        }

        display.innerHTML = calc;
    });
});
