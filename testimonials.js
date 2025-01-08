document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeModal = document.getElementById('closeModal');

    // Map each card to its corresponding image for the modal
    const testimonials = {
        colleague1: 'https://i.postimg.cc/8Pfzk4kJ/6.jpg',
        colleague2: 'https://i.postimg.cc/MZFG8NwJ/5.jpg',
        colleague3: 'https://i.postimg.cc/3NVrC41x/4.jpg',
        student1: 'https://i.postimg.cc/nrCcDYvW/1.jpg',
        student2: 'https://i.postimg.cc/G2MmtSsY/2.jpg',
        student3: 'https://i.postimg.cc/hj4GSqhc/3.jpg'
    };

    // Add click event to each testimonial card
    document.querySelectorAll('.testimonial-card').forEach(card => {
        card.addEventListener('click', () => {
            const modalKey = card.getAttribute('data-modal');
            modalImage.src = testimonials[modalKey];
            modal.classList.add('active');
        });
    });

    // Close modal on clicking the close button
    closeModal.addEventListener('click', () => {
        modal.classList.remove('active');
    });
});
