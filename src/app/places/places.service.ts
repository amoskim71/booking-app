import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { take, map, tap, delay } from 'rxjs/operators';

import { Place } from './place.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places = new BehaviorSubject<Place[]>([
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of New York City',
      'https://media.architecturaldigest.com/photos/59caa80a839a9e7c5d248e96/16:9/w_2560,c_limit/bon1.jpg',
      149.99,
      new Date('2019-01-01'),
      new Date('2019-12-31'),
      'abc'
    ),
    new Place(
      'p2',
      // tslint:disable-next-line: quotemark
      "L'Amour Toujours",
      'A Romantic Place in Paris!',
      'https://tinyurl.com/y2ww9a5b',
      189.99,
      new Date('2018-01-01'),
      new Date('2020-2-28'),
      'xyz'
    ),
    new Place(
      'p3',
      'The Foggy Palace',
      'Not your average city trip!',
      'https://live.staticflickr.com/4711/26100810738_0f74f58b9b_b.jpg',
      99.99,
      new Date('2019-01-01'),
      new Date('2025-10-31'),
      'xyz'
    )
  ]);

  get places() {
    return this._places.asObservable();
  }

  constructor(private authService: AuthService) {}

  getPlace(placeId: string): Observable<Place> {
    return this.places.pipe(
      take(1),
      map(places => {
        return { ...places.find(place => place.id === placeId) };
      })
    );
  }

  addPlace(
    title: string,
    description: string,
    price: number,
    dateFrom: Date,
    dateTo: Date
  ) {
    const newPlace = new Place(
      Math.random().toString(),
      title,
      description,
      'https://live.staticflickr.com/4711/26100810738_0f74f58b9b_b.jpg',
      price,
      dateFrom,
      dateTo,
      this.authService.userId
    );
    return this.places.pipe(
      take(1),
      delay(1000),
      tap(place => {
        this._places.next(place.concat(newPlace));
      })
    );
  }
}
