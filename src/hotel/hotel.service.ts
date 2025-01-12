
import {
    BadRequestException,
    Injectable,   
    NotFoundException,
  } from '@nestjs/common';
  import { InjectModel } from '@nestjs/mongoose';
  import * as mongoose from 'mongoose';
  import { Hotel } from './schemas/hotel.schema';
  import { JwtService } from '@nestjs/jwt';
  import { Query } from 'express-serve-static-core';
  import { User } from '../auth/schemas/user.schema';
@Injectable()
export class HotelService {
    constructor(
        @InjectModel(Hotel.name)
        private hotelModel: mongoose.Model<Hotel>,
        @InjectModel(Hotel.name)
        private userModel: mongoose.Model<User>,
        private jwtService: JwtService,
      ) {}
    
      async findAll(query: Query): Promise<Hotel[]> {
    
        const Hotels = await this.hotelModel
          .find();
        return Hotels;
      }
    
      // async create(hotel: Hotel): Promise<Hotel> {
      //   const data = Object.assign(hotel);
    
      //   const res = await this.hotelModel.create(data);
      //   return res;
      // }
      async create(hotel: Hotel): Promise<Hotel> {
        try {
          const data = Object.assign(hotel);
          const res = await this.hotelModel.create(data);
          return res;
        } catch (error) {
          console.error("Error creating hotel:", error);
          throw new BadRequestException("Failed to create hotel");
        }
      }
    
      async findById(id: string): Promise<Hotel | null > {
        const isValidId = mongoose.isValidObjectId(id);
    
        if (!isValidId) {
          return null;
          // throw new BadRequestException('Please enter correct id.');
        }
    
        const hotel = await this.hotelModel.findById(id);
    
        if (!hotel) {
          // throw new NotFoundException('Player not found.');
          return null;
        }
    
        return hotel;
      }
    
      async updateById(id: string, hotel: Hotel): Promise<Hotel> {
        return await this.hotelModel.findByIdAndUpdate(id, hotel, {
          new: true,
          runValidators: true,
        });
      }
    
      async deleteById(id: string): Promise<Hotel> {
        return await this.hotelModel.findByIdAndDelete(id);
      }
      async addById(id: string): Promise<User>{
        const user = this.userModel.findById(id);
        return user;
      }

      async validateToken(token: string): Promise<any> {
        try {
          const decoded = this.jwtService.verify(token);
          return decoded;
        } catch (error) {
          console.error('Invalid token:', error.message);
          return null;
        }
      }
    }
    