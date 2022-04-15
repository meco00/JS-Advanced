function colorize() {
   let evenRecords=document.querySelectorAll('table tr:nth-child(2n)');

   for (const element of evenRecords) {
       element.style.backgroundColor='Teal';
   }
}