const sideBar = document.getElementById('side-bar');
const sideBarToggle = document.getElementById('side-bar-toggle');

let sideBarVisibility = false;

sideBarToggle?.addEventListener('click', toggleSideBar);

/**
 * Changes the visibility of the sidebar
 */
function toggleSideBar(): void {
    sideBarVisibility = !sideBarVisibility;

    if (sideBarVisibility) {
        sideBar?.classList.add('side-bar--open');
    } else {
        sideBar?.classList.remove('side-bar--open');
    }
}
