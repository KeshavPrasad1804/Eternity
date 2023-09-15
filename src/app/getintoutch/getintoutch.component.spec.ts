import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetintoutchComponent } from './getintoutch.component';

describe('GetintoutchComponent', () => {
  let component: GetintoutchComponent;
  let fixture: ComponentFixture<GetintoutchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetintoutchComponent]
    });
    fixture = TestBed.createComponent(GetintoutchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
