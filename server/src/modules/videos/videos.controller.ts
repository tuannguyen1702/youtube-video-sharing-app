import {
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
  Body,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/auth.guard';
import { VideosService } from './videos.service';

@Controller('videos')
export class VideosController {
  constructor(private readonly videosService: VideosService) {}

  @UseGuards(JwtAuthGuard)
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
