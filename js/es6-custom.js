
// factory realization of switcher ES6

class Switcher {
    constructor(htmlElements) {
        this.htmlElements = htmlElements;
        this.bindToElement(this.htmlElements);
    }

    switcherGetStateFunc(e) {
        let switcherState;
        switcherState = e.detail.status;
        return switcherState;
    }

    checkSwitcherState(htmlElement) {

        let eventSwitcher = new CustomEvent('switcher.change', { detail: { status: htmlElement.checked }});
        if (htmlElement.checked === true) {
            htmlElement.addEventListener('switcher.change',this.switcherGetStateFunc, true);
            htmlElement.dispatchEvent(eventSwitcher);
            return true;
        } else {
            return false;
        }
    }

    bindToElement(htmlElements) {
        let self = this;
        htmlElements.forEach(function(htmlElement) {
             htmlElement.addEventListener("change",() => {self.checkSwitcherState(htmlElement);});
        });
     }

}

document.addEventListener("DOMContentLoaded", function (event) {
    const switchers = document.querySelectorAll("[data-type='c-switcher'] [type='checkbox']");

    let newSwitcher = new Switcher(switchers);

});

