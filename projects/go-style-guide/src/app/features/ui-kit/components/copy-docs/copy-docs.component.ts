import { Component } from '@angular/core';

@Component({
  selector: 'app-copy-docs',
  styleUrls: ['./copy-docs.component.scss'],
  templateUrl: './copy-docs.component.html'
})
export class CopyDocsComponent {
  componentBindings: string = `
  @Input() text: string;
  `;

  exampleCopy: string = `
  <a [href]="url">Click the button to copy the link!</a>
  <go-copy [text]="url"></go-copy>
  `;

  url: string = 'google.com';
  pageTitle: string = 'Copy';
}
