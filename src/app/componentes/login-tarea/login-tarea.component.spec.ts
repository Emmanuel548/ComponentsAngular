import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTareaComponent } from './login-tarea.component';

describe('LoginTareaComponent', () => {
  let component: LoginTareaComponent;
  let fixture: ComponentFixture<LoginTareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginTareaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
