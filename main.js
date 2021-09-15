let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
    console.log(`you rolled ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
}
if (dice === 6) {
    console.log('you dice 6 .now the loop is end');
}