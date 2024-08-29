import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { AboutSectionData } from './AboutSectionData';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  aboutData: AboutSectionData = {
    aboutMe: '',
    linkedInLink: ''
  };
  faLinkedinIn = faLinkedinIn;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchAboutData();
  }

  fetchAboutData(): void {
    this.http.get<AboutSectionData[]>('http://localhost:3000/api/user')
      .subscribe({
        next: data => {
          // Assuming the response contains an array of AboutSectionData objects
          if (Array.isArray(data) && data.length > 0) {
            this.aboutData = data[0]; // Adjust if needed
          } else {
            console.error('Unexpected data format or empty response');
          }
        },
        error: error => {
          console.error('Error fetching about data', error);
        }
      });
  }
}
