import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavSeriesComponent } from './fav-series.component';

describe('FavSeriesComponent', () => {
  let component: FavSeriesComponent;
  let fixture: ComponentFixture<FavSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavSeriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
