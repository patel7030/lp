import { Component } from '@angular/core';

import { faPlay,faEnvelope,faPhone,faArrowAltCircleUp ,faFolder,faClock,faCloud} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Osumar';
  playIcon = faPlay; 
  Envelope= faEnvelope;
  phone=faPhone;
  arrow=faArrowAltCircleUp;
  faFolder=faFolder;
  faClock=faClock;
  faCloud=faCloud;

}
