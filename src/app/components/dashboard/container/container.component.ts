import { Component } from '@angular/core';
import { LeftContainerComponent } from '../left-container/left-container.component';
import { RightContainerComponent } from '../right-container/right-container.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [LeftContainerComponent, RightContainerComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {}
