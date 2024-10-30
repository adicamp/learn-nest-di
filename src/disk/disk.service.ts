import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}

  getData() {
    console.log('Disk needs 20 watts to show data');
    this.powerService.supplyPower(20, 'Disk');
    return 'data taken from disk';
  }
}
