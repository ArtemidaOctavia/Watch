const watch = document.querySelector('.watch');
watch.style.transform = 'rotate(' + 180 + 'deg' + ')';

function getStick () {
  let stick = document.createElement('span');
  stick.classList.add('stick');
  return stick;
}

function getBigStick () {
  let bigStick = document.createElement('span');
  bigStick.classList.add('stick');
  bigStick.style.width = 8 + 'px';
  bigStick.style.height = 18 + 'px';
  bigStick.style.top = -5 + 'px';
  return bigStick;
}

function getDirection (deg) {
  let direction = document.createElement('div');
  direction.classList.add('direction');
  direction.style.left = watch.clientWidth / 2  + 'px';
  direction.style.top = watch.clientHeight / 2  + 'px';
  direction.style.transform = 'rotate(' + deg + 'deg' + ')';
  return direction;
}

for (let i = 1; i <= 60; i++) {
  if (i === 1 || i % 5) {
    let stick = getStick();
    let direction = getDirection(i * 6);
    direction.appendChild(stick);
    watch.appendChild(direction)
  } else {
    let bigStick = getBigStick();
    let direction = getDirection(i * 6);
    direction.appendChild(bigStick);
    watch.appendChild(direction)
  }
}

function getArrow () {
  let arrow = document.createElement('div');
  arrow.id = 'arrow';
  arrow.classList.add('arrow');
  arrow.style.left = watch.clientWidth / 2 + 2 + 'px';
  arrow.style.top = watch.clientHeight / 2 + 2 + 'px';
  watch.appendChild(arrow);
}

function getMediumArrow() {
  let mediumArrow = document.createElement('div');
  mediumArrow.id = 'mediumArrow';
  mediumArrow.classList.add('arrow');
  mediumArrow.style.width = 3 + 'px';
  mediumArrow.style.height = 100 + 'px';
  mediumArrow.style.left = watch.clientWidth / 2 + 2 + 'px';
  mediumArrow.style.top = watch.clientHeight / 2 + 2 + 'px';
  watch.appendChild(mediumArrow);
}

function getBigArrow () {
  let bigArrow = document.createElement('div');
  bigArrow.id = 'bigArrow';
  bigArrow.classList.add('arrow');
  bigArrow.style.width = 5 + 'px';
  bigArrow.style.height = 60 + 'px';
  bigArrow.style.left = watch.clientWidth / 2 + 2 + 'px';
  bigArrow.style.top = watch.clientHeight / 2 + 2 + 'px';
  watch.appendChild(bigArrow);
}

getArrow();
getMediumArrow();
getBigArrow();

function initialize () {
  let date = new Date();
  arrow.style.transform = 'rotate' + '(' + 6 * date.getSeconds() + 'deg' + ')';
  mediumArrow.style.transform = 'rotate' + '(' + 6 * date.getMinutes() + 'deg' + ')';
  bigArrow.style.transform = 'rotate' + '(' + 360/720*((date.getHours()*60)+ date.getMinutes())  + 'deg' + ')'
}

initialize();
setInterval(() => {
  initialize()
}, 1000);