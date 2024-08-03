import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfServicesComponent } from './prof-services.component';

describe('ProfServicesComponent', () => {
  let component: ProfServicesComponent;
  let fixture: ComponentFixture<ProfServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
