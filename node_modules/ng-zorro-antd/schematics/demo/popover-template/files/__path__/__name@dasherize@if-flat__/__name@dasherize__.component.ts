import {
  Component
} from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <button
      nz-button
      nz-popover
      [nzTitle]="titleTemplate"
      [nzContent]="contentTemplate">
      Render Template
    </button>
    <ng-template #titleTemplate><i class="anticon anticon-cross"></i> Title</ng-template>
    <ng-template #contentTemplate><i class="anticon anticon-check"></i> Content</ng-template>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
}
