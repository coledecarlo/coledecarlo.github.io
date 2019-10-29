function addBackButton(text) {
    document.body.insertAdjacentHTML(
        "afterbegin",
        `
            <div class="back-button">
                <a href="..">←${text}</a>
            </div>
        `
    );
}

function addHomeButton() {
    addBackButton("Home");
}

function addProjectsButton() {
    addBackButton("Projects");
}