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
/* const teamDolphin = [99, 102, 87, 128];
const teamKolas = [101, 98, 89, 128];

const DAv = function (a, b, c, d) {
  return (a + b + c + d) / 4;
};
const ScoreDolphin = DAv(
  teamDolphin[0],
  teamDolphin[1],
  teamDolphin[2],
  teamDolphin[3]
);
const ScoreKolas = DAv(teamKolas[0], teamKolas[1], teamKolas[2], teamKolas[3]);

console.log(ScoreDolphin, ScoreKolas);

if (ScoreKolas > ScoreDolphin) {
  console.log(`Team kolas wins with avarage score ${ScoreKolas}`);
} else if (ScoreDolphin === ScoreKolas) {
  console.log(`match draw with avarage ${ScoreKolas} = ${ScoreDolphin}.`);
} else {
  console.log(`Team Dolphin wins with avarage score${ScoreDolphin}`);
}

// find highest value of an array

const calHigh = function (temps) {
  let max = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (temps[i] > max) max = temps[i];
  }
  console.log(max);
};
calHigh([13, 2, 15, 11, 16, 9]);

const temperature = [6, 7, 9, 2, -3, 11, -2, -6, 12, 17, 3];

// calculate temperature amplitide

const tempAmplitude = function (temp) {
  let max = temp[0];
  let min = temp[0];
  for (i = 0; i < temp.length; i++) {
    if (max < temp[i]) {
      max = temp[i];
    }
    if (min > temp[i]) {
      min = temp[i];
    }
  }
  document.write('max temp is' + ' ' + max, 'and min temp is' + ' ' + min);
};
tempAmplitude(temperature); */

const tempAmplitude = function (tem1, tem2) {
  const temps = tem1.concat(tem2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (i = 0; i < temps.length; i++) {
    if (temps[i] > max) {
      max = temps[i];
    }
    if (temps[i] < min) {
      min = temps[i];
    }
  }
  console.log(max, min);
  return max - min;
};
const TEST1 = [17, 21, 23];
const amplitude = tempAmplitude([32, 33, 39], [41, 38, 31]);
console.log(amplitude);

const printForcast = function (array) {
  let string = '';
  for (let i = 0; i < array.length; i++) {
    string = string + `${array[i]} celcious in day ${i + 1}... `;
  }
  console.log('...' + string);
};
printForcast(TEST1);
/* 
const kalvinMeasure = function () {
  const measurement = {
    type: 'temperature',
    Unit: 'celcius',
    value: Number(
      prompt('Put temperature in celcius to get kalvin unit temperature')
    ),
  };
  const kalvin = measurement.value + 273 + ' ' + 'kelvin';
  return kalvin;
};
console.log(kalvinMeasure()); */

/* const day = prompt('Enter a week day to know what i do that day.');

if (day == 'monday') {
  console.log('plan course structure');
  console.log('Go to Coading meetup');
} else if (day == 'tuesday') {
  console.log('Write script for videos.');
} else if (day == 'wednesday' || day == 'thursday') {
  console.log('Make videos on script and upload on my channel');
} else if (day == 'friday' || day == 'saturday') {
  console.log('enjoy my weekend');
} else {
  console.log('what you enter its not a valid day.');
}
 */

function frutuitprocessor(apples, mangoes) {
  console.log(apples, mangoes);
  const juice = `juice with ${apples} apples and ${mangoes} mangoes.`;
  return juice;
}

console.log(frutuitprocessor(3, 5));
