import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicService } from 'app/services/music.service';
import {
  trigger,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-artists',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss'],
  animations: [
    trigger('expandCollapse', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('300ms ease-out', style({ height: '*', opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ height: 0, opacity: 0 })),
      ]),
    ]),
  ],
})
export class ArtistsComponent {
  musicService = inject(MusicService);
  artists$ = this.musicService.getArtists();

  expanded: { [key: number]: boolean } = {};

  toggleAlbums(artistId: number) {
    this.expanded[artistId] = !this.expanded[artistId];
  }
}
