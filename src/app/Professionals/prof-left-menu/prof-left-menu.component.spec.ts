import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfLeftMenuComponent } from './prof-left-menu.component';

describe('ProfLeftMenuComponent', () => {
  let component: ProfLeftMenuComponent;
  let fixture: ComponentFixture<ProfLeftMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfLeftMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfLeftMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
