import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGravicast } from './create-gravicast';

describe('CreateGravicast', () => {
  let component: CreateGravicast;
  let fixture: ComponentFixture<CreateGravicast>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateGravicast]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateGravicast);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
