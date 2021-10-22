async function merge(a, low, mid, high) {
    const n1 = mid - low + 1;
    const n2 = high - mid;
    let left = new Array(n1);
    let right = new Array(n2);

    for (let i = 0; i < n1; i++) {
        await waitforme(delay);
        // color
        a[low + i].style.background = 'lightpink';
        left[i] = a[low + i].style.height;
    }
    for (let i = 0; i < n2; i++) {
        await waitforme(delay);
        // color
        a[mid + 1 + i].style.background = 'lightblue';
        right[i] = a[mid + 1 + i].style.height;
    }
    await waitforme(delay);
    let i = 0, j = 0, k = low;
    while (i < n1 && j < n2) {
        await waitforme(delay);
        if (parseInt(left[i]) <= parseInt(right[j])) {
            // color
            if ((n1 + n2) === a.length) {
                a[k].style.background = 'blue';
            }
            else {
                a[k].style.background = 'purple';
            }

            a[k].style.height = left[i];
            i++;
            k++;
        }
        else {
            // color
            if ((n1 + n2) === a.length) {
                a[k].style.background = 'blue';
            }
            else {
                a[k].style.background = 'purple';
            }
            a[k].style.height = right[j];
            j++;
            k++;
        }
    }
    while (i < n1) {
        await waitforme(delay);
        // color
        if ((n1 + n2) === a.length) {
            a[k].style.background = 'blue';
        }
        else {
            a[k].style.background = 'purple';
        }
        a[k].style.height = left[i];
        i++;
        k++;
    }
    while (j < n2) {
        await waitforme(delay);

        // color
        if ((n1 + n2) === a.length) {
            a[k].style.background = 'blue';
        }
        else {
            a[k].style.background = 'purple';
        }
        a[k].style.height = right[j];
        j++;
        k++;
    }
}

async function mergeSort(a, l, h) {
    if (l >= h) {
        return;
    }
    const m = l + Math.floor((h - l) / 2);
    await mergeSort(a, l, m);
    await mergeSort(a, m + 1, h);
    await merge(a, l, m, h);
}
const mergebtn = document.querySelector(".merge");
mergebtn.addEventListener('click', async function () {
    const a = document.querySelectorAll(".bar");
    let low = 0;
    let high = a.length - 1;
    alert("MergeSort");
    await mergeSort(a, low, high);
});