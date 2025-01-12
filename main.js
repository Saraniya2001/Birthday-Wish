    window.sr = ScrollReveal();
    sr.reveal('.dark-overlay', {
      duration: 2500,
      delay: 1000,
    });


    sr.reveal('#chat1, #chat2, #chat3, #chat4, #chat5, #chat6, #chat7', {
      viewFactor: 0,
      duration: 2000,
      origin: 'top',
      distance: '20px',
    }, 4000)

    sr.reveal('#chat1, #chat3 ,#chat5, #chat7', {
      origin: 'top',
    }, 4000)

    sr.reveal('#chat2, #chat4, #chat6', {
      origin: 'bottom',
    }, 4000)

    sr.reveal('#chat1', {
        delay: 1000,
    }, 4000)


    sr.reveal('h2', {
      viewFactor:0.2,
      duration: 1500,
      origin: 'left',
      distance: '200px',
      reset: true,
    })

    sr.reveal('.container p', {
      viewFactor:0.2,
      duration: 1500,
      origin: 'right',
      distance: '200px',
      reset: true,
    })

    sr.reveal('i', {
      viewFactor: 0.2,
      rotate: {x: 0, y: 900, z: 0}
    });

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



    
