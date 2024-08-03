import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfRequestComponent } from './prof-request.component';

describe('ProfRequestComponent', () => {
  let component: ProfRequestComponent;
  let fixture: ComponentFixture<ProfRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
