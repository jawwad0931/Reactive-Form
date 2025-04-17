import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
// import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
// for layout
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

// for using Icons
import { UserOutline, LockOutline, TeamOutline, PieChartOutline, DesktopOutline,FileAddOutline } from '@ant-design/icons-angular/icons';
import { NZ_ICONS } from 'ng-zorro-antd/icon';

// import { NzTe }
@NgModule({
  imports: [
    NzBreadCrumbModule,
    NzLayoutModule,
    NzMenuModule,
    CommonModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzTypographyModule,
    NzDividerModule,
    NzCardModule,
    NzGridModule,
    NzIconModule,
    NzSelectModule,
    // NzCheckboxModule
  ],
  providers: [
    { provide: NZ_ICONS, useValue: [UserOutline, LockOutline,TeamOutline,PieChartOutline,DesktopOutline,FileAddOutline] }
  ],
  exports: [
    NzBreadCrumbModule,
    NzLayoutModule,
    NzMenuModule,
    CommonModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzTypographyModule,
    NzDividerModule,
    NzCardModule,
    NzGridModule,
    NzIconModule,
    NzSelectModule,
    // NzCheckboxModule

  ]
})
export class SharedModule {}
