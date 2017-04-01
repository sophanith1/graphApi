import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	public people: any = [];

	constructor(public navCtrl: NavController, public http: Http) {
		this.getItem();
	}

	getItem() {
		this.http.get('https://randomuser.me/api/?results=100')
			.map(res => res.json())
			.subscribe(
				data => {
					this.people = data.results;
				},
				err => {
					alert(err);
				}
			)
	}

}
