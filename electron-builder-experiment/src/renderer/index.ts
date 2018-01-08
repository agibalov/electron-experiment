import 'photon/dist/css/photon.css';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {Component, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule, Routes} from "@angular/router";

@Component({
    selector: '#app',
    template: `
        <div class="window">
            <header class="toolbar toolbar-header">
                <h1 class="title">Header</h1>
            </header>
            <div class="window-content">
                <div class="pane-group">
                    <div class="pane-sm sidebar">
                        <nav class="nav-group">
                            <h5 class="nav-group-title">Favorites</h5>
                            <a class="nav-group-item" 
                               routerLink="/" 
                               routerLinkActive="active"
                               [routerLinkActiveOptions]="{exact: true}">
                                <span class="icon icon-home"></span>
                                Home
                            </a>
                            <a class="nav-group-item"
                               routerLink="/counter" 
                               routerLinkActive="active" 
                               [routerLinkActiveOptions]="{exact: true}">
                                <span class="icon icon-clock"></span>
                                Counter
                            </a>
                        </nav>
                    </div>
                    <div class="pane">
                        <router-outlet></router-outlet>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class AppComponent {
    count: number = 0;

    increment() {
        ++this.count;
    }
}

@Component({
    template: `
        <div class="padded">
            <h1>Home</h1>
        </div>
    `
})
export class HomeComponent {
}

@Component({
    template: `
        <div class="toolbar-actions">
            <div class="btn-group">
                <button class="btn btn-default" (click)="increment()">
                    <span class="icon icon-thumbs-up"></span>
                </button>
                <button class="btn btn-default" (click)="decrement()">
                    <span class="icon icon-thumbs-down"></span>
                </button>
                <button class="btn btn-default" (click)="setTo(0)">
                    <span class="icon icon-trash"></span>
                </button>
            </div>

            <button class="btn btn-default pull-right" (click)="setTo(123)">
                <span class="icon icon-home icon-text"></span>
                Set to 123
            </button>
        </div>

        <div class="padded">
            <h1>Counter</h1>
            <p>counter: {{count}}</p>
            <button class="btn btn-primary" type="button" (click)="increment()">Click me!</button>
        </div>
    `
})
export class CounterComponent {
    count: number = 0;

    increment() {
        ++this.count;
    }

    decrement() {
        --this.count;
    }

    setTo(n: number) {
        this.count = n;
    }
}

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'counter',
        component: CounterComponent
    }
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CounterComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}

const base = document.createElement('base');
base.href = '/';
document.head.appendChild(base);

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.log(err));
