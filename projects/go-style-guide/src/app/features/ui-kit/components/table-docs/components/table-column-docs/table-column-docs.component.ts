import { Component } from '@angular/core';
import { GoTableConfig } from 'projects/go-lib/src/public_api';
import { SubNavService } from 'projects/go-style-guide/src/app/shared/components/sub-nav/sub-nav.service';
import { TableDocsService } from '../../table-docs.service';

@Component({
  selector: 'app-table-column-docs',
  templateUrl: './table-column-docs.component.html'
})
export class TableColumnDocsComponent {
  constructor(private tableDocsService: TableDocsService, private subNavService: SubNavService) {
    this.subNavService.pageTitle = 'Table Columns';
  }

  componentBindings: string = `
  @Input() field:      string;
  @Input() searchable: boolean = true;
  @Input() sortable?:  boolean = true;
  @Input() title:      string;
  @Input() width:      number;
  `;

  fieldExample: string = `
  new GoTableConfig({
    tableData: [
      {
        id: 0,
        name: {
          first: John,
          last: Smith
        }
      }
    ]
  });
  `;

  basicExample_html: string = `
  <go-table [tableConfig]="tableConfig" tableTitle="Example Usage">
    <go-table-column field="id" title="ID" [sortable]="false" width="5"></go-table-column>
    <go-table-column field="name.first" title="First Name"></go-table-column>
    <go-table-column field="name.last" title="Last Name"></go-table-column>
    <go-table-column field="email" title="Email" width="50"></go-table-column>
    <go-table-column field="gender" title="Gender"></go-table-column>
    <go-table-column field="ip_address" title="IP Address"></go-table-column>
  </go-table>
  `;

  basicExample_ts: string = `
  tableConfig: GoTableConfig = new GoTableConfig({
    tableData: this.data
  });
  `;

  tableConfig: GoTableConfig = new GoTableConfig({
    tableData: this.tableDocsService.generateData(5)
  });
}
