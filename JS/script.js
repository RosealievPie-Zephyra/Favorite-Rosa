const favoriteBoxes = document.querySelectorAll('.bg-opacity-10');

favoriteBoxes.forEach(box => {
    box.addEventListener('click', () => {
        box.classList.toggle('bg-[#cb879c]/30'); // Berubah warna saat diklik
        alert("Yay! You found one of my favorite things! ✨");
    });
});
