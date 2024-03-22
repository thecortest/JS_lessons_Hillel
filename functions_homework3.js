/*Task1
1. Задача: Конвертер валют
Завдання: Напишіть функцію convertCurrency, яка приймає суму в доларах США (USD) і код валюти, в яку потрібно конвертувати ('EUR', 'UAH', 'GBP'). 
Функція повинна повертати суму у вказаній валюті, використовуючи фіксовані курси валют (наприклад, 1 USD = 0.9 EUR, 1 USD = 35 UAH, 1 USD = 0.8 GBP). 
Якщо код валюти не підтримується, функція повинна повертати рядок з помилкою.
*/

//Solution

const EUR = 0.9;
const UAH = 35;
const GBP = 0.8;
const USD = 1;

function convertCurrency(amount,currencyCode) {
    //console.log(`my amount: ${amount}, my currencyCode: ${currencyCode}`)
    switch (currencyCode) {
        case 'EUR':
            return amount * EUR;
        case 'UAH':
            return amount * UAH;
        case 'GBP':
            return amount * GBP;
        case 'USD':
            return amount;
        default:
            return(`${currencyCode} currency code is not supported.`)         
    }
}

/*Task2
2. Задача: Визначення дня тижня
Завдання: Створіть функцію getDayOfWeek, яка приймає число від 1 до 7 і повертає назву дня тижня, де 1 - це понеділок, а 7 - неділя. 
Якщо введене число не відповідає жодному дню тижня, функція має повертати рядок з помилкою.
*/

//Solution


function getDayOfWeek (numberoftheday) {
    // console.log (numberoftheday)
    switch (numberoftheday){
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
        case 7:
            return 'Sunday';
        default:
            return 'Such day of the week doesnt exist.';

    }
}

/*This also seems to be working but difficult to read and bad practice.
Though it is practice so decided to leave it here for history.

function getDayOfWeek (numberoftheday) {
    //console.log (numberoftheday)
    if (numberoftheday === 1) {
        return'Monday'; 
    } else if (numberoftheday === 2) {
        return'Tuesday';
    } else if (numberoftheday === 3) {
        return'Wednesday';
    } else if (numberoftheday === 4) {
        return 'Thursday';
    } else if (numberoftheday === 5) {
        return'Friday';
    }else if (numberoftheday === 6) {
        return'Saturday';
    }else if (numberoftheday === 7) {
        return'Sunday';
    }else {
        return'Such day of the week does not exist.';
    }
}
*/



/*Task3
3.Задача: Знайти число Фібоначчі

Завдання: Напишіть функцію fibonacci, що приймає число n як аргумент і повертає n-те число з послідовності Фібоначчі. 
Послідовність починається з 0 (нульовий елемент) і 1 (перший елемент), а кожне наступне число є сумою двох попередніх чисел.

Приклади використання:

Для n = 0:
Вхід: fibonacci(0)
Вихід: 0
Опис: Нульовий елемент послідовності Фібоначчі — це 0.

Для n = 4:
Вхід: fibonacci(4)
Вихід: 3
Опис: Четвертий елемент послідовності Фібоначчі (0, 1, 1, 2, 3) — це 3 (1 + 2).
*/

//Solution

function fibonacci(n) {
    if (n === 0) {
      return 0;
      
    } else if (n === 1) {
      return 1;
      
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  
  console.log(fibonacci(0))
  console.log(fibonacci(4))
  console.log(fibonacci(5))

  /*
For better understanding why we get what we get.
fibonacci(0) = 0
fibonacci(1) = 1
fibonacci(2) = 1 (0 + 1)
fibonacci(3) = 2 (1 + 1)
fibonacci(4) = 3 (1 + 2)
fibonacci(5) = 5 (2 + 3)
fibonacci(6) = 8 (3 + 5)
fibonacci(7) = 13 (5 + 8)
fibonacci(8) = 21 (8 + 13)
fibonacci(9) = 34 (13 + 21)
  */

  

/*Task4
Додаткова задача. Вгадай число

Напишіть функцію guessNumber, яка приймає рядок від користувача через prompt() і порівнює його з випадково згенерованим числом від 1 до 10 (включно). 
Функція має виводити 'Вгадали!', якщо користувач вгадав число, або 'Спробуйте ще раз!', якщо ні. 
Враховуйте перетворення типів та умовні конструкції. 

Також треба додати наступні функціональні можливості:

Обмежена кількість спроб: Користувач має обмежену кількість спроб, наприклад, 3 спроби, щоб вгадати число. 
Використовувати рекурсію, а не цикли. 
Підказки: Якщо користувач вводить число, яке не співпадає з загаданим, але залишилися спроби, функція надає підказку: "занадто велике" або "занадто мале".
Валідація вводу: Переконайтеся, що користувач ввів дійсне число в потрібному діапазоні (від 1 до 10). 
Якщо введене значення недійсне, прохання ввести число знову не зараховуючи це як спробу.
*/

//Solution

function getRandomNumberInRange() {
    return Math.floor(Math.random() * (10 - 1 + 1) + 1);
}

let randomNumber = getRandomNumberInRange()
  console.log(randomNumber)

function guessNumber(attempts = 3){
    if (attempts > 0) {
        const promptValue = (prompt('Type your number to guess. Attempts left: ' + attempts))
    if (promptValue == null) return;
        const usersNumber = Number(promptValue);

    if (usersNumber === randomNumber) {
        alert('Вгадали!');
    } else if (isNaN(usersNumber)) {
        alert('Будь ласка введіть чисто від 1 до 10. Спробу не зараховано.'); 
        guessNumber(attempts);
    } else if (usersNumber < 1 || usersNumber > 10) {
        alert('Спробуйте ще раз! Число повинно бути від 1 до 10. Спробу не зараховано.'); 
        guessNumber(attempts);
    } else if (attempts - 1 > 0 && usersNumber > randomNumber) {
        alert('Спробуйте ще раз! Занадто велике.'); 
        guessNumber(attempts - 1);
    } else if (attempts - 1 > 0 && usersNumber < randomNumber) {
        alert('Спробуйте ще раз! Занадто мале.'); 
        guessNumber(attempts - 1);
    } else {
        alert('No more attempts left. The number was ' + randomNumber)
    }  
}    
}   
  guessNumber()
