import {useEffect} from "react";
import Cards from "./partial/Cards";
import Graph from "./partial/Graph";

function Index() {
    useEffect(() => {

        //-------------------------------------
        // owl Carousal
        //-------------------------------------
        const carousel = $(".counter-carousel");
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

        //-------------------------------------
        // owl Carousal
        //-------------------------------------
        const options = {
            series: [
                {
                    name: "Earnings this month",
                    data: [1.5, 2.7, 2.2, 3.6, 1.5, 1.0],
                },
                {
                    name: "Expenses this month",
                    data: [-1.8, -1.1, -2.5, -1.5, -0.6, -1.8],
                }
            ],
            chart: {
                toolbar: {
                    show: false,
                },
                type: "bar",
                height: 320,
                stacked: true,
            },
            colors: ["var(--bs-primary)", "var(--bs-secondary)"],
            // ...rest of your options
        };

        const profitChart = new ApexCharts(
            document.querySelector("#chart"),
        options
    );

        profitChart.render();

        return () => {
            // Destroy carousel
            if (carousel.hasClass("owl-loaded")) {
                carousel.trigger("destroy.owl.carousel");
            }

            // Destroy chart
            profitChart.destroy();
        }

    }, []);
    return (
        <div>
            <Cards />
            <Graph />
        </div>
    );
}

export default Index;