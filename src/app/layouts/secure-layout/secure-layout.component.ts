import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SecureLayoutHeaderComponent } from 'src/app/shared/components/secure-layout-header/secure-layout-header.component';
import { DynamicSidebarComponent } from 'src/app/shared/components/dynamic-sidebar/dynamic-sidebar.component';
import { SecureLayoutFooterComponent } from 'src/app/shared/components/secure-layout-footer/secure-layout-footer.component';

@Component({
  selector: 'app-secure-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, SecureLayoutHeaderComponent, DynamicSidebarComponent, SecureLayoutFooterComponent],
  templateUrl: './secure-layout.component.html',
  styleUrls: ['./secure-layout.component.scss']
})
export class SecureLayoutComponent {

}
