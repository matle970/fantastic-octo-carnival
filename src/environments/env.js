(function (window) {
    window.__env = window.__env || {};
    window.__env.apiUrl = 'http://localhost:5000';
}(this));

document.addEventListener("copy", function (e) {
    if (e.target.id !== "copy") {
        e.preventDefault();
        return false;
    }
});

document.addEventListener("cut", function (e) {
    e.preventDefault();
    return false;
});