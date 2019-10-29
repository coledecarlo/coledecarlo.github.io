function addHomeButton() {
    document.body.insertAdjacentHTML(
        "afterbegin",
        `
            <div class="back-button">
                <a href="../index.html">←Home</a>
            </div>
        `
    );
}