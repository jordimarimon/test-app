const loadMoreBtn = document.getElementById('load-more-btn');

loadMoreBtn?.addEventListener('click', () => renderThumbnails());

renderThumbnails();

/**
 * Renders a list of images
 */
function renderThumbnails(n = 10): void {
    const html = range(n, (index: number) => renderThumbnail(index)).join('\n');

    loadMoreBtn?.insertAdjacentHTML('beforebegin', html);
}

/**
 * Renders one image
 *
 * @param index
 */
function renderThumbnail(index: number): string {
    return `
        <div class="thumbnail">

            <img src="https://dummyimage.com/600x40${index}/000/fff" alt="Dummy Image" />

        </div>
    `;
}

/**
 * Creates an array and fills it with values.
 *
 * @param length Length of the array
 * @param valueFunction Callback to use to fill the array
 *
 * @return An array fill with values given by the valueFunction
 */
function range<T>(length: number, valueFunction: (index: number) => T): T[] {
    const valuesArray = Array(length);

    for (let i = 0; i < length; i++) {
        valuesArray[i] = valueFunction(i);
    }

    return valuesArray;
}
