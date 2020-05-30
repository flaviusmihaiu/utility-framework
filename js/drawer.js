let drawerToggles = document.querySelectorAll('*[data-toggle="drawer"]');
drawerToggles.forEach(drawerToggle => {
    if(drawerToggle.dataset.target !== null) {
        let drawerTargeted = document.querySelector('#' + drawerToggle.dataset.target + '.drawer');
        if(drawerTargeted !== null) {
            drawerToggle.addEventListener('click', () => {
                drawerTargeted.classList.toggle('visible');
                drawerTargeted.closest('.drawerBackdrop').classList.toggle('visible');
            });
        }
    }
});

let drawerCloses = document.querySelectorAll('*[data-dismiss="drawer"]');
drawerCloses.forEach(drawerClose => {
    drawerClose.addEventListener('click', () => {
        drawerClose.closest('.drawer').classList.toggle('visible');
        drawerClose.closest('.drawerBackdrop').classList.toggle('visible');
    });
});