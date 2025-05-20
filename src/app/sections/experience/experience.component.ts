import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  experienceEntries = [
    {
      year: '2024 - 2025',
      title:
        'Graduate, Pre-Military Academy “Chance to Change”, Beit Berl, Israel',
      description: [
        'Completed a year-long preparatory program focused on leadership, physical resilience, and national contribution.',
        'Engaged in intensive physical training: treks, field weeks, navigation, night drills.',
        'Participated in daily teamwork within a diverse and inclusive group.',
        'Held responsibilities in logistics, cooking, and group coordination.',
        'Contributed to civic engagement, ethical discussions, and community projects.',
      ],
      imageUrl: '../../assets/images/Chance_To_Change.png',
    },
    {
      year: '2024 - 2025',
      title: 'Wheelchair Technician, Kfar Saba, Israel',
      description: [
        'Provided technical support and repair services for mobility equipment.',
        'Applied mechanical and electrical knowledge for diagnostics and maintenance.',
        'Adapted solutions to specific user needs, improving comfort and reliability.',
        'Developed practical problem-solving skills and customer service experience.',
      ],
      imageUrl: '../../assets/images/Will_To_Wheel.jpeg',
    },
    {
      year: '2023 - 2024',
      title: 'Reshef Technologies, Sderot, Israel',
      description: [
        'Performed electrical testing while maintaining strict safety protocols',
        ' Demonstrated deep understanding of complex electronic systems ',
        ' identified faults in electronic boards using a Fluke multimeter.',
      ],
      imageUrl: '../../assets/images/Reshef_Technologies.jpeg',
    },
    // Add more entries as needed
  ];
}
