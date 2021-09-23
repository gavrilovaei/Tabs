(function() {
    
const tabs = document.querySelectorAll(".tab-head__item");
const contents = document.querySelectorAll(".tab-content__item");

tabs.forEach((tab, index) => {
    // tab.onclick = myFunc(index); -такой синтаксис здесь использовать нельзя, т.к. из-за круглых скобок ф-ция сразу вызовется один раз. Но индекс передадать нужно, т.к. за счет этого и будет происходить обработка, поэтому нужна еще одна функция:
    tab.onclick = () => {
        changeTab(index);
        // при переборе массива на каждый его элемент будет навешиваться обработчик и если по элементу произойдет клик только в этом случае вызовется функция changeTab(смена Таба) в которую будет передан index элемента
    };
});

// Функция changeTab(index) убирает активный класс со всех элементов tab в tab-head и добаляет активный класс одному конкретному по переданному индексу и тоже самое делает с tab-content:
// function changeTab(index) {
//     for(let tab of tabs) {
//        tab.classList.remove("active");
//     }
//     tabs[index].classList.add("active");

//     for(let el of contents) {
//         el.classList.remove("active");
//     }
//     contents[index].classList.add("active");
// }

// Ф-ция совершает одинаковые действия для 2-х массивов, следовательно ее можно оптимизировать: Написать общую функцию и вызвать ее 2 раза внутри функции  changeTab в первый раз передав ей в аргументы данные первого массива, а во второй второго:
function changeTab(index) {
   setActiveClass(tabs, index);
   setActiveClass(contents, index);
}

function setActiveClass(arr, index) {
    for(let el of arr) {
        el.classList.remove("active");
    }
    arr[index].classList.add("active");
}

} ());

// Чтобы нельзя было получить данные кода js из консоли браузера и нельзя было вмешаться в работу сайта из вне используют модули
// (function() {
//     код JS;
// } ());
// что означает - возьми эту функцию и тут же ее вызови