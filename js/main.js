document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".hamburger").addEventListener("click", function () {
        document.body.classList.toggle("menu-active");
    });

    let menuItems = document.querySelectorAll("li.menu-item-has-children > a");
    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            this.closest('li.menu-item-has-children').classList.add("show");
        });

        item.addEventListener("mouseenter", function () {
            this.closest('li').classList.add("active");
        });

        item.closest('li').addEventListener("mouseleave", function () {
            this.classList.remove("active");
        });

    });

    let backBtns = document.querySelectorAll(".back-btn");
    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            this.closest('li.menu-item-has-children').classList.remove("show");
        });
    })

});
