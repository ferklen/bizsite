
  function hideAllContent() {
    const contentContainers = document.querySelectorAll('.content');
    contentContainers.forEach((container) => {
      container.style.display = 'none';
    });
  }

  function showComandosContent() {
  hideAllContent();
   const contentContainer = document.getElementById('content-container');
  contentContainer.style.display = 'flex';
  const titleElement = document.createElement('h2');
  titleElement.classList.add('content-title');
  titleElement.textContent = 'Comandos (140)';
  const contentElement = document.createElement('div');
  contentElement.classList.add('content');
  contentElement.innerHTML = '🛠️ Moderación<br>clean | addrole | removerole | ban | kick | unban | hackban | mute<br>unmute | slowmode | warn | unwarn | warns | resetwarns<br>setservericon | nuke | lock | unlock | createrole | delrole | createchannel | createvc<br>delchannel | apodo | quitarapodo | renamechannel | movechannel | timeout  | untimeout<br><br>⚙️ Configuración<br>setxp | setprefix | setmuterole | setservericon | setwelcome | setleave<br>setautorole | setsuggest | setlogs | unsetlogs | unsetwelcome | unsetsuggest | unsetleave | unsetautorole<br><br>🧰 Utilidad<br>avatar | banner | sorteo | encuesta | emoji/emoji add | calculadora | wikipedia | nivel | xptop | clima<br>emoji-id | servericon | traducir | clima2 | timediff | hora | timestamp | reroll | sugerencia<br><br>📝 Información<br>serverinfo | userinfo | botinfo | roleinfo | channelinfo | soporte | ping<br>help | iso | invite | color | dolarblue<br><br>🎉 Diversión<br>ppt | hola | 8ball | probabilidad | sayembed | elegir<br>say | feo | buscaminas | calificar | ascii | reversetext | zalgo | randomuser<br><br>🖼️ Imágenes<br>perro | catsay | meme | clydesay | tweet | qr | petpet | pokemon | reddit<br> wide | random | azul | invert | sepia | pixel | posterize<br>blancoynegro | dither | contraste | oscuridad | brillo<br>rotate | mirrorh | mirrorv | mini | blur | verde | rojo | circulo | filtroazul<br>filtroverde | filtrorojo | colorcanny | canny | fisheye | threshold | rusia | lgbt | jail<br><br>💵 Economía<br>work | crimen | daily | bal | pet<br>pet feed | pet name | pet play | tienda | buy | comida | top | slots | coinflip<br><br><br>⭐ Destacados ⬇️'
  contentContainer.innerHTML = '';
  contentContainer.appendChild(titleElement);
  contentContainer.appendChild(contentElement);
  //
  const images = ['https://cdn.discordapp.com/attachments/1153860263410401280/1155223952998793307/image.png', 'https://cdn.discordapp.com/attachments/1153860263410401280/1155241985892945950/IMG_7547.jpg', 'https://cdn.discordapp.com/attachments/1153860263410401280/1155264018987090171/image.png'];
  const texts = ['Crea bienvenidas personalizadas! ⭐\nPuedes poner el titulo, texto y footer\nque quieras incluyendo una imagen opcional\n\nTambien puedes establecer un rol para darle\na los miembros al unirse al servidor', 'Comandos de tiempo! ⏰\nVe la diferencia entre dos mensajes,\nLa hora en cualquier país, e incluso\ncualquier timestamp en formato de Discord', 'Sorteos funcionales 🎉\nPuedes poner el tiempo que quieras\ny tambien hay comando reroll'];


  for (let i = 0; i < 3; i++) {
    
    const imageTextContainer = document.createElement('div');
    imageTextContainer.classList.add('image-text-container');

    const imageElement = document.createElement('img');
    imageElement.src = images[i];
    imageTextContainer.appendChild(imageElement);

    const textElement = document.createElement('div');
    textElement.classList.add('image-text');
    textElement.textContent = texts[i];
    imageTextContainer.appendChild(textElement);

    if (i % 2 === 0) {
      imageTextContainer.classList.add('image-right');
    }

    contentContainer.appendChild(imageTextContainer);
  
  }
  // efectos
    const imageTextContainers = document.querySelectorAll('.image-text-container');
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
function activateEffects() {
  imageTextContainers.forEach((container) => {
    if (isElementInViewport(container)) {
      container.classList.add('in-view');
    }
  });
}
window.addEventListener('scroll', activateEffects);
activateEffects();
}
function showSoporteContent() {
  window.open('https://discord.gg/NyBRQcdBXt', '_blank')
}
function showInvitacionContent() {
  window.open('https://discord.com/oauth2/authorize?client_id=1129145863952941067&scope=bot&permissions=536870382718', '_blank')
}
function showZibContent() {
  hideAllContent();
  const contentContainer = document.getElementById('content-container');
  contentContainer.style.display = 'flex';

  const titleElement = document.createElement('h2');
  titleElement.classList.add('content-title');
  titleElement.textContent = 'Zib';

  const contentElement = document.createElement('div');
  contentElement.classList.add('content');
  const imageElement = document.createElement('img');
  imageElement.src = 'https://cdn.discordapp.com/attachments/821081242959216700/1154535554189377536/777700188579168286.webp';
  imageElement.alt = 'Zib Imagen';
  const textElement = document.createElement('p');
  textElement.innerHTML = 'Zib';
  contentElement.appendChild(imageElement);
  contentElement.appendChild(textElement);

  contentContainer.innerHTML = '';
  contentContainer.appendChild(titleElement);
  contentContainer.appendChild(contentElement);
}
function showPrivacyPolicy() {
  hideAllContent();
  const contentContainer = document.getElementById('content-container');
  contentContainer.style.display = 'block';
  const titleElement = document.createElement('h2');
  titleElement.classList.add('content-title');
  titleElement.textContent = 'Política de privacidad ✅';
  const contentElement = document.createElement('div');
  contentElement.classList.add('content');
  contentElement.innerHTML = '1 - Tus datos personales 👤<br>Al aceptar las políticas de privacidad, permites que se recopile información de Discord,<br>como tu ID, tu nombre, el contenido de tu mensaje y actividad, esto es para el funcionamiento correcto del bot.<br><br>2 - Uso de la Información 📝<br>Solo guarda información cuando usas un comando. La información se almacena<br>temporalmente para su funcionamiento, no se comparte públicamente.<br><br>3 - Menores de edad ⚠️<br>Según las políticas de Discord, los menores de 13 años no pueden usar la aplicación,<br>por lo que esta en contra de las políticas usar comandos siendo menor de edad.';
  contentContainer.innerHTML = '';
  contentContainer.appendChild(titleElement);
  contentContainer.appendChild(contentElement);
}
function showTerms() {
  hideAllContent();
  const contentContainer = document.getElementById('content-container');
  contentContainer.style.display = 'block';
  const titleElement = document.createElement('h2');
  titleElement.classList.add('content-title');
  titleElement.textContent = 'Términos y condiciones ✅';
  const contentElement = document.createElement('div');
  contentElement.classList.add('content');
  contentElement.innerHTML = '1 - Edad Mínima ⚠️<br>Para usar el bot, debes tener al menos 13 años,<br>según los requisitos de edad de Discord.<br><br>2 - Tu Seguridad 🔐<br>El bot nunca te pedirá contraseñas ni información personal.<br> Cualquier dato compartido en Discord sigue la política de privacidad.<br><br>3 - Derechos de Autor 📚<br>El bot y servicios están protegidos por derechos de autor.<br>Está en contra de los términos el plagio o copia del contenido, no su uso.';
  contentContainer.innerHTML = '';
  contentContainer.appendChild(titleElement);
  contentContainer.appendChild(contentElement);
}

  document.querySelector('.button:nth-child(1)').addEventListener('click', showComandosContent);
