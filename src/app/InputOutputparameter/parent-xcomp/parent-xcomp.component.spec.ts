import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentXCompComponent } from './parent-xcomp.component';

describe('ParentXCompComponent', () => {
  let component: ParentXCompComponent;
  let fixture: ComponentFixture<ParentXCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentXCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentXCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
