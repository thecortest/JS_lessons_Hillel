/*Task1 :Класифікація оцінок (вирішується за допомогою if-else)
Завдання: У вас є оцінка від 1 до 100. 
Напишіть блок коду, який класифікує оцінку: "відмінно" для оцінок від 90 до 100, "добре" для оцінок від 70 до 89, 
"задовільно" для оцінок від 50 до 69, та "незадовільно" для оцінок менше 50.
*/

//Solution

const grade = 4;

if (grade >= 90 && grade <= 100) {
    console.log("відмінно");
} else if (grade >= 70 && grade <= 89) {
    console.log("добре");
} else if (grade >= 50 && grade <= 69) {
    console.log("задовільно");
} else if (grade > 0 && grade <= 50) {
    console.log("незадовільно");
}

/* It looks like it can also be done like this but now sure which varian will be accurate.
if (grade >= 90) {
    console.log("відмінно");
} else if (grade >= 70 && grade <= 89) {
    console.log("добре");
} else if (grade >= 50 && grade <= 69) {
    console.log("задовільно");
} else {
    console.log("незадовільно");
}
*/


/*Task2: Вибір дії (вирішується за допомогою switch-case)
Завдання: У вас є рядок з дією ("додати", "відняти", "помножити", "поділити") і два числа. 
Напишіть блок коду, який виконує обрану дію з цими числами та виводить результат.
*/

//Solution

const a = 10;
const b = 5;
const action = "додати"; //"додати", "відняти", "помножити", "поділити"


switch (action) {
    case "додати":
      console.log(a + b);
      break;
    case "відняти":
      console.log(a - b);
      break;
    case "помножити":
      console.log(a * b);
      break;
    case "поділити":
      console.log(a / b);
      break;
    default:
        console.log(`${action}. is not supported action. Supported actions are додати, відняти, помножити, поділити`);
}


/*Task3: Перевірка на парність (вирішується за допомогою тернарного оператора)
Завдання: У вас є число. Використовуйте тернарний оператор для перевірки числа на парність. 
Виведіть "парне", якщо число парне, і "непарне" в іншому випадку.
*/

//Solution

const x = 10;

x % 2 ? console.log("непарне") : console.log("парне");
console.log(x % 2);