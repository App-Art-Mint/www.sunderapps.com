import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizersComponent } from './visualizers.component';

describe('VisualizersComponent', () => {
  let component: VisualizersComponent;
  let fixture: ComponentFixture<VisualizersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
