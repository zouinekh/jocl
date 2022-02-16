import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValideComponent } from './valide.component';

describe('ValideComponent', () => {
  let component: ValideComponent;
  let fixture: ComponentFixture<ValideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
