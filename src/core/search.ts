const template = document.getElementById('search-overlay-tmpl') as HTMLTemplateElement;
const toggleBtn = document.getElementById('search-toggle');
const overlay = template.content.firstElementChild?.cloneNode(true) as HTMLDivElement;
const closeBtn = overlay?.querySelector('#search-overlay-close-btn') as HTMLButtonElement;
const inputEl = overlay?.querySelector('#search-overlay-input') as HTMLInputElement;
const overlayContent = overlay?.querySelector('#search-overlay-content') as HTMLDivElement;

let searchOverlayVisibility = false;

closeBtn?.addEventListener('click', () => toggleSearchOverlay(false));
toggleBtn?.addEventListener('click', () => toggleSearchOverlay());
document.body.addEventListener('click', handlePageClicks, {capture: true});

function toggleSearchOverlay(value?: boolean): void {
    searchOverlayVisibility = value ?? !searchOverlayVisibility;

    if (!overlay) {
        return;
    }

    if (searchOverlayVisibility) {
        document.body.appendChild(overlay);
    } else {
        window.setTimeout(() => overlay.remove(), 250);
    }

    requestAnimationFrame(() => {
        if (searchOverlayVisibility) {
            document.documentElement.classList.add('block-scroll');
            overlay.classList.add('search-overlay--open');
            inputEl?.focus();
        } else {
            document.documentElement.classList.remove('block-scroll');
            overlay.classList.remove('search-overlay--open');
        }
    });
}

function handlePageClicks(event: MouseEvent): void {
    const node = event.target as Node;

    if (overlayContent?.contains(node) || toggleBtn?.contains(node)) {
        return;
    }

    toggleSearchOverlay(false);
}
