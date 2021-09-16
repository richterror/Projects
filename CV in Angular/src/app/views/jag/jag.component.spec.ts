import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JagComponent } from './jag.component';

describe('JagComponent', () => {
  let component: JagComponent;
  let fixture: ComponentFixture<JagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
