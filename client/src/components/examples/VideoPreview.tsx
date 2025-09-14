import { VideoPreview } from '../VideoPreview';

// Mock data based on the API response example
const mockVideoData = {
  operator: "rapido",
  url: "https://video-iad3-1.xx.fbcdn.net/o1/v/t2/f2/m366/sample-video.mp4",
  thumbnail: "https://scontent-iad3-1.xx.fbcdn.net/v/t15.5256-10/543786371_1846543205901817_5544409694417390277_n.jpg",
  title: "CRAZY Nose Pulling Championship Makes No Sense 🤣"
};

export default function VideoPreviewExample() {
  return <VideoPreview videoData={mockVideoData} />;
}