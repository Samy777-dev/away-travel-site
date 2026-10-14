/* =========================
   HEADER
========================= */

// =========================
// HEADER
// =========================

document.addEventListener("DOMContentLoaded", () => {
    
    // =========================
    // HEADER AO ROLAR
    // =========================
    const header = document.getElementById("header");

    if (header) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        });
    }

    // =========================
    // MENU MOBILE (ID CORRIGIDO PARA menuToggle)
    // =========================
    const menuToggle = document.getElementById("menuToggle");
    const nav = document.getElementById("nav");

    if (menuToggle && nav) {
        menuToggle.addEventListener("click", () => {
            nav.classList.toggle("active");
        });

        document.querySelectorAll(".nav a").forEach((link) => {
            link.addEventListener("click", () => {
                nav.classList.remove("active");
            });
        });
    }

    // =========================
    // HERO SLIDER
    // =========================
    const slides = document.querySelectorAll(".hero-slide");
    const indicators = document.querySelectorAll(".hero-indicators .indicator");

    if (slides.length > 0) {
        let currentSlide = 0;
        let sliderInterval;

        function showSlide(index) {
            slides.forEach((slide) => slide.classList.remove("active"));
            indicators.forEach((indicator) => indicator.classList.remove("active"));

            if (slides[index]) slides[index].classList.add("active");
            if (indicators[index]) indicators[index].classList.add("active");

            currentSlide = index;
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        function startSlider() {
            sliderInterval = setInterval(nextSlide, 5000); // Alterna a cada 5 segundos
        }

        function resetSlider() {
            clearInterval(sliderInterval);
            startSlider();
        }

        indicators.forEach((indicator, index) => {
            indicator.addEventListener("click", () => {
                showSlide(index);
                resetSlider();
            });
        });

        startSlider();
    }

    // =========================
    // FORMULÁRIO DE COTAÇÃO
    // =========================
    const form = document.getElementById("formCotacao");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const nome = document.getElementById("nome")?.value || "";
            const telefone = document.getElementById("telefone")?.value || "";
            const destino = document.getElementById("destino")?.value || "";
            const pessoas = document.getElementById("pessoas")?.value || "Não informado";
            const ida = document.getElementById("ida")?.value || "";
            const volta = document.getElementById("volta")?.value || "";
            const mensagem = document.getElementById("mensagem")?.value || "Nenhuma";

            // Formatação de data
            function formatarData(data) {
                if (!data) return "Não informado";
                const partes = data.split("-");
                return `${partes[2]}/${partes[1]}/${partes[0]}`;
            }

            const dataIda = formatarData(ida);
            const dataVolta = formatarData(volta);

            // Mensagem formatada
            const texto = `Olá, AWAY TRAVEL! ✈️\n\nGostaria de solicitar uma cotação.\n\n👤 *Nome:* ${nome}\n📱 *WhatsApp:* ${telefone}\n🌎 *Destino:* ${destino}\n👥 *Viajantes:* ${pessoas}\n📅 *Ida:* ${dataIda}\n📅 *Volta:* ${dataVolta}\n\n💬 *Informações adicionais:*\n${mensagem}`;

            const numeroWhatsApp = "5593991470237";
            const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

            window.open(url, "_blank");
        });
    }

    // =========================
    // ANO AUTOMÁTICO
    // =========================
    const anoElem = document.getElementById("ano");
    if (anoElem) {
        anoElem.textContent = new Date().getFullYear();
    }
});