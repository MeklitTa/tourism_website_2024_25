import {
    Body,
    Controller,
    Delete,
    Get,
    InternalServerErrorException,
    NotFoundException,
    Param,
    Post,
    Put,
    Query,
    Req,
    UseGuards,
  } from "@nestjs/common";
  
  import { HotelService } from './hotel.service';
  import { CreateHotelDto } from "./dto/create-hotel.dto";
  import { ModifyHotelDto } from "./dto/modify-hotel.dto";
  import { Hotel} from "./schemas/hotel.schema";
  import { User } from "../auth/schemas/user.schema";
  import { Query as ExpressQuery } from "express-serve-static-core";
  import { AdminGuard } from "../middleware/admin.middleware";
  import { AuthService } from "../auth/auth.service";
  
  
  @Controller("Hotels")
  export class HotelController {
    constructor(
      private HotelService: HotelService,
      private authService: AuthService
    ) {}
  
    @Get()
    async getAllHotels(@Query() query: ExpressQuery): Promise<Hotel[]> {
      return this.HotelService.findAll(query);
    }

    @Post("/create")
    async getTeam(@Body() body: {hotelId: string },
    @Req() request: Request) {
      const authHeader = (request.headers as unknown as { authorization: string })
      .authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      console.log("und1");
      return undefined;
    }

    const token = authHeader.split(" ")[1];
    console.log(token);
    const decodedToken = await this.authService.validateToken(token);

    if (!decodedToken) {
      console.log("und2");
      return undefined;
    }

    const userId = decodedToken.id;

      const hotelId = body.hotelId;
      console.log(userId, "usrid");
      const user = await this.authService.findById(userId);
      const Hotel = await this.HotelService.findById(hotelId);
      console.log(user, "user");

     return  {
      message: true
    }; 
    }
  
    
    @Post()
    async createHotel(
      @Body()
      uPplayer: CreateHotelDto,
      @Req() req
    ): Promise<Hotel> {
      const hotel = uPplayer as unknown as Hotel;
      return this.HotelService.create(hotel);
    }
    

    @Put(":id")
    async updateHotel(
      @Param("id")
      id: string,
      @Body()
      uPHotel: ModifyHotelDto
    ): Promise<Hotel> {
      const hotel = uPHotel as unknown as Hotel;
      return this.HotelService.updateById(id, hotel);
    }
  
    @Delete(":id")
    async deleteHotel(
      @Param("id")
      id: string
    ): Promise<Hotel> {
      return this.HotelService.deleteById(id);
    }
  }
  