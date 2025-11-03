import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'app-about',
	standalone: true,
	imports: [IonicModule, CommonModule, RouterModule],
	templateUrl: './about.page.html',
	styleUrls: ['./about.page.scss'],
})
export class AboutPage {}
