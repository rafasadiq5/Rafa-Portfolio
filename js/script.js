/* =========================================================
   RAFA PORTFOLIO
   Main JavaScript
========================================================= */


/* =========================================================
   WORKS DATA
========================================================= */

const collections = {

    paintings: {
        eyebrow: "01 / PAINTINGS",
        title: "اللوحات",
        description: "مجموعة من لوحاتي وتجربتي في الرسم والخامات المختلفة.",
        works: [
            {
                title: "لوحة 01",
                year: "2026",
                image: "assets/works/paintings/painting-01.jpg"
            },
            {
                title: "لوحة 02",
                year: "2026",
                image: "assets/works/paintings/painting-02.jpg"
            },
            {
                title: "لوحة 03",
                year: "2026",
                image: "assets/works/paintings/painting-03.jpg"
            }
        ]
    },

    watercolor: {
        eyebrow: "02 / WATERCOLOR",
        title: "الألوان المائية",
        description: "تجارب بالألوان المائية، الضوء، الشفافية واللون.",
        works: [
            {
                title: "ألوان مائية 01",
                year: "2026",
                image: "assets/works/watercolor/watercolor-01.jpg"
            },
            {
                title: "ألوان مائية 02",
                year: "2026",
                image: "assets/works/watercolor/watercolor-02.jpg"
            },
            {
                title: "ألوان مائية 03",
                year: "2026",
                image: "assets/works/watercolor/watercolor-03.jpg"
            }
        ]
    },

    digital: {
        eyebrow: "03 / DIGITAL ART",
        title: "الفن الرقمي",
        description: "رسومات وتجارب بصرية رقمية تجمع بين الرسم والتقنية.",
        works: [
            {
                title: "عمل رقمي 01",
                year: "2026",
                image: "assets/works/digital/digital-01.jpg"
            },
            {
                title: "عمل رقمي 02",
                year: "2026",
                image: "assets/works/digital/digital-02.jpg"
            },
            {
                title: "عمل رقمي 03",
                year: "2026",
                image: "assets/works/digital/digital-03.jpg"
            }
        ]
    },

    ceramics: {
        eyebrow: "04 / CERAMICS",
        title: "السيراميك والطين",
        description: "أعمال وتجارب صنعتها بالطين والسيراميك.",
        works: [
            {
                title: "قطعة طينية 01",
                year: "2026",
                image: "assets/works/ceramics/ceramic-01.jpg"
            },
            {
                title: "قطعة طينية 02",
                year: "2026",
                image: "assets/works/ceramics/ceramic-02.jpg"
            },
            {
                title: "قطعة طينية 03",
                year: "2026",
                image: "assets/works/ceramics/ceramic-03.jpg"
            }
        ]
    },

    handmade: {
        eyebrow: "05 / HANDMADE",
        title: "أعمال يدوية",
        description: "أشياء وتجارب صنعتها بيدي باستخدام خامات مختلفة.",
        works: [
            {
                title: "عمل يدوي 01",
                year: "2026",
                image: "assets/works/handmade/handmade-01.jpg"
            },
            {
                title: "عمل يدوي 02",
                year: "2026",
                image: "assets/works/handmade/handmade-02.jpg"
            },
            {
                title: "عمل يدوي 03",
                year: "2026",
                image: "assets/works/handmade/handmade-03.jpg"
            }
        ]
    },

    code: {
        eyebrow: "06 / CODE",
        title: "المشاريع البرمجية",
        description: "مشاريعي البرمجية وتجارب تصميم وتطوير الويب.",
        works: [
            {
                title: "مشروع برمجي 01",
                year: "2026",
                image: "assets/works/code/code-01.jpg"
            },
            {
                title: "مشروع برمجي 02",
                year: "2026",
                image: "assets/works/code/code-02.jpg"
            },
            {
                title: "مشروع برمجي 03",
                year: "2026",
                image: "assets/works/code/code-03.jpg"
            }
        ]
    }

};


/* =========================================================
   MOBILE MENU
========================================================= */


const menuButton = document.getElementById("menuButton");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {

    menuButton.addEventListener("click", () => {

        navLinks.classList.toggle("open");
        menuButton.classList.toggle("active");

    });

}


/* =====================================================
   CLOSE MOBILE MENU AFTER CLICK
===================================================== */

if (navLinks) {

    const links = navLinks.querySelectorAll("a");

    links.forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");

            if (menuButton) {
                menuButton.classList.remove("active");
            }

        });

    });

}


/* =====================================================
   SMOOTH SCROLL
===================================================== */

const internalLinks = document.querySelectorAll(
    'a[href^="#"]'
);

internalLinks.forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */

const navbar = document.querySelector(".navbar");

if (navbar) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    });

}


/* =========================================================
   OPEN COLLECTION
========================================================= */

function openCollection(collectionName) {

    const collection = collections[collectionName];

    const categories =
        document.querySelector(".work-categories");

    const collectionView =
        document.getElementById("collectionView");

    const collectionEyebrow =
        document.getElementById("collectionEyebrow");

    const collectionTitle =
        document.getElementById("collectionTitle");

    const collectionDescription =
        document.getElementById("collectionDescription");

    const gallery =
        document.getElementById("collectionGallery");


    if (!collection) {

        console.error(
            "Collection not found:",
            collectionName
        );

        return;

    }


    if (
        !categories ||
        !collectionView ||
        !collectionEyebrow ||
        !collectionTitle ||
        !collectionDescription ||
        !gallery
    ) {

        console.error(
            "Some collection elements are missing from HTML."
        );

        return;

    }


    /* Update collection information */

    collectionEyebrow.textContent =
        collection.eyebrow;

    collectionTitle.textContent =
        collection.title;

    collectionDescription.textContent =
        collection.description;


    /* Remove old works */

    gallery.innerHTML = "";


    /* Create works */

    collection.works.forEach(function (work) {

        const article =
            document.createElement("article");

        article.className =
            "collection-item";


        article.innerHTML =
            '<div class="collection-item-image">' +

                '<img ' +
                    'src="' + work.image + '" ' +
                    'alt="' + work.title + '" ' +
                    'loading="lazy"' +
                '>' +

            '</div>' +

            '<div class="collection-item-info">' +

                '<h3>' +
                    work.title +
                '</h3>' +

                '<span>' +
                    work.year +
                '</span>' +

            '</div>';


        gallery.appendChild(article);

    });


    /* Hide categories */

    categories.style.display = "none";


    /* Show collection */

    collectionView.classList.add("open");


    /* Scroll to collection */

    setTimeout(function () {

        collectionView.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 100);

}


/* =========================================================
   CLOSE COLLECTION
========================================================= */

function closeCollection() {

    const categories =
        document.querySelector(".work-categories");
        const collectionView =
        document.getElementById("collectionView");


    if (!categories || !collectionView) {

        return;

    }


    /* Close collection */

    collectionView.classList.remove("open");


    /* Show categories */

    categories.style.display = "grid";


    /* Scroll back to works */

    setTimeout(function () {

        const worksSection =
            document.getElementById("works");

        if (worksSection) {

            worksSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    }, 100);

}


/* =========================================================
   IMAGE ERROR HANDLING
========================================================= */

document.addEventListener("error", function (event) {

    if (event.target.tagName === "IMG") {

        event.target.classList.add("image-error");

    }

}, true);


/* =========================================================
   TEST MESSAGE
========================================================= */

console.log(
    "RAFA Portfolio JavaScript loaded successfully."
);