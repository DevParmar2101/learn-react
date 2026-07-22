import {useEffect} from "react";
import Cards from "./partial/Cards";
import Graph from "./partial/Graph";

function Index() {
    useEffect(() => {

        const carousel = $(".counter-carousel");

        // Destroy existing carousel if it already exists
        if (carousel.hasClass("owl-loaded")) {
            carousel.trigger("destroy.owl.carousel");
            carousel.removeClass("owl-loaded");
            carousel.find(".owl-stage-outer").children().unwrap();
        }

        carousel.owlCarousel({
            loop: true,
            margin: 30,
            mouseDrag: true,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplaySpeed: 2000,
            nav: false,
            rtl: true,
            responsive: {
                0: { items: 2 },
                576: { items: 2 },
                768: { items: 3 },
                1200: { items: 5 },
                1400: { items: 6 },
            },
        });

        return () => {
            if (carousel.hasClass("owl-loaded")) {
                carousel.trigger("destroy.owl.carousel");
            }
        };

    }, []);
    return (
        <div>
            <Cards />
            <Graph />
        </div>
    );
}

export default Index;