import { Component, NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-aviation',
  templateUrl: './aviation.component.html',
  styleUrls: ['./aviation.component.css']
})

export class AviationComponent {
  public mat = MatCardModule
  public videoPhenom100 = "../../assets/video/Phenom100.mp4"
  public videoDecolagemCessna210 = "../../assets/video/DecolagemLow.mp4"
  public videoJussaPousoSkylane = "../../assets/video/EuPousandoSkylane.mp4"

}
