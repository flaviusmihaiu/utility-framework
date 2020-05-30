let modalToggles = document.querySelectorAll('*[data-toggle="modal"]');
modalToggles.forEach(modalToggle => {
    if(modalToggle.dataset.target !== null) {
        let modalTargeted = document.querySelector('#' + modalToggle.dataset.target + '.modal');
        if(modalTargeted !== null) {
            modalToggle.addEventListener('click', () => {
                modalTargeted.classList.toggle('visible');
                modalTargeted.closest('.modalBackdrop').classList.toggle('visible');
            });
        }
    }
});

let modalCloses = document.querySelectorAll('*[data-dismiss="modal"]');
modalCloses.forEach(modalClose => {
    modalClose.addEventListener('click', () => {
        modalClose.closest('.modal').classList.toggle('visible');
        modalClose.closest('.modalBackdrop').classList.toggle('visible');
    });
});