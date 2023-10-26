/* const result = [];

for (let i = 10; i <= 20; i++) {
   result.push(i);
  };

 alert(result) //1.Вивести на сторінку в один рядок через кому числа від 10 до 20.

*/

/*
const result = [];

for (let i = 10; i <= 20; i++) {
    result.push(i**2);
};

alert(result); //2.Вивести квадрати чисел від 10 до 20.

*/

/*
let i = 1;
while (i < 11) {
    alert(`7*${i}=${i*7}`);
    i++;
}

//3.Вивести таблицю множення на 7.
*/

/*
let i = 1;
let j = 1;

while (i < 15) {  
    i++;
    j = j+i;
}
alert (j);
//4.Знайти суму всіх цілих чисел від 1 до 15.
*/

/*

let i = 15;
let j = 0;

do {
    i++;
    j = j*i;
} while (i < 35)

alert(j);

//5.Знайти добуток усіх цілих чисел від 15 до 35.

*/

/*

let j = 0;

for (let i = 1; i <= 500; i++) {
    j = j+i;
}

alert(j/2);
 
//6.Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
*/

/*
let j = 0;

for (let i = 30; i <= 80; i++) {
    if (i%2 ==0)
        {j = j+i}
}

alert(j);

//7.Вивести суму лише парних чисел в діапазоні від 30 до 80.
*/

/*

const result = [];

for(let i = 100; i <= 200; i++) {
    if(i%3 == 0) {
        result.push(i)
    }
}

alert(result);

//8.Вивести всі числа в діапазоні від 100 до 200 кратні 3.

*/

/*

let number = prompt('Write a number, please');
let i = 1;
let result;

while (i <= number) {
    i++;
    result = number%i;
    if (result==0) {alert(i)}; 
}

*/

//9.Дано натуральне число. Знайти та вивести на сторінку всі його дільники.

/*
let number = prompt('Write a number, please');
let i = 1;
let result;

while (i <= number) {
    i++;
    result = number%i;
    if (result==0) {
        let j = i%2;
        if(j==0) {
            alert(i);
        }
    }; 
}

*/
//10.Визначити кількість його парних дільників.


/*
let number = prompt('Write a number, please');
let i = 1;
let result;
let summ = 0;

 do {
    i++;
    result = number%i;
    if (result==0) {
        let j = i%2;
        if(j==0) {
            summ = summ + i;
        }
    }; 
} while (i <= number)

alert(summ);
*/

//11.Знайти суму його парних дільників.

const multiplication = [];

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++){
        multiplication.push(`${i}*${j}=${i*j}`);
    }
}

alert(multiplication)


//12.Надрукувати повну таблицю множення від 1 до 10.






