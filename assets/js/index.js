function openNav() {
    document.getElementById("mySidenav").classList.add("opened");
    document.getElementById("backdrop").classList.add("menu-open");
}

function closeNav() {
    document.getElementById("mySidenav").classList.remove("opened");
    document.getElementById("backdrop").classList.remove("menu-open");
}


function handleIntersect(entries) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > 0.8) {
            entry.target.classList.add('animate');
        }
    })
}

window.addEventListener("load", function () {
    const animateThese = document.querySelectorAll("article.skills div span:nth-child(2)");
    const observer = new IntersectionObserver(handleIntersect, {
        root: null,
        rootMargin: '0px',
        threshold: 1,
    });
    animateThese.forEach((animateThis) => {
        observer.observe(animateThis);
    });
}, false);
