document.addEventListener("DOMContentLoaded", () => {

    /* ================================
       BOOT SCREEN
    ================================= */

    const boot = document.getElementById("boot");
    const enter = document.getElementById("enter");

    function closeBoot() {

        if (!boot) {
            return;
        }

        boot.classList.add("hide");

        setTimeout(() => {

            if (boot) {
                boot.remove();
            }

        }, 650);

    }


    if (enter) {

        enter.addEventListener(
            "click",
            closeBoot
        );

    }


    setTimeout(() => {

        closeBoot();

    }, 3200);


    /* ================================
       THEME
    ================================= */

    const theme =
        document.getElementById("theme");


    if (theme) {

        theme.addEventListener(
            "click",
            () => {

                document.body.classList.toggle(
                    "light"
                );

                localStorage.setItem(
                    "raj-theme",
                    document.body.classList.contains("light")
                        ? "light"
                        : "dark"
                );

            }
        );

    }


    const savedTheme =
        localStorage.getItem("raj-theme");


    if (savedTheme === "light") {

        document.body.classList.add("light");

    }


    /* ================================
       MOBILE MENU
    ================================= */

    const menu =
        document.getElementById("menu");

    const nav =
        document.getElementById("nav");


    if (menu && nav) {

        menu.addEventListener(
            "click",
            () => {

                nav.classList.toggle("open");

            }
        );


        document.querySelectorAll(
            "nav a"
        ).forEach((link) => {

            link.addEventListener(
                "click",
                () => {

                    nav.classList.remove("open");

                }
            );

        });


        window.addEventListener(
            "resize",
            () => {

                if (window.innerWidth > 850) {

                    nav.classList.remove("open");

                }

            }
        );

    }


    /* ================================
       PROJECT / SECTION LINKS
    ================================= */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach((link) => {

        link.addEventListener(
            "click",
            (event) => {

                const targetId =
                    link.getAttribute("href");


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


                if (!target) {
                    return;
                }


                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });


    /* ================================
       EMAIL PROTECTION
    ================================= */

    document.querySelectorAll(
        'a[href^="mailto:"]'
    ).forEach((emailLink) => {

        emailLink.addEventListener(
            "click",
            () => {

                console.log(
                    "Secure email channel opened."
                );

            }
        );

    });

});
