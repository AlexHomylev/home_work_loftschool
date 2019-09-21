/*
 ДЗ 7 - Создать редактор cookie с возможностью фильтрации

 7.1: На странице должна быть таблица со списком имеющихся cookie. Таблица должна иметь следующие столбцы:
   - имя
   - значение
   - удалить (при нажатии на кнопку, выбранная cookie удаляется из браузера и таблицы)

 7.2: На странице должна быть форма для добавления новой cookie. Форма должна содержать следующие поля:
   - имя
   - значение
   - добавить (при нажатии на кнопку, в браузер и таблицу добавляется новая cookie с указанным именем и значением)

 Если добавляется cookie с именем уже существующей cookie, то ее значение в браузере и таблице должно быть обновлено

 7.3: На странице должно быть текстовое поле для фильтрации cookie
 В таблице должны быть только те cookie, в имени или значении которых, хотя бы частично, есть введенное значение
 Если в поле фильтра пусто, то должны выводиться все доступные cookie
 Если добавляемая cookie не соответсвует фильтру, то она должна быть добавлена только в браузер, но не в таблицу
 Если добавляется cookie, с именем уже существующей cookie и ее новое значение не соответствует фильтру,
 то ее значение должно быть обновлено в браузере, а из таблицы cookie должна быть удалена

 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то добавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */

const homeworkContainer = document.querySelector("#homework-container");
// текстовое поле для фильтрации cookie
const filterNameInput = homeworkContainer.querySelector("#filter-name-input");
// текстовое поле с именем cookie
const addNameInput = homeworkContainer.querySelector("#add-name-input");
// текстовое поле со значением cookie
const addValueInput = homeworkContainer.querySelector("#add-value-input");
// кнопка "добавить cookie"
const addButton = homeworkContainer.querySelector("#add-button");
// таблица со списком cookie
const listTable = homeworkContainer.querySelector("#list-table tbody");

addTable();

let filterfunc = filterNameInput.addEventListener("keyup", function() {
  let filterName = filterNameInput.value;
  addTable(filterName);
});

addButton.addEventListener("click", () => {
  let cookieName = addNameInput.value;
  let cookieValue = addValueInput.value;

  document.cookie = `${cookieName}=${cookieValue}`;

  addTable();
});

function addTable(filterTread = '') {
  let cookies = document.cookie.split("; ").map(item => item.split("="));

  listTable.innerHTML = "";

  cookies.forEach(function(item) {

      if(item[0].toLowerCase().includes(filterTread.toLowerCase()) || item[1].toLowerCase().includes(filterTread.toLowerCase())){
    let tr = document.createElement("tr");
    tr.className = "alert";
    tr.innerHTML = `<th>${item[0]}</th><th>${
      item[1]
    }</th><th><button onclick="delete_cookie('${
      item[0]
    }')" >удалить</button></th>`;

    listTable.append(tr);
    };

  });
}

function delete_cookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
  addTable();
}

