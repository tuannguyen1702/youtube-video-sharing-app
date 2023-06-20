import {
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
  Body,
} from '@nestjs/common';
import { VideosService } from './videos.service';
import { JwtAuthGuard } from '../users/jwt/jwt.service';

@Controller('videos')
export class VideosController {
  constructor(private readonly videosService: VideosService) {}
  @Get()
  getAll(): Promise<any> {
    return this.videosService.getAll();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() body: any, @Request() req: any): Promise<any> {
    const { user } = req;
    const { sharedLink } = body;
    return this.videosService.create(sharedLink, user);
  }
}
