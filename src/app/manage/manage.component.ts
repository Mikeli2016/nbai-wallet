import { Component, OnInit, Input } from '@angular/core';
import { Account } from '../account';
import { WalletService } from '../wallet.service';
import { TranslationService } from '../translation.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
})

export class ManageComponent implements OnInit {
  msgNum: number = 0;
  accounts: Array<Account>;
  total: number;
  totalStr: string
  scanUrl: String = environment.scanUrl;

  constructor(private walletService: WalletService,
    public translationService: TranslationService) {
  }

  ngOnInit() {
    this.walletService.getTotal().subscribe(
      (res: number) => {
        // console.log('res total', res); 
        this.total = res; 
      },
      err => console.error(err)
    );

    this.walletService.getTotalStr().subscribe(
      (res: string) => {
        console.log('res total', res); 
        this.totalStr = res; 
      },
      err => console.error(err)
    );
  }

}
