const sideBarToggle = document.getElementById('side-bar-toggle');
const closeBtn = document.getElementById('side-bar-close-btn');
const sideBar = document.getElementById('side-bar');

let sideBarVisibility = false;

closeBtn?.addEventListener('click', () => toggleSideBar(false));
sideBarToggle?.addEventListener('click', () => toggleSideBar());

/**
 * Changes the visibility of the sidebar
 */
function toggleSideBar(value?: boolean): void {
    sideBarVisibility = value ?? !sideBarVisibility;

    requestAnimationFrame(() => {
        if (!sideBar?.classList.contains('side-bar-animate')) {
            sideBar?.classList.add('side-bar-animate');
        }

        if (sideBarVisibility) {
            document.documentElement.classList.add('block-scroll');
            sideBar?.classList.add('side-bar--open');
        } else {
            document.documentElement.classList.remove('block-scroll');
            sideBar?.classList.remove('side-bar--open');
        }
    });
}
