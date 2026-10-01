import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProcessoFormDialog } from './processo-form-dialog';

describe('ProcessoFormDialog', () => {
  let component: ProcessoFormDialog;
  let fixture: ComponentFixture<ProcessoFormDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcessoFormDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(ProcessoFormDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
