let typed = new Typed(".auto-input", {
    strings: ["Full Stack Developer", "Backend Developer", "UX / UI Designer", "Web Application Developer", "Java Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});


// Progress bar Animation

const skillSection = document.getElementById('skills');

const progressBar = document.querySelectorAll(".progress-bar");


function showProgress() {
    progressBar.forEach(progressBar => {
        const value = progressBar.dataset.progress;

        progressBar.style.opacity = 1;
        progressBar.style.width = `${value}%`;
        progressBar.style.transition = "width .8s ease-in-out"
    });

    // console.log("showprogress");
}

function hideProgress() {

    progressBar.forEach(p => {
        p.style.opacity = 0;
        p.style.width = 0;
        p.style.transition = "width 0.5s ease-in-out";
    })

    // console.log("hide progress");
}

window.addEventListener('scroll', () => {
    const sectPos = skillSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 2;

    if (sectPos < screenPos) {
        showProgress();
    }
    else {
        hideProgress();
    }
});

// Progress bar Animation end

window.addEventListener('scroll', reveal);

function reveal() {

    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint ) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');

        }
    }
}

