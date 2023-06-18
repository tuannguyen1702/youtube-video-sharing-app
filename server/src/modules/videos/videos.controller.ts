import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('videos')
export class VideosController {
  @UseGuards(AuthGuard('jwt'))
  @Get()
  getVideos(): Promise<any> {
    return new Promise((resole) => resole({}));
  }
}
