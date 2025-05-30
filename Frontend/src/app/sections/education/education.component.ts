import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class EducationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  educationEntries = [
    {
      year: '2021 - 2023',
      degree: 'Diploma – Technicians and Engineers',
      institution: 'Ort Afridar Ashkelon',
      description:
        'Completed a comprehensive diploma program focused on practical engineering and technical skills, including advanced coursework in electronics, systems analysis, and project development. Gained hands-on experience with industry-standard tools and technologies.',
      imageUrl: 'assets/images/education images/Diploma.png',
    },
    {
      year: '2018 - 2021',
      degree: 'Technological Certification Certificate',
      institution: 'Ort Afridar Ashkelon',
      description:
        'Earned a certification in applied technology with a focus on electrical systems and practical engineering foundations. Developed strong problem-solving skills and technical knowledge through lab work and real-world applications.',
      imageUrl: 'assets/images/education images/Hasmacha.png',
    },
  ];
}
