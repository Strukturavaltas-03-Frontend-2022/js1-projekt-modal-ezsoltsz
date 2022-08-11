'use strict'
const opModal = document.querySelector(".open__modal");
const modalBground = document.querySelector(".modal__bground");
const modalcontainer = document.querySelector(".container");
const exitButton = document.querySelector(".button__exit");
const okayButton = document.querySelector(".modal__buttonf .button__agree");
const cancelButton = document.querySelector(".modal__buttonf .button__back");

opModal.addEventListener('click', function () {
    modalBground.classList.add('modal__bground--active');
});
exitButton.addEventListener('click', function () {
    modalBground.classList.remove('modal__bground--active');
    });
    cancelButton.addEventListener('click', function () {
        modalBground.classList.remove('modal__bground--active');
        });
        okayButton.addEventListener('click', function () {
            modalBground.classList.remove('modal__bground--active');
            });