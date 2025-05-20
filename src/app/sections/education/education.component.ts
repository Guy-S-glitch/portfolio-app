import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  imports:[CommonModule],
  standalone: true,
})
export class EducationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  educationEntries = [
    {
      year: '2022',
      degree: 'Diploma – Technicians and Engineers',
      institution: 'Ashkelon University',
      description:
        'Focused on software engineering, algorithms, and data structures.',
      imageUrl: 'assets/images/Ashkelon.jpg',
    },
    {
      year: '2018',
      degree: 'High School Diploma',
      institution: 'Technological certification certificate',
      description: 'Majored in Mathematics and Physics.',
      imageUrl: 'assets/images/Ashkelon-high.jpg',
    },
    // Add more entries as needed
  ];
}
