import { Component } from '@angular/core';
import { WebApiService } from '@services/api-global/web-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fullstack-front-end-angular-adminlte';
  constructor(
    public webapiservice : WebApiService
  ) {

  }
}


