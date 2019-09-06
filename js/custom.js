document.addEventListener("DOMContentLoaded", function (event) {

    var switcher = document.querySelectorAll("[data-type='c-switcher'] [type='checkbox']")[0],
    eventSwitcher = new CustomEvent('switcher.change', { detail: { status: switcher.checked }});

    switcher.addEventListener('switcher.change',switcherChangeFunc, false);
    switcher.dispatchEvent(eventSwitcher);

});

function switcherChangeFunc(e) {
    var switcherState;
    switcherState = e.detail.status;
    console.log("switcherChange works!", "switcherState is: ",switcherState);
}