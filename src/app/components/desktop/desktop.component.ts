import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';

interface WindowItem {
  id: number;
  title: string;
  component: string;
  x: number;
  y: number;
  zIndex: number;
  minimized: boolean;
}

@Component({
  selector: 'app-desktop',
  imports: [CommonModule],
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent implements OnInit {

  ngOnInit(): void {
    this.openWindow('Home', HomeComponent);
  }

  nextId = 1;
  highestZIndex = 1;
  icons = [
    { title: 'Home', component: HomeComponent },
    { title: 'About Me', component: AboutComponent },
    { title: 'Projects', component: ProjectsComponent },
    { title: 'Contact', component: ContactComponent }
  ];

  windows: any[] = [];

  openWindow(title: string, component: any) {
    const newWindow = {
      id: this.windows.length + 1,
      title,
      component,
      x: 100 + this.windows.length * 20,
      y: 100 + this.windows.length * 20,
      zIndex: this.windows.length + 1,
      width: 600,
      height: 600,
      minimized: false,
    };

    this.windows.push(newWindow);
  }

  closeWindow(id: number) {
    this.windows = this.windows.filter(win => win.id !== id);
  }

  toggleMaximize(windowId: string) {
    const window = this.windows.find(w => w.id === windowId);
    if (window) {
      window.isMaximized = !window.isMaximized;
    }
  }


  bringToFront(event: MouseEvent, id: number) {
    const window = this.windows.find(win => win.id === id);
    if (window) {
      window.zIndex = ++this.highestZIndex;

      const initialX = event.clientX;
      const initialY = event.clientY;
      const initialWindowX = window.x;
      const initialWindowY = window.y;

      const onMouseMove = (moveEvent: MouseEvent) => {
        const diffX = moveEvent.clientX - initialX;
        const diffY = moveEvent.clientY - initialY;

        window.x = initialWindowX + diffX;
        window.y = initialWindowY + diffY;
      };

      const onMouseUp = () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    }
  }

  startResize(event: MouseEvent, window: any, direction: string) {
    event.preventDefault();

    const initialX = event.clientX;
    const initialY = event.clientY;
    const initialWidth = window.width;
    const initialHeight = window.height;
    const initialLeft = window.x;
    const initialTop = window.y;

    const onMouseMove = (moveEvent: MouseEvent) => {
      let newWidth = initialWidth;
      let newHeight = initialHeight;
      let newLeft = initialLeft;
      let newTop = initialTop;

      if (direction === 'top-left') {
        newWidth = initialWidth - (moveEvent.clientX - initialX);
        newHeight = initialHeight - (moveEvent.clientY - initialY);
        newLeft = initialLeft + (moveEvent.clientX - initialX);
        newTop = initialTop + (moveEvent.clientY - initialY);
      } else if (direction === 'top-right') {
        newWidth = initialWidth + (moveEvent.clientX - initialX);
        newHeight = initialHeight - (moveEvent.clientY - initialY);
        newTop = initialTop + (moveEvent.clientY - initialY);
      } else if (direction === 'bottom-left') {
        newWidth = initialWidth - (moveEvent.clientX - initialX);
        newHeight = initialHeight + (moveEvent.clientY - initialY);
        newLeft = initialLeft + (moveEvent.clientX - initialX);
      } else if (direction === 'bottom-right') {
        newWidth = initialWidth + (moveEvent.clientX - initialX);
        newHeight = initialHeight + (moveEvent.clientY - initialY);
      }

      window.width = Math.max(newWidth, 100);
      window.height = Math.max(newHeight, 100);

      window.x = newLeft;
      window.y = newTop;
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }


  toggleMinimize(id: number) {
    const window = this.windows.find(win => win.id === id);
    if (window) {
      window.minimized = !window.minimized;
    }
  }

  restoreWindow(id: number) {
    const window = this.windows.find(w => w.id === id);
    if (window) {
      window.minimized = !window.minimized;
      window.zIndex = ++this.highestZIndex;
    }
  }

}


