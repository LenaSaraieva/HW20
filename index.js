/*Реалізувати рекурсивну функцію, яка зводить число в ступінь.Число, яке треба піднести до ступеню, передається як перший аргумент у функції;
Ступінь передається як другий аргумент у функціюpow (num, degree). */

function power(num, degree) {
    if (degree === 0) {
        return 1;

    } else if (degree === 1) {
        return num;

    } else if (degree < 0) {
        return 1 / power(num, -degree);
    }
}
