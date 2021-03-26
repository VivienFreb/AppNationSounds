import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistePageComponent } from './artiste-page.component';

describe('ArtistePageComponent', () => {
  let component: ArtistePageComponent;
  let fixture: ComponentFixture<ArtistePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
