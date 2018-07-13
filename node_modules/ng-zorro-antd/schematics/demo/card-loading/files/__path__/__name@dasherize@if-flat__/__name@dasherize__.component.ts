import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-card [nzLoading]="loading" nzTitle="Card title">
      Whatever content
    </nz-card>
    <button nz-button style="margin-top: 16px;" (click)="toggleLoading()">Toggle loading</button>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  loading = true;
  toggleLoading(): void {
    this.loading = !this.loading;
  }
}
