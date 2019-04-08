import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { Subject } from 'rxjs';
// import { InjectionToken } from '@angular/core';

// TODO for now this is the only event type
export interface LangEvent {
  type: string;
  data: string;
}

@Injectable()
export class LanguageBusService {

  _messages$ = new Subject<LangEvent>();

  public emit(eventType: string, data: any) {
    this._messages$.next({ type: eventType, data: data });
  }

  public observe(eventType: string) {
    return this._messages$.pipe(
      filter(args => args.type === eventType),
      map(args => args.data)
    );
  }
}
