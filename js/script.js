/*Создание двумерного массива и заполнение его undefined элементами*/
let arrChest = [];
for (let i = 0; i <= 7; i++) {

  for (let j = 0; j <= 7; j++) {
    arrChest[i] = Array(8).fill();
  }

}
/*Заполнение двумерного массива номерами шахматных клеток A1, A2 и т.д*/		
for (let i = 0; i <= 7; i++) {
  let k = 0;

  for (let j = 65; j <= 72; j++) {
    arrChest[i][k] = String.fromCharCode(j) + (i + 1);
    k++;
  }

}
/*создание объекта и запись номеров клеток шахматной доски в объект с полями согласно индексов двумерного массива arrChest*/		
var chest = {};
  for (let i = 0; i <= 7; i++) {

    for (let j = 0; j <= 7; j++) {
      chest[i + String(j)] = arrChest[i][j];
    }

  }
/*функция обработки события клик мыши по кнопке OK*/
button.onclick = function() {
  let inputValueNod = document.querySelector('#inputValue');
  let inputValue = inputValueNod.value.toUpperCase();

  if (inputValue === '') {
    alert('Введите правильные данные');
  } else {
      var chooseCell = [];

      for (let i = 0; i <= 7; i++) {
      /*запись вариантов ходов коня (в представлении доски как двумерного массива) без учета края шахматной площадки в одномерный массив*/
      	let secondIndexHorseMove = arrChest[i].indexOf(inputValue);
        if (secondIndexHorseMove !== -1) {
          chooseCell.push( String(i + 2) + (secondIndexHorseMove - 1) );
          chooseCell.push( String(i + 2) + (secondIndexHorseMove + 1) );
          chooseCell.push( String(i + 1) + (secondIndexHorseMove - 2) );
          chooseCell.push( String(i + 1) + (secondIndexHorseMove + 2) );
          chooseCell.push( String(i - 2) + (secondIndexHorseMove - 1) );
          chooseCell.push( String(i - 1) + (secondIndexHorseMove - 2) );
          chooseCell.push( String(i - 2) + (secondIndexHorseMove + 1) );
          chooseCell.push( String(i - 1) + (secondIndexHorseMove + 2) );
	    }

	  }
    }
			
  let resultStr = '';
  /*формирование строки итогового результата*/
  for (let i = 0; i <= 7; i++) {

    if (chest[chooseCell[i]] !== undefined) {
      resultStr += `${chest[chooseCell[i]]} `;
    }

  }
			
  if (resultStr === '') {
    alert('Введите правильные данные');
  } else {
      document.querySelector('#result').innerHTML = resultStr;
      document.querySelector("#result-form").style.display = 'block';
    }

} 
/*очистка и скрытие по клику на кнопку OK формы вывода результата*/
buttonOK.onclick = function() {
  document.querySelector('#result').innerHTML = '';
  document.querySelector('#result-form').style.display = 'none';
}		
