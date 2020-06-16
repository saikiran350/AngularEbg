import { Component } from '@angular/core';

@Component({
  selector: 'app-ebg',
  templateUrl: './ebg.component.html',
  styleUrls: ['./ebg.component.css']
})
export class EbgComponent {

  constructor() { }

  selectedValue;

	data:Array<Object> = [
		{ id: 0, name: "variable"},
		{ id: 1,  name: 50},
		{ id: 2,  name: 60}
	];

	selectedFrequency(event) {
		this.selectedValue = event.target.value;
	}
 
}

/* let selectedValue = event.target.value;

if(this.selectedValue === 'variable') {
	console.log("select frequency value is variable value");	
	console.log("reply type value ");
	this.speedContainer = false;	
} else {
	this.frequencySourceContainer = false;
}
*/