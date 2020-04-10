export class Person {
    constructor(first_name, last_name, age, cash) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
        this.cash = cash;
    }

    helloFullName() {
        return `Hello ${this.first_name} ${this.last_name}`;
    }

    canDrink() {
        return this.age >= 18;
    }

    canBuy(amount) {
        return this.cash >= amount;
    }

    buy(amount) {
        if (this.canBuy(amount)) return this.cash -= amount;

        throw (`You can't buy this! You are ${amount - this.cash}€ short!`);
    }
}