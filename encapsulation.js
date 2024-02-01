class CalculateSalary {
    constructor(salaryArg) {
        this._salary = salaryArg;
        this._bonus = 1.5;
    }
    calculateWithBonus = () => {
        return this._salary * bonus;
    };
}

const calculateSalary = new CalculateSalary(100);

// console.log(calculateSalary.bonus)