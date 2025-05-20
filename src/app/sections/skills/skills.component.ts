import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  imports: [CommonModule, MatCardModule, MatProgressBarModule],
  standalone: true,
})
export class SkillsComponent implements OnInit {
  constructor() {}
  skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'Angular', level: 90 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 70 },
        { name: 'Express', level: 65 },
        { name: 'MongoDB', level: 60 },
      ],
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'Firebase', level: 70 },
        { name: 'Linux', level: 60 },
      ],
    },
  ];

  ngOnInit() {}
}