import {Component} from '@angular/core';
import {CoursesComponent} from './courses.component'

@Component({
    selector: 'my-app',
    template: `<h1>Hello Angular, I am your father.</h1><courses></courses>`,
    entryComponents: [CoursesComponent]
})
export class AppComponent { }
