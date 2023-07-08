import { Component } from '@angular/core';

@Component({
  selector: 'app-mechanics',
  templateUrl: './mechanics.component.html',
  styleUrls: ['./mechanics.component.css']
})
export class MechanicsComponent {
  public videoSubaruOutbackDash1 = "../../assets/video/SubaruOutbackPainel1.mp4"
  public videoSubaruOutbackDash2 = "../../assets/video/SubaruOutbackPainel2.mp4"
  public videoSubaruOutbackDash3 = "../../assets/video/SubaruOutbackPainel3.mp4"
  public videoSubaruOutbackSuspensaoDianteira = "../../assets/video/SubaruOutbackSuspDiant.mp4"
  public videoSubaruOutbackBuchaTraseira = "../../assets/video/SubaruOutbackBuchaTras.mp4"
  public videoPorcheTiago = "../../assets/video/PorsheThiago.mp4"


  public TesteJussa() {
    var myVideo: any = document.getElementById("videoteste");
    myVideo.width = 70;
  }
  

}


