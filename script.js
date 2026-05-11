'use strict'
// <!-- ///////start navbar/////// -->
window.addEventListener("scroll", () => {
    const header = document.querySelector(".navbar");
    header.classList.toggle("sticky", window.scrollY > 50);
});

const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
    toggle.classList.toggle("active");
});

// <!-- ///////end navbar/////// -->
// <!-- ///////start slider/////// -->
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const toggleBtn = document.getElementById("toggleBtn");

    let current = 0;
    let autoSlide = true;
    let intervalId;

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
            dots[i].classList.toggle("active", i === index);
        });
    };

    const nextSlide = () => {
        current = (current + 1) % slides.length;
        showSlide(current);
    };

    const prevSlide = () => {
        current = (current - 1 + slides.length) % slides.length;
        showSlide(current);
    };

    const startAutoSlide = () => {
        intervalId = setInterval(nextSlide, 8000);
        toggleBtn.textContent = "❚❚";
        autoSlide = true;
    };

    const stopAutoSlide = () => {
        clearInterval(intervalId);
        toggleBtn.textContent = "▶";
        autoSlide = false;
    };

    const toggleAutoSlide = () => {
        autoSlide ? stopAutoSlide() : startAutoSlide();
    };

    const resetTimer = () => {
        if (autoSlide) {
            clearInterval(intervalId);
            startAutoSlide();
        }
    };

    prevBtn.addEventListener("click", () => {
        prevSlide();
        resetTimer();
    });

    nextBtn.addEventListener("click", () => {
        nextSlide();
        resetTimer();
    });

    toggleBtn.addEventListener("click", toggleAutoSlide);

    dots.forEach(dot => {
        dot.addEventListener("click", () => {
            current = parseInt(dot.dataset.index);
            showSlide(current);
            resetTimer();
        });
    });

    showSlide(current);
    startAutoSlide();
});
// <!-- ///////end slider/////// -->

// <!-- ///////start services/////// -->
window.addEventListener("scroll", () => {
    const section = document.getElementById("services");
    const trigger = window.innerHeight - 100;

    if (section.getBoundingClientRect().top < trigger) {
        section.classList.add("visible");
    }
});
const modal = document.getElementById("modal");
const modalText = document.getElementById("modal-text");
const closeBtn = document.getElementById("close-btn");
document.querySelectorAll(".read-more").forEach(button => {
    button.addEventListener("click", () => {
        modalText.textContent = button.dataset.content;
        modal.classList.add("animate-modal");
        modal.style.display = "flex";
    });
});
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    modal.classList.remove("animate-modal");
});
window.addEventListener("click", event => {
    if (event.target === modal) {
        modal.style.display = "none";
        modal.classList.remove("animate-modal");
    }
});
// <!-- ///////end services/////// -->

// <!-- ///////start about/////// -->
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal2");
    const readMoreBtn = document.querySelector(".read-more2");
    const closeBtn = document.getElementById("Close-btn");
    const modalText = document.getElementById("modal-text2");
    readMoreBtn.addEventListener("click", () => {
        const content = readMoreBtn.getAttribute("data-content");
        modalText.textContent = content;
        modal.style.display = "flex";
    });
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
// <!-- ///////end about/////// -->
// <!-- ///////start counter/////// -->
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
    const speed = 100;
    const updateCount = (counter) => {
        const target = +counter.getAttribute("data-target");
        let count = 0;
        const increment = Math.ceil(target / speed);

        const countInterval = () => {
            if (count < target) {
                count += increment;
                counter.innerText = count;
                requestAnimationFrame(countInterval);
            } else {
                counter.innerText = target;
            }
        };

        countInterval();
    };

    const observerOptions = {
        threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const counter = entry.target.querySelector(".counter");
                counter.innerText = "0";
                updateCount(counter);
            }
        });
    }, observerOptions);

    const counterBoxes = document.querySelectorAll(".counter-box");
    counterBoxes.forEach((counterBox) => {
        observer.observe(counterBox);
    });
});
// <!-- ///////end counter/////// -->
// <!-- ///////start our services/////// -->
document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab-btn");
    const contents = document.querySelectorAll(".tab-content");
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            const targetId = tab.dataset.tab;
            contents.forEach(content => {
                content.classList.toggle("active", content.id === targetId);
            });
        });
    });
    const readMoreLinks = document.querySelectorAll(".read-more3");
    readMoreLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const container = link.closest(".content-text");
            const shortText = container.querySelector(".short-text");
            const fullText = container.querySelector(".full-text");
            const isExpanded = fullText.style.display === "block";
            if (isExpanded) {
                fullText.style.display = "none";
                shortText.style.display = "block";
                link.textContent = "Read More";
            } else {
                fullText.style.display = "block";
                shortText.style.display = "none";
                link.textContent = "Read Less";
            }
        });
    });
});
// <!-- ///////end  our services/////// -->
// <!-- ///////start Technicians /////// -->
document.addEventListener("DOMContentLoaded", () => {
    const icons = document.querySelectorAll(".icon2");
    const modal = document.getElementById("modal-team");
    const modalText = document.getElementById("modal-text-team");
    const closeBtn = document.querySelector(".close-team");
    icons.forEach(icon => {
        icon.addEventListener("click", (e) => {
            const TechnicianId = e.target.dataset.id;
            modalText.textContent = `This is the Social Media Id of ${TechnicianId}`;
            modal.style.display = "flex";
        });
    });
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
//   <!-- ///////end  Technicians /////// -->
// <!-- ///////start  Testimonial  /////// -->
const track = document.getElementById('sliderTrack');
const slides = document.querySelectorAll('.slide2');
const dotsContainer = document.getElementById('sliderDots');
let currentIndex = 0;
const totalSlides = slides.length;
function getVisibleCount() {
    const width = window.innerWidth;
    if (width < 576) return 1;
    if (width < 768) return 2;
    return 3;
}
function createDots() {
    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.dataset.index = i;
        dot.addEventListener('click', (e) => {
            const targetIndex = parseInt(e.target.dataset.index);
            goToSlide(targetIndex);
        });
        dotsContainer.appendChild(dot);
    }
}
function goToSlide(index) {
    const visibleCount = getVisibleCount();
    const maxScrollIndex = totalSlides - visibleCount;
    currentIndex = Math.min(index, maxScrollIndex);
    const slideWidth = slides[0].offsetWidth + 20;
    const offset = currentIndex * slideWidth;
    track.style.transform = `translateX(-${offset}px)`;
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    const dots = dotsContainer.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}
function nextSlide() {
    const visibleCount = getVisibleCount();
    const maxScrollIndex = totalSlides - visibleCount;
    currentIndex = currentIndex >= maxScrollIndex ? 0 : currentIndex + 1;
    goToSlide(currentIndex);
}

window.addEventListener('resize', () => {
    goToSlide(currentIndex);
});

window.addEventListener('load', () => {
    createDots();
    goToSlide(0);
    setInterval(nextSlide, 5000);
});
// <!-- ///////end  Testimonial  /////// -->
// <!-- ///////start  blog  /////// -->
  document.querySelectorAll('.card-blog').forEach(card => {
        card.addEventListener('click', () => {
            const title = card.getAttribute('data-title');
            const content = card.getAttribute('data-content');
            document.getElementById('popupTitle').innerText = title;
            document.getElementById('popupText').innerText = content;
            document.getElementById('popupBlog').style.display = 'flex';
        });
  });

  document.getElementById('closePopup').addEventListener('click', () => {
        document.getElementById('popupBlog').style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target.id === 'popupBlog') {
        document.getElementById('popupBlog').style.display = 'none';
    }
  });
// <!-- ///////end  blog  /////// -->
// <!-- ///////start  contact  /////// -->
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const successMsg = document.getElementById("success-message");
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        phone: form.phone.value.trim(),
        subject: form.subject.value,
        message: form.message.value.trim(),
      };
      if (!formData.name || !formData.email || !formData.message) {
        alert("Please fill in all required fields.");
        return;
      }
  
      try {
        const response = await fetch("https://example.com/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          form.reset();
          successMsg.style.display = "block";
          successMsg.textContent = "Your message has been sent successfully!";
          setTimeout(() => {
            successMsg.style.display = "none";
          }, 4000);
        } else {
          throw new Error("Failed to send the message.");
        }
      } catch (error) {
        alert("An error occurred. Please try again later.");
        console.error("Form submission error:", error);
      }
    });
  });
//   <!-- ///////end  contact  /////// -->
// <!-- ///////start  footer  /////// -->
function subscribeNewsletter(event) {
    event.preventDefault();
    const email = event.target.querySelector("input").value;
    if (email) {
      `alert(Subscribed with ${email}!)`;
      event.target.reset();
    }
  }
//   <!-- ///////end  footer  /////// -->
// <!-- ///////start  back to top  /////// -->
window.onscroll = function () {
    const btn = document.getElementById("backToTop");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };
  document.getElementById("backToTop").addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
//   <!-- ///////end  back to top  /////// -->