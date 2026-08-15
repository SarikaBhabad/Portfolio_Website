/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle =
    document.querySelector(".menu-toggle");

const navLinks =
    document.querySelector(".nav-links");

const navItems =
    document.querySelectorAll(".nav-links a");


/*
    Open / close the mobile menu
*/

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const isOpen =
        navLinks.classList.contains("active");

    menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    menuToggle.setAttribute(
        "aria-label",
        isOpen
            ? "Close navigation menu"
            : "Open navigation menu"
    );

});


/*
    Close menu after clicking a navigation link
*/

navItems.forEach((item) => {

    item.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    });

});


/*
    Close mobile menu using Escape
*/

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        navLinks.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    }

});


/* =========================================
   CURRENT YEAR
========================================= */

const currentYear =
    document.querySelector("#current-year");

currentYear.textContent =
    new Date().getFullYear();


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.querySelector("#contact-form");

const nameInput =
    document.querySelector("#name");

const emailInput =
    document.querySelector("#email");

const messageInput =
    document.querySelector("#message");

const formMessage =
    document.querySelector("#form-message");

const characterCount =
    document.querySelector("#character-count");


/*
    Character counter
*/

messageInput.addEventListener("input", () => {

    const currentLength =
        messageInput.value.length;

    characterCount.textContent =
        `${currentLength} / 500`;

});


/*
    Form submission
*/

contactForm.addEventListener("submit", (event) => {

    /*
        Prevent the browser's default
        form submission behavior.
    */

    event.preventDefault();


    /*
        Get and clean user input.
    */

    const name =
        nameInput.value.trim();

    const email =
        emailInput.value.trim();

    const message =
        messageInput.value.trim();


    /*
        Clear previous message.
    */

    formMessage.textContent = "";


    /*
        Validate name.
    */

    if (!name) {

        formMessage.textContent =
            "Please enter your name.";

        nameInput.focus();

        return;
    }


    /*
        Validate email.
    */

    if (!email) {

        formMessage.textContent =
            "Please enter your email.";

        emailInput.focus();

        return;
    }


    /*
        Basic email format validation.
    */

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        formMessage.textContent =
            "Please enter a valid email address.";

        emailInput.focus();

        return;
    }


    /*
        Validate message.
    */

    if (!message) {

        formMessage.textContent =
            "Please enter your message.";

        messageInput.focus();

        return;
    }


    /*
        Success message.

        NOTE:
        This is frontend-only.
        It does not send an actual email.
    */

    formMessage.textContent =
        "Thanks! Your message has been received.";


    /*
        Clear the form.
    */

    contactForm.reset();


    /*
        Reset character counter.
    */

    characterCount.textContent =
        "0 / 500";

});