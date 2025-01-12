(function() {
  function $(id) {
    return document.getElementById(id);
  }

  var card = $('card'),
      openB = $('open'),
      closeB = $('close'),
      timer = null;
  console.log('wat', card);
  openB.addEventListener('click', function () {
    card.setAttribute('class', 'open-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      timer = null;
    }, 1000);
  });

  closeB.addEventListener('click', function () {
    card.setAttribute('class', 'close-half');
    if (timer) clearTimerout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', '');
      timer = null;
    }, 1000);
  });

}());


 // Floating hearts effect
 const createHeart = () => {
  const heart = document.createElement('div');
  heart.classList.add('floating-heart');
  heart.innerHTML = '❤️';
  document.body.appendChild(heart);

  const size = Math.random() * 30 + 10 + 'px';
  heart.style.fontSize = size;

  heart.style.left = Math.random() * 100 + '%';
  heart.style.animationDuration = Math.random() * 3 + 2 + 's';

  setTimeout(() => {
    heart.remove();
  }, 5000);
};

setInterval(createHeart, 500);