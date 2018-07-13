import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-badge nzDot><i class="anticon anticon-notification"></i></nz-badge>
    <nz-badge nzDot><a>Link something</a></nz-badge>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`.anticon-notification {
      width: 16px;
      height: 16px;
      line-height: 16px;
      font-size: 16px;
    }`]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
}
