import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

export type Ti18nFactory<Part> = (store: Store) => Observable<Part>;
