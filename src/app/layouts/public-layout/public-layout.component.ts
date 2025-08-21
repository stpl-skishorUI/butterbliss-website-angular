import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicLayoutHeaderComponent } from 'src/app/shared/components/public-layout-header/public-layout-header.component';
import { PublicLayoutFooterComponent } from 'src/app/shared/components/public-layout-footer/public-layout-footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [CommonModule, PublicLayoutHeaderComponent, PublicLayoutFooterComponent, RouterOutlet],
  templateUrl: './public-layout.component.html',
  styleUrls: ['./public-layout.component.scss']
})
export class PublicLayoutComponent {

}
