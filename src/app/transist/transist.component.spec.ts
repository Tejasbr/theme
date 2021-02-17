import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransistComponent } from './transist.component';

describe('TransistComponent', () => {
  let component: TransistComponent;
  let fixture: ComponentFixture<TransistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
