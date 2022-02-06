const KEY_CODE_LEFT = 37;
const KEY_CODE_RIGHT = 39;
const KEY_CODE_SPACE = 32;

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

const PLAYER_WIDTH = 20;
const PLAYER_MAX_SPEED = 600.0;
const LASER_MAX_SPEED = 300.0;
const LASER_COOLDOWN = 0.1;

const ENEMIES_PER_ROW = 10;
const ENEMY_HORIZONTAL_PADDING = 80;
const ENEMY_VERTICAL_PADDING = 70;
const ENEMY_VERTICAL_SPACING = 80;
const ENEMY_COOLDOWN = 10.0;



const GAME_STATE = { //estado del juego
  lastTime: Date.now(),
  leftPressed: false,
  rightPressed: false,
  spacePressed: false,
  score: 0,
  lives: 3,
  playerX: 0,
  playerY: 0,
  playerCooldown: 0,
  lasers: [],
  enemies: [],
  enemyLasers: [],
  gameOver: false
};

// Funcion para saber si dos rectangulos se intersectan
function rectsIntersect(r1, r2) {
  return !(
    r2.left > r1.right ||
    r2.right < r1.left ||
    r2.top > r1.bottom ||
    r2.bottom < r1.top
  );
}

// Funcion para añadir una posicion a un elemento
function setPosition(el, x, y) {
  el.style.transform = `translate(${x}px, ${y}px)`;
}

// Funcion para asegurarse que el jugador no se salga de la pantalla
function clamp(v, min, max) {
  if (v < min) {
    return min;
  } else if (v > max) {
    return max;
  } else {
    return v;
  }
}

// Funcion para dar un tiempo aleatorio
function rand(min, max) {
  if (min === undefined) min = 0;
  if (max === undefined) max = 1;
  return min + Math.random() * (max - min);
}

/************************************************************************* 
                               JUGADOR
*************************************************************************/

// Funcion para crear al jugador y añadirlo a la lista de jugadores
function createPlayer($container) {
  GAME_STATE.playerX = GAME_WIDTH / 2;
  GAME_STATE.playerY = GAME_HEIGHT - 50;
  const $player = document.createElement("img");
  $player.src = "img/player-blue-1.png";
  $player.className = "player";
  $container.appendChild($player);
  setPosition($player, GAME_STATE.playerX, GAME_STATE.playerY);
}

// Funcion para eleminar al jugador
function destroyPlayer($container, player) {
    $container.removeChild(player);
    GAME_STATE.gameOver = true;
}

// Funcion para actualizar al jugador y las teclas
function updatePlayer(dt, $container) {

  if (GAME_STATE.leftPressed) { // si pulso la flecha izquierda se mueve a la izquierda
    GAME_STATE.playerX -= dt * PLAYER_MAX_SPEED;
  }
  if (GAME_STATE.rightPressed) { //si pulso la flecha derecha se mueve a la derecha
    GAME_STATE.playerX += dt * PLAYER_MAX_SPEED;
  }

  GAME_STATE.playerX = clamp(  // se asegura que el jugador no se salga de la pantalla
    GAME_STATE.playerX,
    PLAYER_WIDTH,
    GAME_WIDTH - PLAYER_WIDTH
  );

  if (GAME_STATE.spacePressed && GAME_STATE.playerCooldown <= 0) { // si pulso la barra espaciadora se dispara un laser
    createLaser($container, GAME_STATE.playerX, GAME_STATE.playerY); // se crea un laser
    GAME_STATE.playerCooldown = LASER_COOLDOWN; // se le asigna un cooldown
  }
  if (GAME_STATE.playerCooldown > 0) { //si el cooldown es mayor a 0 se le resta una unidad
    GAME_STATE.playerCooldown -= dt;
    //score++;
  }

  const player = document.querySelector(".player");
  setPosition(player, GAME_STATE.playerX, GAME_STATE.playerY);
}

/************************************************************************* 
                          LASER JUGADOR
*************************************************************************/

// Funcion para crear un laser al jugador y añadirlo a la lista de lasers
function createLaser($container, x, y) {
  const $element = document.createElement("img");
  $element.src = "img/laser-blue-1.png";
  $element.className = "laser";
  $container.appendChild($element);
  const laser = { x, y, $element };
  GAME_STATE.lasers.push(laser);
  setPosition($element, x, y);
}

//Funcion que actualiza los lasers del jugador y los enemigos
function updateLasers(dt, $container) {

  const lasers = GAME_STATE.lasers;
  for (let i = 0; i < lasers.length; i++) {

    const laser = lasers[i];
    laser.y -= dt * LASER_MAX_SPEED;

    if (laser.y < 0) {
      destroyLaser($container, laser);
    }

    setPosition(laser.$element, laser.x, laser.y);
    const r1 = laser.$element.getBoundingClientRect();
    const enemies = GAME_STATE.enemies;

    for (let j = 0; j < enemies.length; j++) {
      const enemy = enemies[j];
      if (enemy.isDead) continue;
      const r2 = enemy.$element.getBoundingClientRect();
      if (rectsIntersect(r1, r2)) {
        // Si el enemigo ha sido golpeado
        destroyEnemy($container, enemy);
        destroyLaser($container, laser);
        break;
      }
    }
  }
  GAME_STATE.lasers = GAME_STATE.lasers.filter(e => !e.isDead);
}

// Funcion para destruir el laser del jugador
function destroyLaser($container, laser) {
  $container.removeChild(laser.$element);
  laser.isDead = true;
}

/************************************************************************* 
                               ENEMIGO
*************************************************************************/

// Funcion que crea un enemigo en la pantalla y lo guarda en el array de enemigos
function createEnemy($container, x, y) {
  const $element = document.createElement("img");
  $element.src = "img/enemy-blue-1.png";
  $element.className = "enemy";
  $container.appendChild($element);
  const enemy = {
    x,
    y,
    cooldown: rand(0.5, ENEMY_COOLDOWN),
    $element
  };
  GAME_STATE.enemies.push(enemy);
  setPosition($element, x, y);
}

// Funcion que se encarga de actualizar los enemigos en la pantalla y de eliminar los enemigos que han muerto
function updateEnemies(dt, $container) {
  const dx = Math.sin(GAME_STATE.lastTime / 1000.0) * 50;
  const dy = Math.cos(GAME_STATE.lastTime / 1000.0) * 10;

  const enemies = GAME_STATE.enemies;
  for (let i = 0; i < enemies.length; i++) {
    const enemy = enemies[i];
    const x = enemy.x + dx;
    const y = enemy.y + dy;
    setPosition(enemy.$element, x, y);
    enemy.cooldown -= dt;
    if (enemy.cooldown <= 0) {
      createEnemyLaser($container, x, y);
      enemy.cooldown = ENEMY_COOLDOWN;
    }
  }
  GAME_STATE.enemies = GAME_STATE.enemies.filter(e => !e.isDead);
}

// Funcion para destruir un enemigo
function destroyEnemy($container, enemy) {
  $container.removeChild(enemy.$element);
  enemy.isDead = true;
}

/************************************************************************* 
                          LASER ENEMIGO
*************************************************************************/

// Funcion para crear los lasers del enemigo
function createEnemyLaser($container, x, y) {
  const $element = document.createElement("img");
  $element.src = "img/laser-red-5.png";
  $element.className = "enemy-laser";
  $container.appendChild($element);
  const laser = { x, y, $element };
  GAME_STATE.enemyLasers.push(laser);
  setPosition($element, x, y);
}

// Funcion para actualizar los lasers de los enemigos y verificar si chocan con el jugador
function updateEnemyLasers(dt, $container) {
  const lasers = GAME_STATE.enemyLasers;

  for (let i = 0; i < lasers.length; i++) {
    const laser = lasers[i];
    laser.y += dt * LASER_MAX_SPEED;
    if (laser.y > GAME_HEIGHT) {
      destroyLaser($container, laser);
    }
    setPosition(laser.$element, laser.x, laser.y);
    const r1 = laser.$element.getBoundingClientRect();
    const player = document.querySelector(".player");
    const r2 = player.getBoundingClientRect();
    if (rectsIntersect(r1, r2)) { 
      // El jugador ha sido golpeado y no le quedan vidas
      destroyPlayer($container, player);

      break;
    }
  }
  GAME_STATE.enemyLasers = GAME_STATE.enemyLasers.filter(e => !e.isDead);
}

/************************************************************************* 
                               CONTROLES
*************************************************************************/

// Funcion para inicializar los controles
function init() {
  const $container = document.querySelector(".game");
  createPlayer($container);

  const enemySpacing = (GAME_WIDTH - ENEMY_HORIZONTAL_PADDING * 2) / (ENEMIES_PER_ROW - 1);
  for (let j = 0; j < 3; j++) {
    const y = ENEMY_VERTICAL_PADDING + j * ENEMY_VERTICAL_SPACING;
    for (let i = 0; i < ENEMIES_PER_ROW; i++) {
      const x = i * enemySpacing + ENEMY_HORIZONTAL_PADDING;
      createEnemy($container, x, y);
    }
  }
}

// Funcion que indica que el jugdor ha ganado cuando no quedan enemigos
function playerHasWon() {
  return GAME_STATE.enemies.length === 0;
}

//Funcion que se ejecuta cada vez que se presiona una tecla
function update() {
  const currentTime = Date.now();
  const dt = (currentTime - GAME_STATE.lastTime) / 1000.0;

  if (GAME_STATE.gameOver) { //si pierdo el juego
    document.querySelector(".game-over").style.display = "block";
    return;
  }

  if (playerHasWon()) {
    document.querySelector(".congratulations").style.display = "block";
    return;
  }

  const $container = document.querySelector(".game");
  updatePlayer(dt, $container);
  updateLasers(dt, $container);
  updateEnemies(dt, $container);
  updateEnemyLasers(dt, $container);

  GAME_STATE.lastTime = currentTime;
  window.requestAnimationFrame(update);
}

//Funcion para que el juego empiece al presionar la tecla
function onKeyDown(e) {
  if (e.keyCode === KEY_CODE_LEFT) { //si presiono la flecha izquierda
    GAME_STATE.leftPressed = true; //se pone en true
  } else if (e.keyCode === KEY_CODE_RIGHT) {
    GAME_STATE.rightPressed = true;
  } else if (e.keyCode === KEY_CODE_SPACE) {
    GAME_STATE.spacePressed = true;
  }
}

//Funcion para que cuando se suelte la tecla, se ponga en false
function onKeyUp(e) {  //
  if (e.keyCode === KEY_CODE_LEFT) { //si presiono la tecla izquierda
    GAME_STATE.leftPressed = false; //deja de moverse a la izquierda
  } else if (e.keyCode === KEY_CODE_RIGHT) {
    GAME_STATE.rightPressed = false;
  } else if (e.keyCode === KEY_CODE_SPACE) {
    GAME_STATE.spacePressed = false;
  }
}

init();
window.addEventListener("keydown", onKeyDown);
window.addEventListener("keyup", onKeyUp);
window.requestAnimationFrame(update);