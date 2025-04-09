import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicService } from 'app/services/music.service';

@Component({
  selector: 'app-artists',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artists.component.html',
})
export class ArtistsComponent {
  musicService = inject(MusicService);
  artists$ = this.musicService.getArtists();

  expanded: { [key: number]: boolean } = {}; 

  toggleAlbums(artistId: number) {
    this.expanded[artistId] = !this.expanded[artistId];
  }
}
