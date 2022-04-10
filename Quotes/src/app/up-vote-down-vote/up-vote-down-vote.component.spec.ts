import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpVoteDownVoteComponent } from './up-vote-down-vote.component';

describe('UpVoteDownVoteComponent', () => {
  let component: UpVoteDownVoteComponent;
  let fixture: ComponentFixture<UpVoteDownVoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpVoteDownVoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpVoteDownVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
