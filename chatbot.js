const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");
const typingAnimation = document.getElementById("typing-animation");

function addMessage(message, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${sender}-message`;
    
    if (sender === "bot") {
        messageDiv.innerHTML = `<img src="descarga.png" alt="Bot Icon" class="bot-icon">${message}`;
    } else {
        messageDiv.innerText = message;
    }
    
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}


function showTypingAnimation() {
    typingAnimation.style.display = "block";
}

function hideTypingAnimation() {
    typingAnimation.style.display = "none";
}

function sendMessage() {
    const userMessage = userInput.value.trim();
    if (userMessage === "") return;

    sendButton.disabled = true;
    userInput.disabled = true;

    addMessage(userMessage, "user");


    showTypingAnimation();
    setTimeout(() => {
       
        hideTypingAnimation();

        switch (userMessage.toLowerCase()) {
            case "hola":
                addMessage("Â¡Hola! Â¿Que necesitas? si deseas ver mis comandos escribe <b>e!help</b>,", "bot");
                break;
            case "adios":
                addMessage("Â¡Hasta luego! Si tienes mÃ¡s preguntas, no dudes en volver.", "bot");
                break;
                case "e!help":
                    addMessage("<b>Estos son mis comandos disponibles</b> <ul><li>e!waifus: Muestra una imagen de waifu anime aleatoria.</li> <li>e!dog: Muestra una imagen de perritos aleatoriamente.</li> <li>e!cat: Muestra una imagen de gatitos aleatorios.</li> <li>e!meme: Te muestro un meme aleatoriamente en espaÃ±ol.</li> <li>e!info: Muestro mi informaciÃ³n de Discord.</li> <li>e!tirar dado: Te doy un nÃºmero a lazar del 1 al 6.</li> <li>e!invite: Enlace para que me invites a tu servidor.</li> <li>e!soporte: Link de mi servidor de soporte en discord.</li> <li>e!black list: Una lista de usuarios que estan restringidos en mi base de datos de Discord.</li></ul> Pronto mas comandos.", "bot");
                    break;

                    case "e!info":
                        addMessage("<b>Esta es mi informaciÃ³n en Discord</b> <ul><li>Owner: iTz Arshia (Team Akiomae CreMent).</li> <li>Name discord: ChatGPT#7643</li> <li>Comandos: Mas de 60 comandos y 10 subcomandos.</li> <li>Servidores: 100 servidores.</li> <li>Usuarios: 9204 users.</li> <li>Ping aproximado: ðŸ“ Pong! Latency is 149ms. Bot Latency is 91ms.</li></ul>", "bot");
                        break;

                        case "e!black list":
                        addMessage("<b>Black list de ChatGPT</b> <ul><li><@525035576597020723> (gyazoo): Raidear GDPS y provocar caidas notorias.</li> <li><@1051672559994814474> (itzianma): Acoso a menores y toxicidad exesiva.</li> <li><@1122602578002317332> (modzgd): Raidear varios servidores relativamente.</li> <li><@1143977354071392306> (HackerOR11#1966): Spamear al MD de usuarios y en servidores, mensajes constantes, raidear GDPS stats de cuentas.</li> <li><@947668977289670658> (personalarepita): Raidear servidores mediante DD Segurity un bot de Raid masivo.</li></ul>", "bot");
                        break;

                    case "e!invite":
                        const embedMessageDiv2 = document.createElement("div");
                        embedMessageDiv2.className = `message bot-message`;
                        embedMessageDiv2.innerHTML = `
                            <img src="bot-icon.png" alt="Bot Icon" class="bot-icon">
                            <div class="embed">
                                <div class="embed-title"><b>ChatGPT</b></div>
                                <div class="embed-description">Te ofrezco multiples comandos y subcomandos de interacciÃ³n, moderaciÃ³n, inteligencia artificial y minijuegos, estÃ¡ alojado 24/7 y tiene actualizaciones constantes..</div>
                                <div class="embed-image">
                                    <img src="bot-icon.png" alt="Imagen del servidor" style="max-width: 50%; height: auto;">
                                </div>
                                <div class="embed-footer">
                                    <a href="https://discord.com/api/oauth2/authorize?client_id=1176278196723908719&permissions=947243411649&scope=bot%20applications.commands" target="_blank" class="invite-button">Invitame :)</a>
                                </div>
                            </div>
                        `;
                        chatBox.appendChild(embedMessageDiv2);
                        chatBox.scrollTop = chatBox.scrollHeight;
                        break;

             case "e!soporte":
    const embedMessageDiv = document.createElement("div");
    embedMessageDiv.className = `message bot-message`;
    embedMessageDiv.innerHTML = `
        <img src="descarga.png" alt="Bot Icon" class="bot-icon">
        <div class="embed">
            <div class="embed-title"><b>â”‡LeÌ¨Æ’Ñ‚Ì‘ OÌ¤Æ’ Æ¬Î¹Ð¼Ì‘eÌ¨ 2.2 |Pc-Android|  (EdgaBot suport)</b></div>
            <div class="embed-description">Somos un servidor de un proyecto futuro que por entonces tenemos un GDPS 2.2 llamado Left of Time el cual estÃ¡ disponible para PC y ANDROID y tambien de <b>SOPORTE DEL BOT</b>.</div>
            <div class="embed-image">
                <img src="https://cdn.discordapp.com/icons/923341410760028160/8a416fa6f612ac3fe4ecefba3c49943d.png?size=2048" alt="Imagen del servidor" style="max-width: 100%; height: auto;">
            </div>
            <div class="embed-footer">
                <a href="https://discord.gg/Fy6tUCJPAq" target="_blank" class="invite-button">Unirse al servidor</a>
            </div>
        </div>
    `;
    chatBox.appendChild(embedMessageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
    break;

                    case "e!tirar dado":
                        // Genera un nÃºmero aleatorio del 1 al 6
                        const numeroAleatorio = Math.floor(Math.random() * 6) + 1;
                    
                        // Crea un elemento div para mostrar el nÃºmero con fuente grande
                        const messageDiv = document.createElement("div");
                        messageDiv.className = `message bot-message`;
                        messageDiv.style.fontSize = "24px"; // Establece el tamaÃ±o de fuente grande
                        messageDiv.innerHTML = `<img src="bot-icon.png" alt="Bot Icon" class="bot-icon"> El dado cayÃ³ en: <strong>${numeroAleatorio}</strong>`;
                    
                        // Agrega el mensaje al chat
                        chatBox.appendChild(messageDiv);
                        chatBox.scrollTop = chatBox.scrollHeight;
                        break;

                        case "e!dog":
                            // Genera un nÃºmero aleatorio del 1 al 100
                            const numeroAleatorio2 = Math.floor(Math.random() * 100) + 1;
                          
                            // Crea un elemento div para el globo de texto
                            const messageDiv2 = document.createElement("div");
                            messageDiv2.className = `message bot-message`;
                          
                            // Crea un elemento para la imagen del perro
                            const imageElement = document.createElement("img");
                            imageElement.src = `https://edgajuman.github.io/edgabot.dog.api/Imagenes%20dog/imagen%20dog%20(${numeroAleatorio2}).jpg`;
                            imageElement.width = 250;
                          
                            // Agrega el globo de texto y la imagen al mensaje
                            messageDiv2.innerHTML = `<img src="descarga.png" alt="Bot Icon" class="bot-icon"> AquÃ­ tienes un perrito: `;
                            messageDiv2.appendChild(imageElement);
                          
                            // Agrega el mensaje al chat
                            chatBox.appendChild(messageDiv2);
                            chatBox.scrollTop = chatBox.scrollHeight;
                            break;
                          
                            case "e!cat":
                                // Genera un nÃºmero aleatorio del 1 al 999
                                const numeroAleatorio3 = Math.floor(Math.random() * 999) + 1;
                            
                                // Crea un elemento div para el globo de texto
                                const messageDiv3 = document.createElement("div");
                                messageDiv3.className = `message bot-message`;
                            
                                // Crea un elemento para la imagen del gato
                                const imageElement3 = document.createElement("img");
                                imageElement3.src = `https://cataas.com/cat/says/${numeroAleatorio3}`;
                                imageElement3.width = 250;
                            
                                // Agrega el globo de texto y la imagen al mensaje
                                messageDiv3.innerHTML = `<img src="descarga.png" alt="Bot Icon" class="bot-icon"> AquÃ­ tienes un gatito: `;
                                messageDiv3.appendChild(imageElement3);
                            
                                // Agrega el mensaje al chat
                                chatBox.appendChild(messageDiv3);
                                chatBox.scrollTop = chatBox.scrollHeight;
                                break;
                            
                                case "e!meme":
                                    // Realiza la solicitud GET a la API
                                    fetch("https://bdfd-api.glitch.me/api/fox.v1/memes.json")
                                        .then(response => response.json())
                                        .then(data => {
                                            // Verifica si la respuesta contiene la lista de memes
                                            if (data && data.list) {
                                                const memes = data.list;
                                
                                                // Obtiene un nÃºmero aleatorio entre 1 y el mÃ¡ximo de memes disponibles
                                                const maxMemes = memes.es.max;
                                                const randomIndex = Math.floor(Math.random() * maxMemes) + 1;
                                
                                                // Crea una URL de imagen aleatoria
                                                const imageUrl = memes.es[randomIndex];
                                
                                                // Crea un elemento de imagen para mostrar el meme
                                                const imageElement = document.createElement("img");
                                                imageElement.src = imageUrl;
                                                imageElement.alt = "Meme";
                                                imageElement.style.maxWidth = "100%"; // Ajusta el ancho mÃ¡ximo de la imagen
                                
                                                // Crea un contenedor div para el mensaje del bot y la imagen
                                                const messageDiv = document.createElement("div");
                                                messageDiv.className = `message bot-message`;
                                                messageDiv.innerHTML = `<img src="bot-icon.png" alt="Bot Icon" class="bot-icon"> AquÃ­ tienes un meme:`;
                                                messageDiv.appendChild(imageElement);
                                
                                                // Agrega el mensaje y la imagen al chat
                                                chatBox.appendChild(messageDiv);
                                                chatBox.scrollTop = chatBox.scrollHeight;
                                            } else {
                                                addMessage("Lo siento, no pude encontrar un meme en este momento.", "bot");
                                            }
                                        })
                                        .catch(error => {
                                            console.error('An error occurred:', error.message);
                                            addMessage("Hubo un error al cargar el meme.", "bot");
                                        });
                                    break;
                                
                                    
                                               
                            case "e!waifus":
    // Realiza la solicitud GET a la nueva API
    fetch("https://api.waifu.im/search/")
        .then(response => response.json())
        .then(data => {
            // Verifica si la respuesta contiene imÃ¡genes
            if (data.images && data.images.length > 0) {
                const imageUrl = data.images[0].url;

                // Crea un elemento de imagen para mostrar la imagen
                const imageElement = document.createElement("img");
                imageElement.src = imageUrl;
                imageElement.alt = "Waifu";
                imageElement.style.maxWidth = "100%"; // Ajusta el ancho mÃ¡ximo de la imagen

                // Crea un contenedor div para el mensaje del bot y la imagen
                const messageDiv = document.createElement("div");
                messageDiv.className = `message bot-message`;
                messageDiv.innerHTML = `<img src="bot-icon.png" alt="Bot Icon" class="bot-icon"> AquÃ­ tienes una waifu:`;
                messageDiv.appendChild(imageElement);

                // Agrega el mensaje y la imagen al chat
                chatBox.appendChild(messageDiv);
                chatBox.scrollTop = chatBox.scrollHeight;
            } else {
                addMessage("Lo siento, no pude encontrar una imagen de waifu en este momento.", "bot");
            }
        })
        .catch(error => {
            console.error('An error occurred:', error);

            if (error instanceof TypeError && error.message === "Failed to fetch") {
                addMessage("Hubo un error al cargar la imagen de waifu. Comprueba tu conexiÃ³n a Internet.", "bot");
            } else {
                addMessage("Hubo un error al cargar la imagen de waifu. Error desconocido.", "bot");
            }
        });
    break;


    default:
    const openaiApiKey = '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';
    const openaiEndpoint = 'https://api.openai.com/v1/chat/completions';

    const requestBody = {
        model: 'gpt-3.5-turbo',
        messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: userMessage }
        ]
    };

    fetch(openaiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${openaiApiKey}`
        },
        body: JSON.stringify(requestBody)
    })
    .then(response => response.json())
    .then(data => {
        if (data && data.choices && data.choices.length > 0 && data.choices[0].message && data.choices[0].message.content) {
            addMessage(data.choices[0].message.content.trim(), 'bot');
        } else {
            addMessage("Lo siento, no entendÃ­ eso.", 'bot');
        }
    })
    .catch(error => {
        console.error('Error al llamar a la API de OpenAI:', error);
        addMessage(`Lo siento, ha ocurrido un error. Detalles: ${error.message}`, 'bot');
    });
    break;

    
        }

  
        sendButton.disabled = false;
        userInput.disabled = false;
        userInput.value = "";
    }, 2000);
}

userInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

sendButton.addEventListener("click", sendMessage);
