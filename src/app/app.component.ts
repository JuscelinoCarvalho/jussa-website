import { Component } from '@angular/core';
/*import 'node_modules/glightbox/dist/js/glightbox.js';*/
//import { GLightbox } from 'glightbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = "Jussa's Website";
  lightbox:any;

  ngOnInit(){       
    //lightbox settings
    this.lightbox = GLightbox({
      'href': 'https://youtu.be/N-dbHwQUFag',
      'type': 'video',
      'source': 'youtube', //vimeo, youtube or local
      'width': 900,
      'autoplayVideos': true,
    });
 }


}
function GLightbox(arg0: {
  href: string; type: string; source: string; //vimeo, youtube or local
  width: number; autoplayVideos: boolean;
}): any {
  throw new Error('Function not implemented.');
}

