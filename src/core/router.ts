/**
 * Prevents the default behaviour of anchor tags
 * for routing like ina SPA
 *
 * @param event
 */
function route(event: Event): void {
    const target = event.target as Node;

    if (target.nodeType !== Node.ELEMENT_NODE || target.nodeName.toLowerCase() !== 'a') {
        return;
    }

    event.preventDefault();

    window.history.pushState({}, '', (event.target as HTMLAnchorElement).href || '#');

    // handleRouteChange();
}

// TODO(Jordi M.): Change the content of the <main> element when routing changes
// function handleRouteChange() {
//     const path = window.location.pathname;
//     const route = routes[path] || routes['404'];
//     const html = /* Fetch HTML file */
//
//     /* Change the `innerHTML` of the <main> element with the page content */
//
// }
// window.addEventListener('popstate', handleRouteChange);

document.body.addEventListener('click', route);
