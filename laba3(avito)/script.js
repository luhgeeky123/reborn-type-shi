// Находим кнопку по её уникальному ID
const knopka = document.getElementById('knopka');

// Код сработает только тогда, когда пользователь кликнет на кнопку
knopka.onclick = function() {
    
    // Получаем цифры из полей формы и переводим их в числовой формат через Number()
    const tarif = Number(document.getElementById('tarif').value);
    const nachalo = Number(document.getElementById('nachalo').value);
    const konec = Number(document.getElementById('konec').value);

    // Считаем расход шмоток (начала - конец)
    const rashod = nachalo - konec;

    // Защита от дурака)))): если конечный остаток больше, чем было в начале
    if (rashod < 0) {
        alert("Ошибка: Конечный показатель не может быть больше начального!");
        return; 
    }

    // Считаем итоговую сумму
    const summa = rashod * tarif;
    
    // Находим блок, куда нужно вывести результат
    const resultDiv = document.getElementById('result');
    
    // Записываем внутрь текст с результатами
    resultDiv.innerHTML = `
        <b>Расход товара:</b> ${rashod} шт.<br>
        <b>Сумма к платежу:</b> ${summa} ₽
    `;

    // Сбрасываем видимость для перезапуска анимации при повторном клике
    resultDiv.style.display = "none";
    
    // Делаем микропаузу в 10 миллисекунд и показываем блок.
    // Браузер видит это как новое появление и запускает CSS-анимацию заново!
    setTimeout(() => {
        resultDiv.style.display = "block";
    }, 10);
};
