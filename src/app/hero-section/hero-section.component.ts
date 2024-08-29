import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { HeroSectionData } from './hero-section-data';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
  imports: [FontAwesomeModule]
})
export class HeroSectionComponent implements OnInit {
  heroData: HeroSectionData = {
    name: '',
    titleHome: '',
    pForTitle: '',
    cvLink: ''
  };
  faFile = faFile;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchHeroData();
  }

  fetchHeroData(): void {
    this.http.get<HeroSectionData>('http://localhost:3000/api/user')
      .subscribe({
        next: data => {
          if (Array.isArray(data) && data.length > 0) {
            this.heroData = data[0]; 
          } else {
            console.error('Unexpected data format or empty response');
          }
        },
        error: error => {
          console.error('Error fetching hero data', error);
        }
      });
  }
}
