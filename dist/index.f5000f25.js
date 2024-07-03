(()=>{
    const refs = {
        openModalBtn: document.querySelector("[ingredients-modal-ice-coffee-open]"),
        closeModalBtn: document.querySelector("[ingredients-modal-ice-coffee-close]"),
        modal: document.querySelector("[ingredients-modal-ice-coffee]")
    };
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
})();

//# sourceMappingURL=index.f5000f25.js.map
