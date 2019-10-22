
// factory realization of switcher old ES

document.addEventListener("DOMContentLoaded", function (event) {

    var switcher = document.querySelectorAll("[data-type='c-switcher'] [type='checkbox']")[0];
    switcher.addEventListener("change",checkSwitcherState);

});

function switcherGetFunc(e) {
    var switcherState;
    switcherState = e.detail.status;
    return switcherState;
}

function checkSwitcherState() {

    var checkboxSwitcher = document.querySelectorAll("[data-type='c-switcher'] [type='checkbox']")[0],
        eventSwitcher = new CustomEvent('switcher.change', { detail: { status: checkboxSwitcher.checked }});
    if (checkboxSwitcher.checked === true) {
        checkboxSwitcher.addEventListener('switcher.change',switcherGetFunc, true);
        checkboxSwitcher.dispatchEvent(eventSwitcher);
        return true;
    } else {
        return false;
    }

}