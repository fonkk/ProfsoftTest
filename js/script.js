
//Задание 1
let task1_select = document.querySelector("#task1_select");

//Функция оповещающая пользователя какой тип данных был передан в функцию
function showType(param) {
    alert("Тип данных переданного значения - " + typeof param);
}

//Обработчик для кнопки, которая демонстрирует работу функции showType() 
document.querySelector("#task1_button").addEventListener('click',()=>{
    switch(task1_select.value) {
        case 'Number':  
          showType(123);
          break
      
        case 'String':  
          showType("String");
          break
      
        case 'Symbol':  
          showType(Symbol('a'));
          break

        case 'BigInt':  
          showType(123n);
          break

        case 'Boolean':  
          showType(true);
          break

        case 'Undefined':  
          showType(undefined);
          break
    
        case 'Null':  
          showType(null);
          break
        
        case 'Object':  
          showType(task1_select);
          break

        case 'Function':  
          showType(showType);
          break

        default:
          alert("Произошла ошибка")
          break
      }
})

//Задание 2

let array = [11, 5, 19, 0, 7, 88, 1, 3, 6, 8, 6, 0];


//Функция для смены 2ух переменных местами
function swap(arr, firstIndex, secondIndex) {
    var temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
}


//Функция для разделения массива на 2 части с помощью опорно элемента, который находится между левым и правым указателями, и с помощью функции swap меняет местами элементы, 
//которые окажутся меньше и больше опорного элемента, на левом и правом указателях соответственно, пока указатели не встретятся.
function partition(arr, left, right) {
    var pivot = arr[Math.floor((right + left) / 2)];
    var i  = left;
    var j = right;
    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }
    return i;
}
//Функция для рекурсивного вызова partition()
function quickSort(arr, left, right) {
    var index;
    if (arr.length > 1) {
        left = typeof left != "number" ? 0 : left;
        right = typeof right != "number" ? arr.length - 1 : right;
        index = partition(arr, left, right);
        if (left < index - 1) {
            quickSort(arr, left, index - 1);
        }
        if (index < right) {
            quickSort(arr, index, right);
        }
    }
    return arr;
}
document.querySelector("#task2_button_1").addEventListener('click', ()=>{
    alert(quickSort(array));
})


//Функция partition, но для сортировки от большего к меньшему
function partitionReverse(arr, left, right) {
    var pivot = arr[Math.floor((right + left) / 2)];
    var i  = left;
    var j = right;
    while (i <= j) {
        while (arr[i] > pivot) {
            i++;
        }
        while (arr[j] < pivot) {
            j--;
        }
        if (i <= j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }
    return i;
}
//Функция quickSort, но для сортировки от большего к меньшему
function quickSortReverse(arr, left, right) {
    var index;
    if (arr.length > 1) {
        left = typeof left != "number" ? 0 : left;
        right = typeof right != "number" ? arr.length - 1 : right;
        index = partitionReverse(arr, left, right);
        if (left < index - 1) {
            quickSortReverse(arr, left, index - 1);
        }
        if (index < right) {
            quickSortReverse(arr, index, right);
        }
    }
    return arr;
}
document.querySelector("#task2_button_2").addEventListener('click', ()=>{
    alert(quickSortReverse(array));
})


//Функция quickSort, но для сортировки с удалением повторяющихся элементов
function quickSortWithDelete(arr) {
    arr_without_repetitions = [];
    arr.forEach(element => {
        if (!arr_without_repetitions.includes(element)) arr_without_repetitions.push(element);
    });
    return quickSort(arr_without_repetitions);
}
document.querySelector("#task2_button_3").addEventListener('click', ()=>{
    alert(quickSortWithDelete(array));
})


//Функция quickSortReverse, но для сортировки с удалением повторяющихся элементов
function quickSortWithDeleteReverse(arr) {
    arr_without_repetitions = [];
    arr.forEach(element => {
        if (!arr_without_repetitions.includes(element)) arr_without_repetitions.push(element);
    });
    return quickSortReverse(arr_without_repetitions);
}
document.querySelector("#task2_button_4").addEventListener('click', ()=>{
    alert(quickSortWithDeleteReverse(array));
})


//Функция для нахождения наименьшего элемента в массиве
function find_min_element(arr) {
    var min = arr[0];
    arr.forEach(element => {
        if (element<min && typeof(element) == "number") min = element;
    });
    alert(min);
}
document.querySelector("#task2_button_5").addEventListener('click', ()=>{
    find_min_element(array);
})


//Функция для нахождения наибольшего элемента в массиве
function find_max_element(arr) {
    var max = arr[0];
    arr.forEach(element => {
        if (element>max && typeof(element) == "number") max = element;
    });
    alert(max);
}
document.querySelector("#task2_button_6").addEventListener('click', ()=>{
    find_max_element(array);
})


//Задание 3

let objArr = [{name: "overflow", value: "hidden"}, {name: "cursor", value: "pointer"}];

function arrToObj(arr) {
    return arr.reduce((acc, i) => (acc[i.name] = i.value, acc), {})
}
document.querySelector("#task3_button").addEventListener('click', ()=>{
    console.log(arrToObj(objArr));
})
