import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicService } from 'app/services/music.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  musicService = inject(MusicService);
  products$ = this.musicService.getProducts();
}
