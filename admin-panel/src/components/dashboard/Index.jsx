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
                fontFamily: "Plus Jakarta Sans', sans-serif",
                foreColor: "#adb0bb",
                height: 320,
                stacked: true,
            },
            colors: ["var(--bs-primary)", "var(--bs-secondary)"],
            plotOptions: {
                bar: {
                    horizontal: false,
                    barHeight: "60%",
                    columnWidth: "20%",
                    borderRadius: [6],
                    borderRadiusApplication: "end",
                    borderRadiusWhenStacked: "all",
                },
            },
            dataLabels: {
                enabled: false,
            },
            legend: {
                show: false,
            },
            grid: {
                borderColor: "rgba(0,0,0,0.1)",
                strokeDashArray: 3,
                xaxis: {
                    lines: {
                        show: false,
                    },
                },
            },
            yaxis: {
                min: -5,
                max: 5,
                tickAmount: 4,
                title: {
                    // text: "Age",
                },
            },
            xaxis: {
                axisBorder: {
                    show: false,
                },
                categories: [
                    "16/08",
                    "17/08",
                    "18/08",
                    "19/08",
                    "20/08",
                    "21/08",
                    "22/08",
                ],
            },
            tooltip: {
                theme: "dark",
            }
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