
function playSound(event) {
    const audioDOM = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const keyDOM = document.querySelector(`div[data-key="${event.keyCode}"]`);

    if (!audioDOM) return;
    
    keyDOM.classList.add('playing');
    audioDOM.currentTime = 0;
    audioDOM.play();
    
}

function removeTransition(event) {
    if (event.propertyName !== 'transform') return;
    event.target.classList.remove('playing');
}


//   document.getElementsByClassName('key')[0]
//         .addEventListener('click', (event) => playSound(event))
  

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  keys.forEach(item => item.onclick = () => item.classList.add('playing'));
  window.addEventListener('keydown', playSound);
  window.addEventListener('click', playSound);