import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactosComponent } from './impactos.component';

describe('ImpactosComponent', () => {
  let component: ImpactosComponent;
  let fixture: ComponentFixture<ImpactosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImpactosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
