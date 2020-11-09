import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ValidatestockPage } from './validatestock.page';

describe('ValidatestockPage', () => {
  let component: ValidatestockPage;
  let fixture: ComponentFixture<ValidatestockPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidatestockPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ValidatestockPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
