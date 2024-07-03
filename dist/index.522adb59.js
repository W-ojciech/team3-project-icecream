(()=>{
    const refs = {
        openModalBtn: document.querySelector("[buy-now-modal1-open]"),
        closeModalBtn: document.querySelector("[buy-now-modal1-close]"),
        modal: document.querySelector("[buy-now-modal1]")
    };
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
})();

//# sourceMappingURL=index.522adb59.js.map
