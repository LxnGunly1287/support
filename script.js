// Xử lý FAQ Accordion
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        const icon = item.querySelector('i');
        
        // Toggle answer
        answer.style.maxHeight = answer.style.maxHeight ? null : answer.scrollHeight + 'px';
        
        // Xoay icon
        icon.style.transform = answer.style.maxHeight ? 'rotate(180deg)' : 'rotate(0deg)';
    });
});

// Scroll mượt
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// @headrozing (HoangLong)