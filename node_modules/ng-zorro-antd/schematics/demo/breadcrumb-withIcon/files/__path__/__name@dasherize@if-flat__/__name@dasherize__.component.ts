import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-breadcrumb>
      <nz-breadcrumb-item>
        <i class="anticon anticon-home"></i>
      </nz-breadcrumb-item>
      <nz-breadcrumb-item>
        <a><i class="anticon anticon-user"></i><span>Application List</span></a>
      </nz-breadcrumb-item>
      <nz-breadcrumb-item>
        Application
      </nz-breadcrumb-item>
    </nz-breadcrumb>`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  styles  : []
})
export class <%= classify(name) %>Component { }
