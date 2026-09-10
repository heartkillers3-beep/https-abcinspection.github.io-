/* =========================================================
   SERVICES.JS
   Dynamic Service Controller
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    initializeServices();

});


function initializeServices() {

    if (
        typeof SITE_CONFIG === "undefined" ||
        !SITE_CONFIG.services
    ) {

        console.warn(
            "SITE_CONFIG or services configuration not found."
        );

        return;

    }

    loadServiceOverview();

    loadServiceNavigation();

    loadServiceLists();

}


/* =========================================================
   SERVICE OVERVIEW
========================================================= */

function loadServiceOverview() {

    const serviceCards =
        document.querySelectorAll(
            "[data-service-category]"
        );

    if (!serviceCards.length) {

        return;

    }

    serviceCards.forEach(
        function (card) {

            const category =
                card.dataset.serviceCategory;

            const service =
                SITE_CONFIG.services[category];

            if (!service) {

                return;

            }

            const title =
                card.querySelector(
                    "[data-service-title]"
                );

            const description =
                card.querySelector(
                    "[data-service-description]"
                );

            if (title) {

                title.textContent =
                    service.title;

            }

            if (description) {

                description.textContent =
                    service.description;

            }

            const list =
                card.querySelector(
                    "[data-service-list]"
                );

            if (
                list &&
                Array.isArray(service.services)
            ) {

                list.innerHTML = "";

                service.services.forEach(
                    function (item) {

                        const li =
                            document.createElement(
                                "li"
                            );

                        li.textContent =
                            item;

                        list.appendChild(li);

                    }
                );

            }

        }
    );

}


/* =========================================================
   SERVICE NAVIGATION
========================================================= */

function loadServiceNavigation() {

    const navigationContainers =
        document.querySelectorAll(
            "[data-service-navigation]"
        );

    if (!navigationContainers.length) {

        return;

    }

    navigationContainers.forEach(
        function (container) {

            container.innerHTML = "";

            Object.keys(
                SITE_CONFIG.services
            ).forEach(
                function (category) {

                    const service =
                        SITE_CONFIG.services[
                            category
                        ];

                    const link =
                        document.createElement(
                            "a"
                        );

                    link.href =
                        "services.html#" +
                        category;

                    link.textContent =
                        service.title;

                    link.classList.add(
                        "service-nav-link"
                    );

                    container.appendChild(
                        link
                    );

                }
            );

        }
    );

}


/* =========================================================
   SERVICE LISTS
========================================================= */

function loadServiceLists() {

    const containers =
        document.querySelectorAll(
            "[data-service-list-category]"
        );

    if (!containers.length) {

        return;

    }

    containers.forEach(
        function (container) {

            const category =
                container.dataset
                    .serviceListCategory;

            const service =
                SITE_CONFIG.services[
                    category
                ];

            if (!service) {

                return;

            }

            container.innerHTML = "";

            if (
                !Array.isArray(
                    service.services
                )
            ) {

                return;

            }

            service.services.forEach(
                function (serviceName) {

                    const item =
                        document.createElement(
                            "li"
                        );

                    item.textContent =
                        serviceName;

                    container.appendChild(
                        item
                    );

                }
            );

        }
    );

}


/* =========================================================
   SERVICE DROPDOWN / MEGA MENU
========================================================= */

function loadServiceMegaMenu() {

    const menu =
        document.querySelector(
            "[data-service-mega-menu]"
        );

    if (!menu) {

        return;

    }

    menu.innerHTML = "";

    Object.keys(
        SITE_CONFIG.services
    ).forEach(
        function (category) {

            const service =
                SITE_CONFIG.services[
                    category
                ];

            const column =
                document.createElement(
                    "div"
                );

            column.classList.add(
                "mega-menu-column"
            );

            const heading =
                document.createElement(
                    "h3"
                );

            heading.textContent =
                service.title;

            column.appendChild(
                heading
            );

            if (
                Array.isArray(
                    service.services
                )
            ) {

                const list =
                    document.createElement(
                        "ul"
                    );

                service.services.forEach(
                    function (serviceName) {

                        const item =
                            document.createElement(
                                "li"
                            );

                        const link =
                            document.createElement(
                                "a"
                            );

                        link.href =
                            "services.html#" +
                            category;

                        link.textContent =
                            serviceName;

                        item.appendChild(
                            link
                        );

                        list.appendChild(
                            item
                        );

                    }
                );

                column.appendChild(
                    list
                );

            }

            menu.appendChild(
                column
            );

        }
    );

}


/* =========================================================
   SERVICE SEARCH
========================================================= */

function searchServices(
    searchTerm
) {

    if (
        typeof searchTerm !== "string"
    ) {

        return [];

    }

    const term =
        searchTerm
            .trim()
            .toLowerCase();

    if (!term) {

        return [];

    }

    const results = [];

    Object.keys(
        SITE_CONFIG.services
    ).forEach(
        function (category) {

            const service =
                SITE_CONFIG.services[
                    category
                ];

            if (
                service.title
                    .toLowerCase()
                    .includes(term)
            ) {

                results.push({
                    category:
                        category,

                    title:
                        service.title,

                    type:
                        "category"

                });

            }

            if (
                Array.isArray(
                    service.services
                )
            ) {

                service.services.forEach(
                    function (serviceName) {

                        if (
                            serviceName
                                .toLowerCase()
                                .includes(term)
                        ) {

                            results.push({
                                category:
                                    category,

                                title:
                                    serviceName,

                                type:
                                    "service"

                            });

                        }

                    }
                );

            }

        }
    );

    return results;

}


/* =========================================================
   SERVICE COUNTER
========================================================= */

function getServiceCount() {

    let count = 0;

    Object.keys(
        SITE_CONFIG.services
    ).forEach(
        function (category) {

            const service =
                SITE_CONFIG.services[
                    category
                ];

            if (
                Array.isArray(
                    service.services
                )
            ) {

                count +=
                    service.services.length;

            }

        }
    );

    return count;

}


/* =========================================================
   INITIALIZE OPTIONAL FEATURES
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadServiceMegaMenu();

    }
);
