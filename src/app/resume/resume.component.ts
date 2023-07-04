import { Component } from '@angular/core';
import {PDFDocumentProxy} from 'ng2-pdf-viewer';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  pdfSource =  "../../assets/pdf/CV_JAC_2022-reduced.pdf";
  isPdfLoaded = false;
  pdf: PDFDocumentProxy | undefined;

  onLoaded(pdf: PDFDocumentProxy) {
    this.pdf = pdf;
    this.isPdfLoaded = true;
  }

  print() {
    if(this.pdf === undefined){
      alert("PDF Undefined!");
    }else{
      this.pdf.getData().then((u8) => {

        let blob = new Blob([u8.buffer], {
            type: 'application/pdf'
        });
        const blobUrl = window.URL.createObjectURL((blob));
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.src = blobUrl;
        document.body.appendChild(iframe);
        iframe.contentWindow?.print();
      });
    }
  }
}
