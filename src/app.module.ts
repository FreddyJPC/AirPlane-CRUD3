import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AirplanesModule } from './airplanes/airplanes.module';

@Module({
  imports: [PrismaModule, AirplanesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
