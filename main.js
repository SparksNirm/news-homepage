let body = document.body;

window.addEventListener('resize', function () {
    console.log(this.window.innerWidth);
    var desktop = document.getElementById("desktopmenu");
    var mobile = document.getElementById("mobilemenu");
    if (window.innerWidth <= 1280) {
        desktop.classList.add('hidden');
        mobile.classList.remove('hidden')
    } else {
        mobile.classList.add('hidden');
        desktop.classList.remove('hidden');
    }
});