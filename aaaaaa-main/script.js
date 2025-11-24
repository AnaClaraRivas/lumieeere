// Seletores principais
const mobileMenuToggle = document.querySelector('.menu-mobile');
const mobileNav = document.querySelector('.mobile-nav');

// Abrir/fechar menu mobile
mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    mobileNav.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        mobileNav.classList.remove('active');
    });
});

// Fechar menu ao clicar fora
document.addEventListener('click', (e) => {
    if (!mobileMenuToggle.contains(e.target) && !mobileNav.contains(e.target)) {
        mobileMenuToggle.classList.remove('active');
        mobileNav.classList.remove('active');
    }
});

// Efeito de mudança no header ao rolar
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// obras
document.querySelectorAll('.livro').forEach(livro => {
  livro.addEventListener('click', () => {
    alert(`Você clicou em "${livro.querySelector('h3').textContent}"`);
  });
});

// espaçamento
window.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const main = document.querySelector("main");
    const headerHeight = header.offsetHeight + 40; // margem extra
    main.style.paddingTop = `${headerHeight}px`;
});
