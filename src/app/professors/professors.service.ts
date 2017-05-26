import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable, ObservableInput } from "rxjs/Observable";
import { Professor } from "./professor";

import 'rxjs/add/observable/of';

@Injectable()
export class ProfessorsService {
  private serviceUrl: string = "http://localhost:5000/api/professors";

  constructor(private http: Http) {

  }

  getProfessors() : Observable<Professor[]> {
    let p1 = new Professor();

    p1.professorId = 1;
    p1.firstName = 'John';
    p1.lastName = 'Smith';

    return Observable.of<Professor[]>([ p1 ]);

    // this.http.get(this.serviceUrl)
    //             .map((response: Response) => <Professor[]>response.json())
    //             .do(data => console.log(`All: ${JSON.stringify(data)}`))
    //             .catch((err, caught) => {
    //               return Observable.throw(err || "An error occured");
    //             });

  }
}
