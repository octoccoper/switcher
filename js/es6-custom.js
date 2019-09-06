
// factory realization of switcher ES6

class Switcher {
    constructor(htmlElement) {
        this.htmlElement = htmlElement;
    }

    switcherChangeFunc(e) {

        let switcherState;
        switcherState = e.detail.status;
        console.log("switcherChangeFunc works!", "switcherState is: ",switcherState);

    }

    checkSwitcherState(htmlElement) {

        let eventSwitcher = new CustomEvent('switcher.change', { detail: { status: this.htmlElement.checked }});
        if (this.htmlElement.checked === true) {
            this.htmlElement.addEventListener('switcher.change',this.switcherChangeFunc, true);
            this.htmlElement.dispatchEvent(eventSwitcher);
            console.log("checkboxSwitcher.checked === true");
        } else {
            console.log("checkboxSwitcher.checked === false");
        }
    }

    showMesage() {
        console.log(this.htmlElement);
    }
}

document.addEventListener("DOMContentLoaded", function (event) {

    const switcher = document.querySelectorAll("[data-type='c-switcher'] [type='checkbox']")[0];
    let newSwitcher = new Switcher(switcher);
    switcher.addEventListener("change",() => {newSwitcher.checkSwitcherState(switcher);});

});

