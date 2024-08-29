import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.fetchProjectsData();
  }

  fetchProjectsData(): void {
    this.dataService.getUserData().subscribe(
      (data: any) => {
        if (Array.isArray(data) && data.length > 0) {
          this.projects = data[0].projects || [];
        } else {
          console.error('Unexpected data format or empty response');
        }
      },
      (error: any) => {
        console.error('Error fetching projects data:', error);
      }
    );
  }
}
