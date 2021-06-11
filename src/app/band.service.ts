import { Injectable } from '@angular/core';
import { Band } from './band';
import { Observable, ObservedValueOf, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BANDS } from './mock-bands';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BandService {

  private bandsUrl = 'api/bands';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-type' : 'application/json'})
  };


  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) { }

  getBands(): Observable<Band[]> {
    return this.http.get<Band[]>(this.bandsUrl)
    .pipe(
      tap(_ => this.log('fetched bands')),
      catchError(this.handleError<Band[]>('getBands', []))
    );
  }

  getBand(id: number): Observable<Band>{
    const url = `${this.bandsUrl}/${id}`;
    return this.http.get<Band>(url).pipe(
      tap(_ => this.log(`fetched band id=${id}`)),
      catchError(this.handleError<Band>(`getBand id=${id}`))
    );
  }
  // PUT
  updateBand(band: Band): Observable<any>{
    return this.http.put(this.bandsUrl, band, this.httpOptions).pipe(
      tap(_ => this.log(`update band id=${band.id}`)),
      catchError(this.handleError<any>('updateBand'))
    );
  }

  // POST
  addBand(band: Band): Observable<Band>{
    return this.http.post<Band>(this.bandsUrl, band, this.httpOptions).pipe(
      tap((newBand: Band) => this.log(`added band w/id=${newBand.id}`)),
      catchError(this.handleError<Band>('addBand'))
    );
  }

  // DELETE
  deleteBand(id: number): Observable<Band> {
    const url = `${this.bandsUrl}/${id}`;

    return this.http.delete<Band>(url, this.httpOptions).pipe(
      tap(_ => this.log(`delete band id=${id}`)),
      catchError(this.handleError<Band>('deleteBand'))
    );
  }

  // GET SEARCH
  searchBands(term: string): Observable<Band[]>{
    if (!term.trim()){
      return of([]);
    }
    return this.http.get<Band[]>(`${this.bandsUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found bands matching "${term}"`) :
        this.log(`no bands matching "${term}"`)),
        catchError(this.handleError<Band[]>('searchBands', []))
    );
  }



private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    console.error(error);

    this.log(`${operation} failed: ${error.message}`);

    return of(result as T);
  };
}

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
