import { ComponentFixture, TestBed } from '@angular/core/testing';
import {beforeEach, describe, expect, it} from '@jest/globals';
import { MessageComponent } from '@app/core/component/message/message.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('MessageComponent', () => {
  let component: MessageComponent;
  let fixture: ComponentFixture<MessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [MessageComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
