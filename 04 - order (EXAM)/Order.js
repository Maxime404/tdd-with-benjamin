export class Order {
    constructor([...orders]) {
        this.prices = [];
        this.quantities = [];

        orders.forEach(order => {
            this.prices.push(order.price);
            this.quantities.push(order.quantity);
        });
    }

    totalQuantity() {
        let quantities = 0

        this.quantities.forEach(quantity => {
            quantities += quantity
        });

        return quantities;
    }

    productsCount() {
        return this.prices.length;
    }

    priceInCents() {
        let price = 0

        for (let i = 0; i < this.prices.length; i++) {
            price += this.prices[i] * this.quantities[i] * 100;
        }

        return price;
    }

    priceInEuros() {
        let price = 0

        for (let i = 0; i < this.prices.length; i++) {
            price += this.prices[i] * this.quantities[i];
        }

        return price.toFixed(2).replace('.', ',') + '€';
    }
}