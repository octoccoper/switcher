
document.addEventListener("DOMContentLoaded", function (event) {

    var switcher = document.querySelectorAll("[data-type='c-switcher'] [type='checkbox']")[0];
    switcher.addEventListener("change",checkSwitcherState);

});

function switcherChangeFunc(e) {

    var switcherState;
    switcherState = e.detail.status;
    if(switcherState) {
        console.log("switcherChangeFunc works!", "switcherState is: ",switcherState);
    } else {
        console.log("switcherChangeFunc works!", "switcherState is: ",switcherState);
    }

}

function checkSwitcherState() {

    var checkboxSwitcher = document.querySelectorAll("[data-type='c-switcher'] [type='checkbox']")[0],
        eventSwitcher = new CustomEvent('switcher.change', { detail: { status: checkboxSwitcher.checked }});
    if (checkboxSwitcher.checked === true) {
        checkboxSwitcher.addEventListener('switcher.change',switcherChangeFunc, true);
        checkboxSwitcher.dispatchEvent(eventSwitcher);
        console.log("checkboxSwitcher.checked === true");
    } else {
        console.log("checkboxSwitcher.checked === false");
    }

}