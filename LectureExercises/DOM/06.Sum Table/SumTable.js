function sumTable() {

    let numbers=Array.from(document.querySelectorAll('tr td:nth-child(2n)'));

    numbers.pop();

    let sum=0;

    for (const number of numbers) {
        sum+=Number(number.textContent);
        
    }

    document.querySelector('#sum').textContent=sum;



}