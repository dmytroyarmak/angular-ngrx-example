import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowersContainerComponent } from './followers-container.component';

describe('FollowersContainerComponent', () => {
  let component: FollowersContainerComponent;
  let fixture: ComponentFixture<FollowersContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowersContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
