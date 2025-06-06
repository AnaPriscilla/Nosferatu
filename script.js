
    // Elementos do DOM
    const trailerLink = document.getElementById('trailer-link');
    const trailerModal = document.getElementById('trailer-modal');
    const trailerVideo = document.getElementById('trailer-video');
    const closeModal = document.querySelector('.close');

    const youtubeURL = "https://www.youtube.com/embed/moIrYMjS0nI"; 

    // Abrir o modal
    trailerLink.addEventListener('click', function (event) {
        event.preventDefault(); // Previne comportamento padrão
        trailerVideo.src = youtubeURL + "?autoplay=1"; // Adiciona autoplay
        trailerModal.style.display = "block";
    });

    // Fechar o modal
    closeModal.addEventListener('click', function () {
        trailerModal.style.display = "none";
        trailerVideo.src = ""; // Remove o link para parar o vídeo
    });

    // Fechar modal ao clicar fora do conteúdo
    window.addEventListener('click', function (event) {
        if (event.target === trailerModal) {
            trailerModal.style.display = "none";
            trailerVideo.src = ""; // Remove o link para parar o vídeo
        }
    });

