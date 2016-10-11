import {Directive, HostListener} from '@angular/core';

// This is currently _not_ the correct Angular 2 way of doing this.
// There is no Angular 2 way, yet :)
@Directive({
    selector: '[close-sidebar-on-click]'
})
export class CloseSidebarOnClickDirective {
    constructor() {
    }

    @HostListener('click')
    public onClick() {
        document.body.classList.remove('sidebar-open');
    }
}
