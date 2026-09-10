/* =========================================================
   SERVICES.JS
   Dynamic Service Controller
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    initializeServices();

});


/* =========================================================
   INITIALIZE SERVICES
========================================================= */

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

    loadServiceMegaMenu();

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

    serviceCards.forEach(function (card) {

        const category =
            card.dataset.serviceCategory;

        const service =
            SITE_CONFIG.services[category];

        if (!service) {

            return;

        }


        /* SERVICE TITLE */

        const title =
            card.querySelector(
                "[data-service-title]"
            );

        if (title) {

            title.textContent =
                service.title;

        }


        /* SERVICE DESCRIPTION */

        const description =
            card.querySelector(
                "[data-service-description]"
            );

        if (
            description &&
            service.description
        ) {

            description.textContent =
                service.description;

        }


        /* SERVICE LIST */

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

                    if (
                        typeof item === "object"
                    ) {

                        li.textContent =
                            item.title;

                    }

                    else {

                        li.textContent =
                            item;

                    }

                    list.appendChild(li);

                }
            );

        }

    });

}


/* =========================================================
   SERVICE NAVIGATION
========================================================= */

function loadServiceNavigation() {

    const containers =
        document.querySelectorAll(
            "[data-service-navigation]"
        );

    if (!containers.length) {

        return;

    }

    containers.forEach(function (container) {

        container.innerHTML = "";

        Object.keys(
            SITE_CONFIG.services
        ).forEach(function (category) {

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

        });

    });

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

    containers.forEach(function (container) {

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
            function (item) {

                const li =
                    document.createElement(
                        "li"
                    );

                if (
                    typeof item === "object"
                ) {

                    li.textContent =
                        item.title;

                }

                else {

                    li.textContent =
                        item;

                }

                container.appendChild(
                    li
                );

            }
        );

    });

}


/* =========================================================
   SERVICE MEGA MENU
========================================================= */

function loadServiceMegaMenu() {

    const menus =
        document.querySelectorAll(
            "[data-service-mega-menu]"
        );

    if (!menus.length) {

        return;

    }

    menus.forEach(function (menu) {

        menu.innerHTML = "";

        Object.keys(
            SITE_CONFIG.services
        ).forEach(function (category) {

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


            /* COLUMN TITLE */

            const heading =
                document.createElement(
                    "h3"
                );

            heading.textContent =
                service.title;

            column.appendChild(
                heading
            );


            /* SERVICE ITEMS */

            if (
                Array.isArray(
                    service.services
                )
            ) {

                service.services.forEach(
                    function (item) {

                        const link =
                            document.createElement(
                                "a"
                            );

                        link.href =
                            "services.html#" +
                            category;

                        link.textContent =
                            typeof item === "object"
                                ? item.title
                                : item;

                        column.appendChild(
                            link
                        );

                    }
                );

            }

            menu.appendChild(
                column
            );

        });

    });

}


/* =========================================================
   DETAILED SERVICE CONTENT
========================================================= */

function loadDetailedServices() {

    const containers =
        document.querySelectorAll(
            "[data-detailed-services]"
        );

    if (!containers.length) {

        return;

    }

    containers.forEach(function (container) {

        const category =
            container.dataset
                .detailedServices;

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
            function (item) {

                const card =
                    document.createElement(
                        "article"
                    );

                card.classList.add(
                    "detail-card"
                );


                /* TITLE */

                const title =
                    document.createElement(
                        "h3"
                    );

                title.textContent =
                    typeof item === "object"
                        ? item.title
                        : item;

                card.appendChild(
                    title
                );


                /* DESCRIPTION */

                if (
                    typeof item === "object" &&
                    item.description
                ) {

                    const description =
                        document.createElement(
                            "p"
                        );

                    description.textContent =
                        item.description;

                    card.appendChild(
                        description
                    );

                }


                /* SUB-SERVICES */

                if (
                    typeof item === "object" &&
                    Array.isArray(
                        item.subServices
                    )
                ) {

                    const list =
                        document.createElement(
                            "ul"
                        );

                    item.subServices.forEach(
                        function (subService) {

                            const li =
                                document.createElement(
                                    "li"
                                );

                            li.textContent =
                                subService;

                            list.appendChild(
                                li
                            );

                        }
                    );

                    card.appendChild(
                        list
                    );

                }


                container.appendChild(
                    card
                );

            }
        );

    });

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
    ).forEach(function (category) {

        const service =
            SITE_CONFIG.services[
                category
            ];


        /* CATEGORY SEARCH */

        if (
            service.title &&
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


        /* SERVICE SEARCH */

        if (
            Array.isArray(
                service.services
            )
        ) {

            service.services.forEach(
                function (item) {

                    const title =
                        typeof item === "object"
                            ? item.title
                            : item;


                    if (
                        title &&
                        title
                            .toLowerCase()
                            .includes(term)
                    ) {

                        results.push({

                            category:
                                category,

                            title:
                                title,

                            type:
                                "service"

                        });

                    }


                    /* SUB-SERVICE SEARCH */

                    if (
                        typeof item === "object" &&
                        Array.isArray(
                            item.subServices
                        )
                    ) {

                        item.subServices.forEach(
                            function (subService) {

                                if (
                                    subService
                                        .toLowerCase()
                                        .includes(term)
                                ) {

                                    results.push({

                                        category:
                                            category,

                                        parentService:
                                            title,

                                        title:
                                            subService,

                                        type:
                                            "sub-service"

                                    });

                                }

                            }
                        );

                    }

                }
            );

        }

    });


    return results;

}


/* =========================================================
   SERVICE COUNTER
========================================================= */

function getServiceCount() {

    let count = 0;

    Object.keys(
        SITE_CONFIG.services
    ).forEach(function (category) {

        const service =
            SITE_CONFIG.services[
                category
            ];

        if (
            !Array.isArray(
                service.services
            )
        ) {

            return;

        }

        service.services.forEach(
            function (item) {

                count++;

                if (
                    typeof item === "object" &&
                    Array.isArray(
                        item.subServices
                    )
                ) {

                    count +=
                        item.subServices.length;

                }

            }
        );

    });

    return count;

}


/* =========================================================
   GET SERVICE CATEGORY
========================================================= */

function getServiceCategory(
    category
) {

    if (
        typeof SITE_CONFIG === "undefined" ||
        !SITE_CONFIG.services
    ) {

        return null;

    }

    return SITE_CONFIG.services[
        category
    ] || null;

}


/* =========================================================
   GET ALL SERVICE CATEGORIES
========================================================= */

function getAllServiceCategories() {

    if (
        typeof SITE_CONFIG === "undefined" ||
        !SITE_CONFIG.services
    ) {

        return [];

    }

    return Object.keys(
        SITE_CONFIG.services
    );

}


/* =========================================================
   INITIALIZE DETAILED SERVICES
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadDetailedServices();

    }
);
