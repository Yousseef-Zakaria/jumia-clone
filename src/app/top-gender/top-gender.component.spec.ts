import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopGenderComponent } from './top-gender.component';

describe('TopGenderComponent', () => {
  let component: TopGenderComponent;
  let fixture: ComponentFixture<TopGenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopGenderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
