let dayKilometers = 4; // скільки км пробігає в день
let timeKilometers = prompt('скільки часу витрачаєш на один кілосметр' , '');

let timeDay = dayKilometers * timeKilometers; 
// скільки годин на тренування щодня

let result = timeDay * 7;
// скільки годин тренування в тиждень

console.log(result);
