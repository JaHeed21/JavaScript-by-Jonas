/* let i = 1;
while (i >= -50 && i <= 50) {
    console.log(`while loop replication in odd ${i}`);
    i += 2;
}

let dice = Math.trunc(Math.random() * 6) + 1; */

/* 
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

 */
/* 
let i = Math.trunc(Math.random() * 50) + 1;
while (i !== 50) {
    document.write(`Random Number between 1-50 = ${i}`);
    console.log(`Random Number between 1-50 = ${i}`);
    i = Math.trunc(Math.random() * 50) + 1;
    if (i === 50) {
        console.log(`Congrates! You got ${i} as random number.`)
    }
};
 */
const teamDolphin = [99, 102, 87, 128];
const teamKolas = [101, 98, 89, 128];


const DAv = function (a, b, c, d) {
    return (a + b + c + d) / 4;
};
const ScoreDolphin = DAv(teamDolphin[0], teamDolphin[1], teamDolphin[2], teamDolphin[3]);
const ScoreKolas = DAv(teamKolas[0], teamKolas[1], teamKolas[2], teamKolas[3], );

console.log(ScoreDolphin, ScoreKolas);

if (ScoreKolas > ScoreDolphin) {
    console.log(`Team kolas wins with avarage score ${ScoreKolas}`)
} else if (ScoreDolphin === ScoreKolas) {
    console.log(`match draw with avarage ${ScoreKolas} = ${ScoreDolphin}.`)
} else {
    console.log(`Team Dolphin wins with avarage score${ScoreDolphin}`)

}