document.addEventListener("DOMContentLoaded", function () {
    let menuItems = document.querySelectorAll("li.menu-item-has-children > a");
    menuItems.forEach(item => {
        item.addEventListener("mouseenter", function () {
            this.closest('li').classList.add("active");
        });

        item.closest('li').addEventListener("mouseleave", function () {
            this.classList.remove("active");
        });

    });

    document.querySelector(".hamburger").addEventListener("click", function () {
        document.body.classList.toggle("menu-active");
    });
});
