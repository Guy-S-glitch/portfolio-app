import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  imports: [CommonModule, MatCardModule],
  standalone: true,
})
export class SkillsComponent implements OnInit {
  constructor() {}
  skillCategories = [
    {
      title: 'Frontend',
      skills: [
        {
          name: 'Angular',
          icon: 'assets/icons/Frontend/angular.svg',
          description: 'Powerful SPA framework',
        },
        {
          name: 'HTML5',
          icon: 'assets/icons/Frontend/html5.svg',
          description: 'Semantic markup structure',
        },
        {
          name: 'CSS3',
          icon: 'assets/icons/Frontend/css3.svg',
          description: 'Modern styling capabilities',
        },
        {
          name: 'TypeScript',
          icon: 'assets/icons/Frontend/typescript.svg',
          description: 'Typed JS for large-scale apps',
        },
      ],
    },
    {
      title: 'Backend & Tools',
      skills: [
        {
          name: 'Node.js',
          icon: 'assets/icons/Backend & Tools/nodejs.svg',
          description: 'Efficient server-side runtime',
        },
        {
          name: 'GitHub',
          icon: 'assets/icons/Backend & Tools/github.svg',
          description: 'Version control & collaboration',
        },
        {
          name: 'Firebase',
          icon: 'assets/icons/Backend & Tools/firebase.svg',
          description: 'Realtime backend & hosting',
        },
        {
          name: 'C#',
          icon: 'assets/icons/Backend & Tools/csharp.svg',
          description:
            'Object-oriented programming language for .NET applications',
        },
        {
          name: 'MySQL',
          icon: 'assets/icons/Backend & Tools/mysql.svg',
          description: 'Relational database management system',
        },
        {
          name: 'Python',
          icon: 'assets/icons/Backend & Tools/python.svg',
          description: 'Beginner-level scripting and automation skills',
        },
      ],
    },
    {
      title: 'Electronics & Hardware',
      skills: [
        {
          name: 'Arduino',
          icon: 'assets/icons/Electronics & Hardware/arduino.svg',
          description:
            'Hands-on embedded systems development for smart projects',
        },
        {
          name: 'Circuit Design',
          icon: 'assets/icons/Electronics & Hardware/circuit.svg',
          description: 'Design and testing of analog digital circuits',
        },
        {
          name: 'Soldering',
          icon: 'assets/icons/Electronics & Hardware/soldering.svg',
          description: 'Precision soldering for component-level repairs',
        },
        {
          name: 'Multimeter & Tools',
          icon: 'assets/icons/Electronics & Hardware/tools.svg',
          description:
            'Comfortable with measurement, diagnostics, and lab equipment',
        },
      ],
    },
    {
      title: 'Soft Skills',
      skills: [
        {
          name: 'Teamwork',
          icon: 'assets/icons/Soft Skills/teamwork.svg',
          description:
            'Experienced in collaborative problem solving under pressure',
        },
        {
          name: 'Leadership',
          icon: 'assets/icons/Soft Skills/leadership.svg',
          description:
            'Led logistics and team roles during pre-military academy',
        },
        {
          name: 'Resilience',
          icon: 'assets/icons/Soft Skills/resilience.svg',
          description:
            'Mentally tough, with experience in extreme conditions and deadlines',
        },
        {
          name: 'Adaptability',
          icon: 'assets/icons/Soft Skills/adaptability.svg',
          description:
            'Able to adjust quickly in dynamic or high-stress environments',
        },
      ],
    },
  ];

  ngOnInit() {}
}
/**
 * import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = [
    {
      name: 'Angular',
      icon: 'assets/icons/angular.svg',
      description: 'Component-based framework for dynamic web apps'
    },
    {
      name: 'HTML5',
      icon: 'assets/icons/html5.svg',
      description: 'Markup language for structuring web content'
    },
    {
      name: 'CSS3',
      icon: 'assets/icons/css3.svg',
      description: 'Styling language for beautiful UI design'
    },
    {
      name: 'JavaScript',
      icon: 'assets/icons/javascript.svg',
      description: 'Interactive scripting language for web development'
    },
    {
      name: 'TypeScript',
      icon: 'assets/icons/typescript.svg',
      description: 'Typed superset of JavaScript for scalable code'
    },
    {
      name: 'Node.js',
      icon: 'assets/icons/nodejs.svg',
      description: 'JavaScript runtime for backend development'
    },
    {
      name: 'Git & GitHub',
      icon: 'assets/icons/github.svg',
      description: 'Version control and collaboration'
    }
    // Add more skills as needed
  ];
}

 */