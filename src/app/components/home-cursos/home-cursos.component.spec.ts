import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCursosComponent } from './home-cursos.component';

describe('HomeCursosComponent', () => {
  let component: HomeCursosComponent;
  let fixture: ComponentFixture<HomeCursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
