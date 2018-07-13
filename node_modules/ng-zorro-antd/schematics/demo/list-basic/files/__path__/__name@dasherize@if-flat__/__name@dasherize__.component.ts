import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
  <nz-list [nzDataSource]="data" [nzRenderItem]="item" [nzItemLayout]="'horizontal'">
    <ng-template #item let-item>
      <nz-list-item>
        <nz-list-item-meta
          [nzTitle]="nzTitle"
          nzAvatar="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          nzDescription="Ant Design, a design language for background applications, is refined by Ant UED Team">
          <ng-template #nzTitle>
            <a href="https://ng.ant.design">{{item.title}}</a>
          </ng-template>
        </nz-list-item-meta>
      </nz-list-item>
    </ng-template>
  </nz-list>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  data = [
    {
      title: 'Ant Design Title 1'
    },
    {
      title: 'Ant Design Title 2'
    },
    {
      title: 'Ant Design Title 3'
    },
    {
      title: 'Ant Design Title 4'
    }
  ];
}
