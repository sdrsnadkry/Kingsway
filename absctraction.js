class CalculateSalary {
    constructor(salaryArg) {
        this.salary = salaryArg;
        const bonus = 1.5;

        this.calculateWithBonus = () => {
            return this.salary * bonus;
        };
    }

    //   getSalary() {
    //     return this.salary;
    //   }

    //   getSalaryWithBonus() {
    //     return this.salary * bonus;
    //   }
}

const calculateSalary = new CalculateSalary(500);

calculateSalary.bonus = 2

console.log(calculateSalary.calculateWithBonus());

// console.log(calculateSalary.salary);