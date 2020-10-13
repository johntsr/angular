import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { AsyncObservablePipeComponent } from './main';

fdescribe('AsyncObservablePipeComponent', () => {
  let component: AsyncObservablePipeComponent;
  let fixture: ComponentFixture<AsyncObservablePipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncObservablePipeComponent ],
    });

    fixture = TestBed.createComponent(AsyncObservablePipeComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should emit the date every 1 sec', fakeAsync(() => {
    forwardTime(1000);
    expect(getTimeFromHtml()).toEqual('');

    forwardTime(1000);
    expect(getTimeFromHtml()).toEqual(new Date().toString());

    component.ngOnDestroy();
    })
  );

  function forwardTime(miliseconds: number) {
    tick(miliseconds);
    fixture.detectChanges();
  }

  function getTimeFromHtml(): string {
    const div: HTMLElement = fixture.nativeElement.querySelector('div');
    return div.textContent.split('Time:')[1].trim();
  }
});
