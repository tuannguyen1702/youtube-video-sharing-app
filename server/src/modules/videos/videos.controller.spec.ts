import { Test, TestingModule } from '@nestjs/testing';
import { VideosController } from './videos.controller';
import { VideosService } from './videos.service';

describe('VideosController', () => {
  let videosController: VideosController;
  let videosService: VideosService;

  beforeEach(async () => {
    const VideosServiceProvider = {
      provide: VideosService,
      useValue: {
        getAll: jest.fn().mockReturnValue([
          {
            id: '6496d18c95018cf513a20a4a',
            createdAt: '2023-06-24T11:20:44.825Z',
            updatedAt: '2023-06-24T11:20:44.825Z',
            title: 'Video title',
            description: 'Video description',
            sharedLink: 'https://www.youtube.com/watch?v=DZ7ZJzdhhlk',
            youtubeId: 'DZ7ZJzdhhlk',
            createdBy: {
              id: '6496d15f95018cf513a20a49',
              email: 'tuannguyen1702@gmail.com',
            },
          },
        ]),
        create: jest.fn().mockReturnValue({
          id: '6496d18c95018cf513a20a4a',
          createdAt: '2023-06-24T11:20:44.825Z',
          updatedAt: '2023-06-24T11:20:44.825Z',
          title: 'Video title',
          description: 'Video description',
          sharedLink: 'https://www.youtube.com/watch?v=DZ7ZJzdhhlk',
          youtubeId: 'DZ7ZJzdhhlk',
          createdBy: {
            id: '6496d15f95018cf513a20a49',
            email: 'tuannguyen1702@gmail.com',
          },
        }),
      },
    };
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VideosController],
      providers: [VideosService, VideosServiceProvider],
    }).compile();

    videosController = module.get<VideosController>(VideosController);
    videosService = module.get<VideosService>(VideosService);
  });

  describe('getAll', () => {
    it('should call videosService.getAll and return the result', async () => {
      const expectedData: any = [
        [
          {
            id: '6496d18c95018cf513a20a4a',
            createdAt: '2023-06-24T11:20:44.825Z',
            updatedAt: '2023-06-24T11:20:44.825Z',
            title: 'Video title',
            description: 'Video description',
            sharedLink: 'https://www.youtube.com/watch?v=DZ7ZJzdhhlk',
            youtubeId: 'DZ7ZJzdhhlk',
            createdBy: {
              id: '6496d15f95018cf513a20a49',
              email: 'tuannguyen1702@gmail.com',
            },
          },
        ],
      ];

      const getAllMock = jest.spyOn(videosService, 'getAll');
      getAllMock.mockResolvedValue(expectedData);

      const result = await videosController.getAll();
      expect(videosService.getAll).toHaveBeenCalled();

      expect(result).toEqual(expectedData);
    });
  });

  describe('create - share video', () => {
    it('should call videosService.create and return the result', async () => {
      const req = {
        user: {
          id: '6496d15f95018cf513a20a49',
          email: 'tuannguyen1702@gmail.com',
        },
      };

      const createMock = jest.spyOn(videosService, 'create');
      const sharedLink = 'https://www.youtube.com/watch?v=DZ7ZJzdhhlk';

      const expectedResult: any = {
        id: '6496d18c95018cf513a20a4a',
        createdAt: '2023-06-24T11:20:44.825Z',
        updatedAt: '2023-06-24T11:20:44.825Z',
        title: 'Video title',
        description: 'Video description',
        sharedLink: 'https://www.youtube.com/watch?v=DZ7ZJzdhhlk',
        youtubeId: 'DZ7ZJzdhhlk',
        createdBy: {
          id: '6496d15f95018cf513a20a49',
          email: 'tuannguyen1702@gmail.com',
        },
      };

      createMock.mockResolvedValue(expectedResult);

      const result = await videosController.create({ sharedLink }, req);

      expect(createMock).toHaveBeenCalledWith(sharedLink, req.user);

      expect(result).toEqual(expectedResult);
    });
  });
});
