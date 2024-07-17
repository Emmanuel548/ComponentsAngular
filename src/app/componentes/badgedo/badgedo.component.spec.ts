import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgedoComponent } from './badgedo.component';

describe('BadgedoComponent', () => {
  let component: BadgedoComponent;
  let fixture: ComponentFixture<BadgedoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgedoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadgedoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
