import { AfterViewInit, ElementRef, Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    const editorElement = this.elementRef.nativeElement.querySelector(
      '#editor'
    ) as HTMLElement;
    const editorElement2 = this.elementRef.nativeElement.querySelector(
      '#editor2'
    ) as HTMLElement;

    if (editorElement) {
      ClassicEditor.create(editorElement, {
        placeholder: 'Type the content here!',
      })
        .then((editor) => {
          console.log(editor);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      console.error('Editor element not found.');
    }
    if (editorElement2) {
      ClassicEditor.create(editorElement2, {
        placeholder: 'Type the content here!',
      })
        .then((editor) => {
          console.log(editor);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      console.error('Editor element not found.');
    }
  }
}
