import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConEnergComponent } from './con-energ.component';

describe('ConEnergComponent', () => {
  let component: ConEnergComponent;
  let fixture: ComponentFixture<ConEnergComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConEnergComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConEnergComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
