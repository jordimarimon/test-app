import throttle from 'lodash/throttle';

/**
 * Minimum difference in pixels that need to be scrolled in each interval of
 * 150ms to trigger a change in the visibility of the navbar
 */
const DIFF_THRESHOLD = 50;

/**
 * Distance in pixels from the scroll top to start hiding the navbar
 */
const SCROLL_THRESHOLD = 100;

const navbarEl = document.getElementById('navbar');

let previousScroll = {
    x: 0,
    y: 0,
};

document.addEventListener('scroll', throttle(handleScrollChanges, 150));

/**
 * Takes care of showing and hiding the navigation
 * bar when scroll changes
 */
function handleScrollChanges(): void {
    const scroll = {
        x: window.scrollX,
        y: window.scrollY,
    };

    const diff = {
        x: scroll.x - previousScroll.x,
        y: scroll.y - previousScroll.y,
    };

    previousScroll = scroll;

    requestAnimationFrame(() => {
        // Scrollbar is near the top (user hasn't scroll enough down
        // to trigger changes in visibility)
        if (scroll.y < SCROLL_THRESHOLD) {
            navbarEl?.classList.remove('hide');
            return;
        }

        if (diff.y < 0) {
            // User hasn't scrolled up enough to show the navbar
            if (Math.abs(diff.y) < DIFF_THRESHOLD) {
                return;
            }

            navbarEl?.classList.remove('navbar--hide');
        } else {
            // User is scrolling down but not enough to hide the snackbar
            if (diff.y < DIFF_THRESHOLD) {
                return;
            }

            navbarEl?.classList.add('navbar--hide');
        }
    });
}
