import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = [
    {
      title: 'FrontEnd', items: [
        { name: 'HTML5', icon: 'assets/icons/skills/html.svg' },
        { name: 'CSS3', icon: 'assets/icons/skills/css.svg' },
        { name: 'JavaScript', icon: 'assets/icons/skills/javascript.svg' },
        { name: 'React', icon: 'assets/icons/skills/react.svg' },
        { name: 'TypeScript', icon: 'assets/icons/skills/typescript.svg' },
        { name: 'Angular', icon: 'assets/icons/skills/angular.svg' },
      ]
    },
    {
      title: 'Backend', items: [
        { name: 'Python', icon: 'assets/icons/skills/python.svg' },
        { name: 'PHP', icon: 'assets/icons/skills/php.svg' },
        { name: 'C++', icon: 'assets/icons/skills/c++.svg' },
        { name: 'C', icon: 'assets/icons/skills/c.svg' },
        { name: 'Java', icon: 'assets/icons/skills/java.svg' },
      ]
    },
    {
      title: 'Databases', items: [
        { name: 'MySQL', icon: 'assets/icons/skills/mysql.svg' },
        { name: 'SQLServer', icon: 'assets/icons/skills/sqlserver.svg' }
      ]
    },
    {
      title: 'Other Tools', items: [
        { name: 'Git', icon: 'assets/icons/skills/git.svg' },
        { name: 'Github', icon: 'assets/icons/skills/github.svg' },
        { name: 'Docker', icon: 'assets/icons/skills/docker.svg' },
        { name: 'Figma', icon: 'assets/icons/skills/figma.svg' }
      ]
    }
  ];
}
