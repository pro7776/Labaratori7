// Проверка заполненности полей на первом шаге
const inputs = document.querySelectorAll('#frame_1 input');
inputs.forEach(input => input.addEventListener('input', checkInputs));

function checkInputs() {
   const allFilled = [...inputs].every(input => input.value.trim() !== '');
   const passwordMatch = document.getElementById('password').value === document.getElementById('confirm_password').value;

   document.getElementById('nextBtn1').disabled = !(allFilled && passwordMatch);
}

// Начало регистрации
function startRegistration() {
   document.getElementById('start_page').style.display = 'none'; // Скрываем начальную страницу
   document.getElementById('frame_1').classList.add('active');
   updateProgressIndicator(0); // Устанавливаем прогресс на первый шаг (0%)
}

// Переход к следующему шагу
function nextStep(step) {
   const currentFrame = document.querySelector('.registration-frame.active');
   currentFrame.classList.remove('active');

   if (step === 1) {
       document.getElementById('frame_2').classList.add('active');
       updateProgressIndicator(33); // Обновление индикатора прогресса для второго шага
   } else if (step === 2) {
       document.getElementById('frame_3').classList.add('active');
       updateProgressIndicator(66); // Обновление индикатора прогресса для третьего шага
   }
}

// Отмена регистрации
function cancel() {
   alert("Регистрация отменена.");
   location.reload(); // Перезагрузка страницы для возврата на начальную страницу
}

// Отправка кода подтверждения
function sendCode() {
   const phoneNumberInput = document.getElementById("phone_number");

   if (phoneNumberInput.value.trim()) {
       document.getElementById("codeSection").style.display = 'block';
       alert("Код отправлен на номер " + phoneNumberInput.value);
       // Здесь можно добавить логику отправки кода на сервер.
   }
}

// Проверка кода подтверждения
function checkCode() {
   const codeInput = document.getElementById("confirmation_code").value;

   if (codeInput.length === 4) { // Проверка длины кода
       document.getElementById("nextBtn2").disabled = false; // Активируем кнопку Далее
       alert("Код подтвержден!");
       // Здесь можно добавить логику проверки кода на сервере.
   } else {
       alert("Введите корректный код!");
   }
}

// Переход назад на предыдущий шаг
function prevStep(step) {
   const currentFrame = document.querySelector('.registration-frame.active');

   currentFrame.classList.remove('active');

   if (step === 1) {
       document.getElementById('frame_1').classList.add('active');
       updateProgressIndicator(0); // Обновление индикатора прогресса для первого шага

   } else if (step === 2) {
       document.getElementById('frame_2').classList.add('active');
       updateProgressIndicator(33); // Обновление индикатора прогресса для второго шага

   }
}

// Завершение регистрации и отображение конечной страницы
function finishRegistration() {
    // Скрываем все шаги регистрации
    const frames = document.querySelectorAll('.registration-frame');
    frames.forEach(frame => frame.classList.remove('active'));

    // Отображаем финальную страницу
    const finalFrame = document.getElementById('final_frame');
    finalFrame.classList.add('active');

    // Обновление индикатора прогресса
    updateProgressIndicator(100); // Полная заполненность индикатора прогресса
}

// Обновление индикатора прогресса и текста шага
function updateProgressIndicator(progress) {
    const progressBar = document.querySelector('.progress-indicator div');
    progressBar.style.width = progress + '%';
}