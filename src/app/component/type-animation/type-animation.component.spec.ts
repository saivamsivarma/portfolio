import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeAnimationComponent } from './type-animation.component';

describe('TypeAnimationComponent', () => {
  let component: TypeAnimationComponent;
  let fixture: ComponentFixture<TypeAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
