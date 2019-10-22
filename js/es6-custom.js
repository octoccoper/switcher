
// factory realization of switcher ES6

class Switcher {
    constructor(htmlElements) {
        this.htmlElements = htmlElements;
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
            console.log("htmlElement ", htmlElement, " is checked");
            return true;
        } else {
            console.log("htmlElement ", htmlElement, " is not checked");
            return false;
        }
    }

    bindToElement(htmlElements) {
        let self = this;
        htmlElements.forEach(function(htmlElement) {
             htmlElement.addEventListener("change",() => {self.checkSwitcherState(htmlElement);});
        });
     }

     init() {
         this.bindToElement(this.htmlElements);
     }
}

document.addEventListener("DOMContentLoaded", function (event) {
    const switchers = document.querySelectorAll("[data-type='c-switcher'] [type='checkbox']");

    let newSwitcher = new Switcher(switchers);
    newSwitcher.init();

});

