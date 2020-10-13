// TODO: Add unit tests for this file.
// tslint:disable: no-output-native
// #docregion
import { CommonModule } from '@angular/common';
import { Component, NgModule, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

// #docregion eventemitter

// @Component({
//   selector: 'app-zippy',
//   template: `
//     <div class="zippy">
//       <div (click)="toggle()">Toggle</div>
//       <div [hidden]="!visible">
//         <ng-content></ng-content>
//       </div>
//     </div>
//   `,
// })
// export class ZippyComponent {
//   visible = true;
//   @Output() open = new EventEmitter<any>();
//   @Output() close = new EventEmitter<any>();

//   toggle() {
//     this.visible = !this.visible;
//     if (this.visible) {
//       this.open.emit(null);
//     } else {
//       this.close.emit(null);
//     }
//   }
// }

// #enddocregion eventemitter

// #docregion pipe

@Component({
  selector: 'async-observable-pipe',
  template: `<div><code>observable|async</code>:
       Time: {{ time | async }}</div>`
})
export class AsyncObservablePipeComponent implements OnDestroy {
  interval;
  time = new Observable<string>(observer => {
    this.interval = setInterval(() => observer.next(new Date().toString()), 1000);
  });

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}

// #enddocregion pipe

// #docregion router

// import { Router, NavigationStart } from '@angular/router';
// import { filter } from 'rxjs/operators';

// @Component({
//   selector: 'app-routable',
//   templateUrl: './routable.component.html',
//   styleUrls: ['./routable.component.css']
// })
// export class Routable1Component implements OnInit {

//   navStart: Observable<NavigationStart>;

//   constructor(private router: Router) {
//     // Create a new Observable that publishes only the NavigationStart event
//     this.navStart = router.events.pipe(
//       filter(evt => evt instanceof NavigationStart)
//     ) as Observable<NavigationStart>;
//   }

//   ngOnInit() {
//     this.navStart.subscribe(evt => console.log('Navigation Started!'));
//   }
// }

// #enddocregion router


// #docregion activated_route

// import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-routable',
//   templateUrl: './routable.component.html',
//   styleUrls: ['./routable.component.css']
// })
// export class Routable2Component implements OnInit {
//   constructor(private activatedRoute: ActivatedRoute) {}

//   ngOnInit() {
//     this.activatedRoute.url
//       .subscribe(url => console.log('The URL changed to: ' + url));
//   }
// }

// #enddocregion activated_route


// #docregion forms

// import { FormGroup } from '@angular/forms';

// @Component({
//   selector: 'my-component',
//   template: 'MyComponent Template'
// })
// export class MyComponent implements OnInit {
//   nameChangeLog: string[] = [];
//   heroForm: FormGroup;

//   ngOnInit() {
//     this.logNameChange();
//   }
//   logNameChange() {
//     const nameControl = this.heroForm.get('name');
//     nameControl.valueChanges.forEach(
//       (value: string) => this.nameChangeLog.push(value)
//     );
//   }
// }

// #enddocregion forms



@NgModule({
  imports: [CommonModule],
  declarations:
      [AsyncObservablePipeComponent]
      // [ZippyComponent, AsyncObservablePipeComponent, Routable1Component, Routable2Component, MyComponent]
})
export class AppModule {
}
