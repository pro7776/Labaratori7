window.onload = function() {
    const loaderBar = document.getElementById('loaderBar');
    
    let width = 0;
    
    const interval = setInterval(() => {
      if (width >= 100) {
          clearInterval(interval);
          document.getElementById('loader').style.display = 'none';
          document.querySelector('main').style.display = 'block';
      } else {
          width++;
          loaderBar.style.width = width + '%';
      }
      
      // Обновление индикатора прогресса
      updateProgressIndicator(width);
      
      // Если нужно, можно добавить задержку между обновлениями
      // setTimeout(() => { /* код */ }, 20);
      
   }, 20); // Увеличьте значение для замедления загрузки
};

function updateProgressIndicator(progress) {
   const progressIndicator = document.getElementById('progressIndicator');
   progressIndicator.innerHTML = `<div style='width:${progress}%;'></div>`;
}