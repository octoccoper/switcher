var eventSwitcher = new CustomEvent('switcherChange',{ detail: {time: new Date()}});

document.addEventListener("DOMContentLoaded", function (event) {

    var switcher = document.querySelectorAll("[data-type='c-switcher']")[0];
    switcher.dispatchEvent(eventSwitcher);

    console.log(switcher);
});

function switcherChange(e) {
    console.log(e, e.detail);
}