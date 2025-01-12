import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';
import { HotelController } from './hotel.controller';
import { HotelService } from './hotel.service';
import { HotelSchema } from './schemas/hotel.schema';
import { AdminGuard } from '../middleware/admin.middleware';
import { JwtModule } from '@nestjs/jwt';


@Module({
    imports: [
      AuthModule,
      MongooseModule.forFeature([{ name: 'Hotel', schema: HotelSchema }]),
      JwtModule
    ],
    controllers: [HotelController],
    providers: [HotelService,AdminGuard],
  })
  export class HotelModule {}
