import { fetchAllVideoData } from '@/modules/video/store/videoThunks';
import { VideoData } from '@/modules/video/types';
import { useAppDispatch, useAppSelector } from '@/store/hook';
import React, { useEffect } from 'react';
import VideoCard from '../components/VideoCard';

const VideoList = () => {
  const dispatch = useAppDispatch();
  const { videos, loading, error } = useAppSelector((state) => state.video);

  useEffect(() => {
    dispatch(fetchAllVideoData())
  }, []);


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='max-w-4xl w-full  m-auto'>
      {videos.map((video: VideoData) => (
        // <div key={video.id}>{video.title}</div>
        <VideoCard key={video.id} {...video} />
      ))}
    </div>
  );
};

export default VideoList;
