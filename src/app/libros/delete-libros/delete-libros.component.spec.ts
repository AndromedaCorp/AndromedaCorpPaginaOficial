import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLibrosComponent } from './delete-libros.component';

describe('DeleteLibrosComponent', () => {
  let component: DeleteLibrosComponent;
  let fixture: ComponentFixture<DeleteLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteLibrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
