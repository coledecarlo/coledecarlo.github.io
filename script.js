function addHomeButton() {
    document.body.insertAdjacentHTML(
        "afterbegin",
        `
            <div class="back-button">
                <a href="..">←Home</a>
            </div>
        `
    );
}