import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItemmodalPage } from './itemmodal.page';

describe('ItemmodalPage', () => {
  let component: ItemmodalPage;
  let fixture: ComponentFixture<ItemmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemmodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
