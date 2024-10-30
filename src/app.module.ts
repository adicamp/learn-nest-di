import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CpuModule } from './cpu/cpu.module';
import { ComputerModule } from './computer/computer.module';
import { DiskModule } from './disk/disk.module';
import { PowerModule } from './power/power.module';

@Module({
  imports: [CpuModule, ComputerModule, DiskModule, PowerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
