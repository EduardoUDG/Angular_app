import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styles: [
  ]
})
export class ObservableComponent {

  constructor() {

    // Valor a emitir
    const obs$ = new Observable( observer => {

      let i = -1;

      const intervalo = setInterval( () => {
        i++;
        observer.next(i);

        if (i === 4) {
          clearInterval(intervalo);  // Cancelando interval
          observer.complete();       // Terminando observer
        }

      }, 1000);

    });

    // Mostrando un mensaje cuando termine el OBSERVABLE
    obs$.subscribe({
      next    : (valor) => console.log('Subs:', valor)
    });

  }

}
