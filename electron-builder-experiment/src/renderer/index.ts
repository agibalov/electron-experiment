import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {Component, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

@Component({
    selector: '#app',
    template: `
        <h1>hello world</h1>
        <p>counter: {{count}}</p>
        <button type="button" (click)="increment()">Click me!</button>
    `
})
export class AppComponent {
    count: number = 0;

    increment() {
        ++this.count;
    }
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.log(err));
