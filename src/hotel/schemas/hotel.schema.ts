import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from '../../auth/schemas/user.schema';
import { AdminGuard } from 'middleware/admin.middleware';

@Schema({
    timestamps: true,
  })
  export class Hotel {
    @Prop()
    name: string;
    @Prop()
    image: string;

    @Prop({ type: String })
    city: string;

    @Prop({ type: Number })
    rating: number;

    @Prop({ type: Number })
    price: number;
    
  }
  
  export const HotelSchema = SchemaFactory.createForClass(Hotel);



