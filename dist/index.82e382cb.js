(()=>{
    const refs = {
        openModalBtn: document.querySelector("[buy-now-modal2-open]"),
        closeModalBtn: document.querySelector("[buy-now-modal2-close]"),
        modal: document.querySelector("[buy-now-modal2]")
    };
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
})();

//# sourceMappingURL=index.82e382cb.js.map
