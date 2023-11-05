import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CearCitasComponent } from './cear-citas.component';

describe('CearCitasComponent', () => {
  let component: CearCitasComponent;
  let fixture: ComponentFixture<CearCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CearCitasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CearCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
