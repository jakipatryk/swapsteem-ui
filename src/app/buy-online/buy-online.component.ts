import { Component, OnInit } from '@angular/core';
import {BuySteemService} from '../service/buy-steem.service';
import { take } from 'rxjs/operator/take';

@Component({
  selector: 'app-buy-online',
  templateUrl: './buy-online.component.html',
  styleUrls: ['./buy-online.component.css']
})
export class BuyOnlineComponent implements OnInit {

  constructor(public buySteemService: BuySteemService) { }

  ngOnInit() {
  }

  buyDetails = this.buySteemService.buyOnline();

}
