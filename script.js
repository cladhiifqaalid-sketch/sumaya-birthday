const openBtn =
    document.getElementById("openBtn");

const surprise =
    document.getElementById("surprise");

const wishBtn =
    document.getElementById("wishBtn");

const final =
    document.getElementById("final");

const floating =
    document.getElementById("floating");



/* OPEN SURPRISE */

openBtn.addEventListener(
    "click",
    function () {

        surprise.classList.remove(
            "hidden"
        );

        openBtn.textContent =
            "Happy Birthday, Sumaya ♡";

        openBtn.disabled = true;

        celebrate(25);

    }
);



/* MAKE WISH */

wishBtn.addEventListener(
    "click",
    function () {

        final.classList.remove(
            "hidden"
        );

        wishBtn.textContent =
            "Wish sent to the stars ✨";

        wishBtn.disabled = true;

        celebrate(40);

    }
);



/* ANIMATION */

function celebrate(count) {

    const symbols = [
        "♡",
        "♥",
        "✦",
        "🌸",
        "🌷",
        "✨"
    ];


    for (
        let i = 0;
        i < count;
        i++
    ) {

        setTimeout(
            function () {

                const element =
                    document.createElement(
                        "div"
                    );


                element.className =
                    "float";


                element.textContent =
                    symbols[
                        Math.floor(
                            Math.random() *
                            symbols.length
                        )
                    ];


                element.style.left =
                    Math.random() *
                    100 +
                    "vw";


                element.style.fontSize =
                    (
                        14 +
                        Math.random() * 18
                    ) +
                    "px";


                element.style.animationDuration =
                    (
                        3 +
                        Math.random() * 2
                    ) +
                    "s";


                floating.appendChild(
                    element
                );


                setTimeout(
                    function () {

                        element.remove();

                    },
                    5500
                );

            },
            i * 55
        );

    }

}