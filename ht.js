/**
 * Adham Web Solutions - Client Interactions & WhatsApp Integration
 * Phone: +201013984024
 */

const WHATSAPP_PHONE = "201013984024";

// ── Open WhatsApp Helper ──
function openWhatsAppWithMessage(message) {
  const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

// ── Legacy Compatibility Functions ──
function sendWhatsApp() {
  openWhatsAppWithMessage("مرحباً أدهم، أود الاستفسار عن خدمات تصميم وتطوير المواقع الإلكترونية ومناقشة تفاصيل مشروعي.");
}

function sendWhatsApp5() {
  openWhatsAppWithMessage("مرحباً أدهم، أود الاستفسار عن باقات وأسعار تصميم وتطوير المواقع المتاحة لديك.");
}

function sendWhatsApp6() {
  openWhatsAppWithMessage("مرحباً أدهم، أرغب في حجز وطلب موقع إلكتروني احترافي لمشروعي.");
}

function sendWhatsApp9() {
  openWhatsAppWithMessage("مرحباً أدهم، أود البدء فوراً في تنفيذ موقع إلكتروني احترافي.");
}

// ── Service Specific WhatsApp Trigger ──
function sendServiceWhatsApp(serviceName) {
  const message = `مرحباً أدهم، أنا مهتم بخدمة "${serviceName}" وأود معرفة التفاصيل والبدء في تنفيذها.`;
  openWhatsAppWithMessage(message);
}

// ── Interactive Order Form Submission ──
function submitOrderForm(event) {
  if (event) event.preventDefault();
  
  const siteType = document.getElementById("order-site-type")?.value || "موقع إلكتروني متكامل";
  const clientName = document.getElementById("order-name")?.value.trim() || "عميل كريم";
  const notes = document.getElementById("order-notes")?.value.trim() || "لا توجد ملاحظات إضافية";
  
  const message = `السلام عليكم ورحمة الله وبركاته يا أدهم 👋\n\nأنا: ${clientName}\nأرغب في طلب: ${siteType}\nتفاصيل/ملاحظات: ${notes}\n\nأرجو إفادتي بالتكلفة والمدة الزمنية للبدء في المشروع.`;
  
  openWhatsAppWithMessage(message);
}

// ── DOM Event Listeners ──
document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Menu Toggle
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  
  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      const isOpen = navMenu.classList.contains("active");
      menuToggle.innerHTML = isOpen ? "✕" : "☰";
      menuToggle.setAttribute("aria-expanded", isOpen);
    });

    // Close menu when a link is clicked
    navMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuToggle.innerHTML = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // 2. Sticky Navbar Blur & Shadow on Scroll
  const header = document.querySelector("header");
  const backToTopBtn = document.getElementById("back-to-top");

  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY;

    if (header) {
      if (scrollPos > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }

    if (backToTopBtn) {
      if (scrollPos > 400) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    }
  });

  // 3. Back to Top Action
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // 4. FAQ Accordion Toggle
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    if (question) {
      question.addEventListener("click", () => {
        const isCurrentActive = item.classList.contains("active");
        
        // Close all other items
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove("active");
          }
        });

        // Toggle current item
        item.classList.toggle("active", !isCurrentActive);
      });
    }
  });
});
