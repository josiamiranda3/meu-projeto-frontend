import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-default-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent], 
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent {
  @ViewChild('backgroundAudio') backgroundAudio!: ElementRef<HTMLAudioElement>;
  isAudioPlaying = false;

  toggleAudio() {
    const audio = this.backgroundAudio.nativeElement;
    if (this.isAudioPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    this.isAudioPlaying = !this.isAudioPlaying;
  }
}
