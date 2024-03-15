document.addEventListener('DOMContentLoaded', function() {
    const wishes = [
        { image: '1.jpeg', message: 'Wishing you a fantastic birthday filled with joy and happiness!' },
        { image: '2.jpeg', message: 'May your day be as special as you are to us. Happy Birthday!' },
        { image: '3.jpeg', message: 'Cheers to another year of great memories and adventures. Happy Birthday, Uncle!' }
    ];

    const wishesContainer = document.getElementById('wishes');

    wishes.forEach(wish => {
        const wishDiv = document.createElement('div');
        const image = document.createElement('img');
        image.src = wish.image;
        const paragraph = document.createElement('p');
        paragraph.textContent = wish.message;
        wishDiv.appendChild(image);
        wishDiv.appendChild(paragraph);
        wishesContainer.appendChild(wishDiv);
    });

    const playButton = document.getElementById('playButton');
    const birthdayMusic = document.getElementById('birthdayMusic');

    playButton.addEventListener('click', function() {
        if (birthdayMusic.paused) {
            birthdayMusic.play();
            playButton.textContent = 'Pause Music';
        } else {
            birthdayMusic.pause();
            playButton.textContent = 'Play Music';
        }
    });
});
