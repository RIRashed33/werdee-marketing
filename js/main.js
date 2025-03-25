document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".hamburger").addEventListener("click", function () {
        document.body.classList.toggle("menu-active");
    });

    function addHoverEvent(event) {
        let item = event.currentTarget;
        item.closest("li").classList.add("active");
    }
    
    function removeHoverEvent(event) {
        let item = event.currentTarget;
        item.closest("li").classList.remove("active");
    }
    
    function addClickEvent(event) {
        event.preventDefault();
        let item = event.currentTarget;
        item.closest("li.menu-item-has-children").classList.toggle("active");
    }
    
    let menuItems = document.querySelectorAll("li.menu-item-has-children > a");
    function resizeHandleEvents() {
        let windowWidth = window.innerWidth;
        menuItems.forEach(item => {
            let parentLi = item.closest("li.menu-item-has-children");
    
            item.removeEventListener("click", addClickEvent);
            item.removeEventListener("mouseenter", addHoverEvent);
            parentLi.removeEventListener("mouseleave", removeHoverEvent);
    
            if (windowWidth > 991) {
                item.addEventListener("mouseenter", addHoverEvent);
                parentLi.addEventListener("mouseleave", removeHoverEvent);
            } else {
                item.addEventListener("click", addClickEvent);
            }
        });
    }
    resizeHandleEvents();

    let lastWindowWidth = window.innerWidth;
    window.addEventListener("resize", function () {
        let currentWindowWidth = window.innerWidth;
        
        if ((lastWindowWidth > 991 && currentWindowWidth < 992) || (lastWindowWidth < 992 && currentWindowWidth > 991)) {
            lastWindowWidth = currentWindowWidth;
            resizeHandleEvents();
        }
    });

    let backBtns = document.querySelectorAll(".back-btn");
    backBtns.forEach(item => {
        item.addEventListener("click", addClickEvent);
    })

    document.getElementById("pricing_toggle").addEventListener("change", function () {
        this.parentElement.classList.toggle("active");
    });

    document.getElementById("pricing_toggle").addEventListener("change", function () {
        let text = document.querySelector(".pricing-toggle-switch .toggle-text");
        text.innerHTML = this.checked ? "Yearly" : "Monthly";
        if(this.checked){
            document.querySelector(".pricing-html .yearly-price").classList.add("active");
            document.querySelector(".pricing-html .monthly-price").classList.remove("active");
        }else{
            document.querySelector(".pricing-html .monthly-price").classList.add("active");
            document.querySelector(".pricing-html .yearly-price").classList.remove("active");
        }
    });
      
});

(function($){
    $(document).ready(function ($) {
        var content_with_image_carousel = $("#content_with_image_carousel");
        content_with_image_carousel.owlCarousel({
            loop: false,
            autoWidth: true,
            nav: false,
            dots: false,
            responsive : {
                0 : {
                    margin : 24,
                },
                575 : {
                    margin : 60,
                }
            }
        });

        $("#content_with_image_carousel_nav .prev").click(function() {
            content_with_image_carousel.trigger("prev.owl.carousel");
        });

        $("#content_with_image_carousel_nav .next").click(function() {
            content_with_image_carousel.trigger("next.owl.carousel");
        });
    });
}(jQuery));
