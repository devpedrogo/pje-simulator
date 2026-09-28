import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Processo } from './processo';

describe('Processo', () => {
  let component: Processo;
  let fixture: ComponentFixture<Processo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Processo],
    }).compileComponents();

    fixture = TestBed.createComponent(Processo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
