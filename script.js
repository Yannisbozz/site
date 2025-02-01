// Definir a data de início do relacionamento
const startDate = new Date("2024-10-22");  // Substitua com a data que você começou a namorar

// Função para calcular o tempo juntos
function updateCounter() {
    const now = new Date();
    const diff = now - startDate;
    
    // Total de dias
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    // Calcular anos, meses e dias de maneira mais flexível
    const years = Math.floor(days / 365);
    const months = Math.floor((days % 365) / 30);
    const remainingDays = days % 30;

    // Se tiver 0 anos, exibe o número de meses
    let counterText = "";
    if (years > 0) {
        counterText += `${years} ano${years > 1 ? 's' : ''}, `;
    }
    if (months > 0 || years > 0) {
        counterText += `${months} mês${months > 1 ? 'es' : ''}, `;
    }
    counterText += `${remainingDays} dia${remainingDays > 1 ? 's' : ''} juntos!`;
    
    document.getElementById("counter").innerHTML = counterText;
}


// Trocar as fotos automaticamente
const photos = [
    "foto11.jpg",
    "foto13.jpg",
    "foto3.jpg",
    "foto5.jpg",
    "foto1.jpg",
    "foto2.jpg",
    "foto4.jpg",
    "foto6.jpg",
    "foto7.jpg",
    "foto8.jpg",
    "foto9.jpg",
    "foto10.jpg",
    "foto12.jpg",
    "foto14.jpg",
    "foto15.jpg",
    "foto16.jpg",
    "foto17.jpg",
];
let photoIndex = 0;

function changePhoto() {
    photoIndex = (photoIndex + 1) % photos.length;
    document.getElementById("photo").src = photos[photoIndex];
}

// Definir a mensagem dedicada
const message = "Você é o motivo da minha alegria, a luz da minha vida, o meu amor. Obrigado por tanto be, você é a pessoa mais especial do mundo, e vou fazer de tudo pra te ver feliz ao meu lado, eu te amo minha gatinha 💞💞";
document.getElementById("dedicatoria").innerText = message;

// Atualizar o contador a cada segundo
setInterval(updateCounter, 1000);

// Trocar a foto a cada 5 segundos
setInterval(changePhoto, 5000);

// Iniciar a atualização do contador
updateCounter();
