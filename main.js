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