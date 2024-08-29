import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; 

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'] 
})
export class SkillComponent implements OnInit {
  softSkills: string[] = [];
  techSkills: string[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.fetchSkillsData();
  }

  fetchSkillsData(): void {
    this.dataService.getUserData().subscribe(
      (data: any) => {
        if (Array.isArray(data) && data.length > 0) {
          const userData = data[0]; 
          
          this.softSkills = userData.softSkill || []; 
          this.techSkills = userData.techSkill || []; 

        } else {
          console.error('Unexpected data format or empty response');
        }
      },
      (error: any) => {
        console.error('Error fetching skills data:', error);
      }
    );
  }
}