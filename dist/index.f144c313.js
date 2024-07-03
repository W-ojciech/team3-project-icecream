(()=>{
    const refs = {
        openModalBtn: document.querySelector("[francise-modal-open]"),
        closeModalBtn: document.querySelector("[francise-modal-close]"),
        modal: document.querySelector("[francise-modal]")
    };
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
})();

//# sourceMappingURL=index.f144c313.js.map
