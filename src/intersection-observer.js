const about = document.querySelector(".about-container");

const options = {
    root: null, // null means the viewport, default setting is null
    threshold: 0,
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        console.log(entry.target);
    })
}, options);

observer.observe(about);