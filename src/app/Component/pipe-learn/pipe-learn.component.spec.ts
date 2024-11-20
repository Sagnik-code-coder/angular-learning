import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeLearnComponent } from './pipe-learn.component';

describe('PipeLearnComponent', () => {
  let component: PipeLearnComponent;
  let fixture: ComponentFixture<PipeLearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeLearnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
