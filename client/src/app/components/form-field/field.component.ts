import { Component, Input } from '@angular/core';

@Component({
	selector: 'field',
	templateUrl: './field.component.html',
	styleUrls: ['./field.component.css'],
})
export class FieldComponent {
	@Input()
	public fieldTitle: string;
}
