/* let i = 1;
while (i >= -50 && i <= 50) {
    console.log(`while loop replication in odd ${i}`);
    i += 2;
}

let dice = Math.trunc(Math.random() * 6) + 1; */


const calTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;
};

const bills = [22, 295, 176, 400, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];
for (i = 0; i < bills.length; i++) {
    const tip = calTip(bills[i]);
    tips.push(tip);
    total.push(tip + bills[i]);
};
console.log(bills);
console.log(tips);
console.log(total);


const calavarage = function (array) {
    let sum = 0;
    for (i = 0; i < array.length; i++) {
        sum += array[i];
    }
    // console.log(sum);
    return sum / array.length;
}
console.log(calavarage([3, 4, 5]));
console.log(calavarage(total));
console.log(calavarage(tips));


const main = function (invest) {
    return invest * .056;
}
const ammount = [80000];
const profit = [];
const totals = [];
for (i = 0; i < ammount.length; i++) {
    const tip = main(ammount[i]);
    profit.push(tip);
    totals.push(tip + ammount[i]);
}
console.log(ammount, profit, totals);


let sum = Math.trunc(Math.random() * 6) + 1;
i = 0;
while (i <= 19) {
    console.log(`repliacation ${i}`);

}
sum = Math.trunc(Math.random() * 6) + 1;