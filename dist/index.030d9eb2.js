(()=>{
    const refs = {
        openModalBtn: document.querySelector("[ingredients-modal-milkshakes-open]"),
        closeModalBtn: document.querySelector("[ingredients-modal-milkshakes-close]"),
        modal: document.querySelector("[ingredients-modal-milkshakes]")
    };
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
})();

//# sourceMappingURL=index.030d9eb2.js.map
