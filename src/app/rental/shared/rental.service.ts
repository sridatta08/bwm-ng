import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Rental} from './rental.model';

@Injectable()

export class RentalService {
  private rentals: Rental[] = [{
    id: `1`,
    title: `Central Apt 1`,
    city: `Dallas`,
    street: `Denton`,
    category: `apartment`,
    image: `http://via.placeholder.com/350x250`,
    bedrooms: 3,
    description: `very nice apt`,
    dailyRate: 37,
    shared: false,
    createdAt: `24/12/2017`
},
{
  id: `2`,
  title: `Central Apt 2`,
  city: `Chicago`,
  street: `West side`,
  category: `apartment`,
  image: `http://via.placeholder.com/350x250`,
  bedrooms: 3,
  description: `very nice apt`,
  dailyRate: 37,
  shared: false,
  createdAt: `24/12/2017`
},
{
  id: `3`,
  title: `Central Apt 3`,
  city: `San Bernadino`,
  street: `Downtown`,
  category: `apartment`,
  image: `http://via.placeholder.com/350x250`,
  bedrooms: 3,
  description: `very nice apt`,
  dailyRate: 36,
  shared: false,
  createdAt: `24/12/2017`
},
{
  id: `4`,
  title: `Central Apt 4`,
  city: `San Antonio`,
  street: `North side`,
  category: `apartment`,
  image: `http://via.placeholder.com/350x250`,
  bedrooms: 3,
  description: `very nice apt`,
  dailyRate: 37,
  shared: false,
  createdAt: `24/12/2017`
}];

  public getRentalById(rentalId: string): Observable<Rental> {
    return  new Observable<Rental>((observer) => {
      setTimeout(() => {
        // @ts-ignore
        const foundRental = this.rentals.find((rental) => {
          // tslint:disable-next-line:triple-equals
          return rental.id == rentalId;
        });

        observer.next((foundRental));
      }, 500);
    });
  }

public getRentals(): Observable<Rental[]> {

  return new Observable<Rental[]>((observer) => {
    setTimeout(() => {
        observer.next(this.rentals);
    }, 1000);
  });
}

}
