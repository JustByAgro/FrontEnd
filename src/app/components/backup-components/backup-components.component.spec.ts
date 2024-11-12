import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackupComponentsComponent } from './backup-components.component';

describe('BackupComponentsComponent', () => {
  let component: BackupComponentsComponent;
  let fixture: ComponentFixture<BackupComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackupComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackupComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
