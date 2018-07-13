import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-dropdown>
      <a nz-dropdown>
        Hover me <i class="anticon anticon-down"></i>
      </a>
      <ul nz-menu nzSelectable>
        <li nz-menu-item>
          <a>1st menu item</a>
        </li>
        <li nz-menu-item>
          <a>2nd menu item</a>
        </li>
        <li nz-menu-item>
          <a>3rd menu item</a>
        </li>
      </ul>
    </nz-dropdown>`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  styles  : []
})
export class <%= classify(name) %>Component {
}
