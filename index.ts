import {Subject, of, forkJoin, interval, merge} from 'rxjs';
import {
  combineAll,
  concatAll,
  concatMap,
  delay,
  distinctUntilChanged,
  filter,
  map,
  mergeAll,
  mergeMap,
  scan,
  shareReplay,
  tap,
} from 'rxjs/operators';
// Import stylesheets
import './style.css';

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const a$ = of([1, 2, 3, 4]);

a$.pipe(
  concatAll(),
).subscribe(x => console.log(x));