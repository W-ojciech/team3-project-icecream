(()=>{
    const refs = {
        openModalBtn: document.querySelector("[ingredients-modal-ice-cream-open]"),
        closeModalBtn: document.querySelector("[ingredients-modal-ice-cream-close]"),
        modal: document.querySelector("[ingredients-modal-ice-cream]")
    };
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
})();

//# sourceMappingURL=index.100f93ff.js.map
