/* =========================================================
   MAIN.JS
   Central Website Controller
========================================================= */


/* =========================================================
   WAIT FOR PAGE TO LOAD
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    initializeWebsite();

});


/* =========================================================
   MAIN INITIALIZATION
========================================================= */

function initializeWebsite() {

    loadCompanyInformation();

    loadBranding();

    loadSocialLinks();

    loadContactInformation();

    loadCopyrightYear();

    initializeMobileMenu();

    initializeSmoothScroll();

}


/* =========================================================
   COMPANY INFORMATION
========================================================= */

function loadCompanyInformation() {

    if (
        typeof SITE_CONFIG === "undefined" ||
        !SITE_CONFIG.company
    ) {

        console.warn(
            "SITE_CONFIG or company configuration not found."
        );

        return;

    }


    const company =
        SITE_CONFIG.company;


    /* Company Name */

    const companyName =
        document.getElementById(
            "company-name"
        );

    if (companyName) {

        companyName.textContent =
            company.name;

    }


    /* Company Name - Introduction */

    const introCompanyName =
        document.getElementById(
            "intro-company-name"
        );

    if (introCompanyName) {

        introCompanyName.textContent =
            company.name;

    }


    /* Company Name - Footer */

    const footerCompanyName =
        document.getElementById(
            "footer-company-name"
        );

    if (footerCompanyName) {

        footerCompanyName.textContent =
            company.shortName ||
            company.name;

    }


    /* Copyright */

    const copyrightCompany =
        document.getElementById(
            "copyright-company"
        );

    if (copyrightCompany) {

        copyrightCompany.textContent =
            company.name;

    }


    /* Tagline */

    const companyTagline =
        document.getElementById(
            "company-tagline"
        );

    if (companyTagline) {

        companyTagline.textContent =
            company.tagline;

    }


    /* Hero Description */

    const heroDescription =
        document.getElementById(
            "hero-description"
        );

    if (
        heroDescription &&
        company.description
    ) {

        heroDescription.textContent =
            company.description;

    }


    /* Footer Description */

    const footerDescription =
        document.getElementById(
            "footer-description"
        );

    if (
        footerDescription &&
        company.description
    ) {

        footerDescription.textContent =
            company.description;

    }


    /* Page Title */

    document.title =
        company.name +
        " | " +
        company.tagline;


    /* Logo */

    const logoElements =
        document.querySelectorAll(
            "#site-logo, #footer-logo"
        );


    logoElements.forEach(
        function (logo) {

            if (company.logo) {

                logo.src =
                    company.logo;

            }

            logo.alt =
                company.name +
                " Logo";

        }
    );

}


/* =========================================================
   BRANDING
========================================================= */

function loadBranding() {

    if (
        typeof SITE_CONFIG === "undefined" ||
        !SITE_CONFIG.branding
    ) {

        return;

    }


    const branding =
        SITE_CONFIG.branding;


    const root =
        document.documentElement;


    if (branding.primary) {

        root.style.setProperty(
            "--primary",
            branding.primary
        );

    }


    if (branding.secondary) {

        root.style.setProperty(
            "--secondary",
            branding.secondary
        );

    }


    if (branding.accent) {

        root.style.setProperty(
            "--accent",
            branding.accent
        );

    }


    if (branding.light) {

        root.style.setProperty(
            "--light",
            branding.light
        );

    }

}


/* =========================================================
   CONTACT INFORMATION
========================================================= */

function loadContactInformation() {

    if (
        typeof SITE_CONFIG === "undefined" ||
        !SITE_CONFIG.contact
    ) {

        return;

    }


    const contact =
        SITE_CONFIG.contact;


    /* =====================================================
       EMAIL
    ===================================================== */

    const email =
        document.getElementById(
            "footer-email"
        );


    if (
        email &&
        contact.email
    ) {

        email.textContent =
            contact.email;

        email.href =
            "mailto:" +
            contact.email;

    }


    /* =====================================================
       PHONE
    ===================================================== */

    const phone =
        document.getElementById(
            "footer-phone"
        );


    if (
        phone &&
        contact.phone
    ) {

        phone.textContent =
            contact.phone;


        /*
         * Remove spaces and other
         * non-numeric characters
         * for telephone link.
         */

        const phoneNumber =
            contact.phone.replace(
                /[^+\d]/g,
                ""
            );


        phone.href =
            "tel:" +
            phoneNumber;

    }


    /* =====================================================
       ADDRESS
    ===================================================== */

    const address =
        document.getElementById(
            "footer-address"
        );


    if (address) {

        if (
            contact.address &&
            contact.country
        ) {

            address.textContent =
                contact.address +
                ", " +
                contact.country;

        }

        else if (contact.address) {

            address.textContent =
                contact.address;

        }

        else if (contact.country) {

            address.textContent =
                contact.country;

        }

    }

}


/* =========================================================
   SOCIAL LINKS
========================================================= */

function loadSocialLinks() {

    if (
        typeof SITE_CONFIG === "undefined" ||
        !SITE_CONFIG.social
    ) {

        return;

    }


    const social =
        SITE_CONFIG.social;


    /* =====================================================
       LINKEDIN
    ===================================================== */

    const linkedin =
        document.getElementById(
            "linkedin-link"
        );


    if (linkedin) {

        if (social.linkedin) {

            linkedin.href =
                social.linkedin;

            linkedin.style.display =
                "inline-flex";

        }

        else {

            linkedin.style.display =
                "none";

        }

    }


    /* =====================================================
       YOUTUBE
    ===================================================== */

    const youtube =
        document.getElementById(
            "youtube-link"
        );


    if (youtube) {

        if (social.youtube) {

            youtube.href =
                social.youtube;

            youtube.style.display =
                "inline-flex";

        }

        else {

            youtube.style.display =
                "none";

        }

    }


    /* =====================================================
       FACEBOOK
    ===================================================== */

    const facebook =
        document.getElementById(
            "facebook-link"
        );


    if (facebook) {

        if (facebook) {

            if (social.facebook) {

                facebook.href =
                    social.facebook;

                facebook.style.display =
                    "inline-flex";

            }

            else {

                facebook.style.display =
                    "none";

            }

        }

    }


    /* =====================================================
       INSTAGRAM
    ===================================================== */

    const instagram =
        document.getElementById(
            "instagram-link"
        );


    if (instagram) {

        if (social.instagram) {

            instagram.href =
                social.instagram;

            instagram.style.display =
                "inline-flex";

        }

        else {

            instagram.style.display =
                "none";

        }

    }

}


/* =========================================================
   COPYRIGHT YEAR
========================================================= */

function loadCopyrightYear() {

    const year =
        document.getElementById(
            "current-year"
        );


    if (year) {

        year.textContent =
            new Date().getFullYear();

    }

}


/* =========================================================
   MOBILE MENU
========================================================= */

function initializeMobileMenu() {

    const menuButton =
        document.getElementById(
            "mobile-menu-button"
        );


    const mobileNavigation =
        document.getElementById(
            "mobile-navigation"
        );


    if (
        !menuButton ||
        !mobileNavigation
    ) {

        return;

    }


    menuButton.addEventListener(
        "click",
        function () {

            mobileNavigation.classList.toggle(
                "active"
            );


            const isOpen =
                mobileNavigation.classList.contains(
                    "active"
                );


            menuButton.setAttribute(
                "aria-expanded",
                isOpen
            );


            menuButton.innerHTML =
                isOpen
                    ? "✕"
                    : "☰";

        }
    );


    /* =====================================================
       CLOSE MENU WHEN LINK IS CLICKED
    ===================================================== */

    const mobileLinks =
        mobileNavigation.querySelectorAll(
            "a"
        );


    mobileLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    mobileNavigation.classList.remove(
                        "active"
                    );


                    menuButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );


                    menuButton.innerHTML =
                        "☰";

                }
            );

        }
    );


    /* =====================================================
       CLOSE MENU WHEN CLICKING OUTSIDE
    ===================================================== */

    document.addEventListener(
        "click",
        function (event) {

            if (
                !mobileNavigation.contains(
                    event.target
                ) &&
                !menuButton.contains(
                    event.target
                )
            ) {

                mobileNavigation.classList.remove(
                    "active"
                );


                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );


                menuButton.innerHTML =
                    "☰";

            }

        }
    );

}


/* =========================================================
   SMOOTH SCROLL
========================================================= */

function initializeSmoothScroll() {

    const anchorLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    anchorLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        this.getAttribute(
                            "href"
                        );


                    if (
                        !targetId ||
                        targetId === "#"
                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (target) {

                        event.preventDefault();


                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                }
            );

        }
    );

}


/* =========================================================
   EXTERNAL LINKS
========================================================= */

function initializeExternalLinks() {

    const links =
        document.querySelectorAll(
            'a[href^="http"]'
        );


    links.forEach(
        function (link) {

            link.target =
                "_blank";

            link.rel =
                "noopener noreferrer";

        }
    );

}


/* =========================================================
   IMAGE ERROR HANDLING
========================================================= */

function initializeImageFallbacks() {

    const images =
        document.querySelectorAll(
            "img"
        );


    images.forEach(
        function (image) {

            image.addEventListener(
                "error",
                function () {

                    /*
                     * Prevent endless
                     * fallback loops.
                     */

                    if (
                        this.dataset.fallbackApplied
                    ) {

                        return;

                    }


                    this.dataset.fallbackApplied =
                        "true";


                    /*
                     * Hide broken image
                     * instead of showing
                     * browser error icon.
                     */

                    this.style.display =
                        "none";

                }
            );

        }
    );

}


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

function initializeActiveNavigation() {

    const currentPage =
        window.location.pathname
            .split("/")
            .pop();


    const navigationLinks =
        document.querySelectorAll(
            ".main-navigation a"
        );


    navigationLinks.forEach(
        function (link) {

            const href =
                link
                    .getAttribute("href")
                    .split("/")
                    .pop();


            if (
                href === currentPage
            ) {

                link.classList.add(
                    "active"
                );

            }

        }
    );

}


/* =========================================================
   PAGE SCROLL EFFECT
========================================================= */

function initializeHeaderScrollEffect() {

    const header =
        document.querySelector(
            ".site-header"
        );


    if (!header) {

        return;

    }


    window.addEventListener(
        "scroll",
        function () {

            if (
                window.scrollY > 20
            ) {

                header.classList.add(
                    "scrolled"
                );

            }

            else {

                header.classList.remove(
                    "scrolled"
                );

            }

        }
    );

}


/* =========================================================
   INITIALIZE OPTIONAL FEATURES
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        initializeExternalLinks();

        initializeImageFallbacks();

        initializeActiveNavigation();

        initializeHeaderScrollEffect();

    }
);
