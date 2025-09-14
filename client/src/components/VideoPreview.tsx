import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, ExternalLink, Loader2, Play } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface VideoData {
  operator: string;
  url: string;
  thumbnail: string;
  title: string;
}

interface VideoPreviewProps {
  videoData: VideoData;
}

export function VideoPreview({ videoData }: VideoPreviewProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);
  const { toast } = useToast();

  const handleDownload = async () => {
    setIsDownloading(true);
    
    try {
      // Create a temporary link to trigger download
      const link = document.createElement('a');
      link.href = videoData.url;
      link.download = `${videoData.title || 'facebook-video'}.mp4`;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast({
        title: "Download started!",
        description: "Your video download should begin shortly.",
      });
    } catch (err) {
      toast({
        title: "Download failed",
        description: "Unable to download the video. Please try opening the direct link.",
        variant: "destructive",
      });
    } finally {
      setIsDownloading(false);
    }
  };

  const openDirectLink = () => {
    window.open(videoData.url, '_blank');
  };

  return (
    <Card data-testid="video-preview">
      <CardHeader>
        <CardTitle className="text-lg">Video Ready for Download</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Video Player / Thumbnail */}
          <div className="flex-shrink-0">
            {showPlayer ? (
              <video
                controls
                className="w-full md:w-40 h-32 object-cover rounded-md border"
                src={videoData.url}
                poster={videoData.thumbnail}
                data-testid="video-player"
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="relative">
                <img
                  src={videoData.thumbnail}
                  alt="Video thumbnail"
                  className="w-full md:w-40 h-32 object-cover rounded-md border"
                  data-testid="img-thumbnail"
                />
                <Button
                  size="icon"
                  className="absolute inset-0 m-auto w-12 h-12 bg-black/60 hover:bg-black/80 border-white/20"
                  onClick={() => setShowPlayer(true)}
                  data-testid="button-play"
                >
                  <Play className="w-6 h-6 text-white fill-white" />
                </Button>
              </div>
            )}
          </div>

          {/* Video Info */}
          <div className="flex-1 space-y-3">
            <div>
              <h3 className="font-medium text-foreground leading-tight" data-testid="text-title">
                {videoData.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Processed by {videoData.operator}
              </p>
            </div>

            {/* Download Actions */}
            <div className="flex flex-col sm:flex-row gap-2">
              <Button 
                onClick={handleDownload}
                disabled={isDownloading}
                className="flex-1 sm:flex-initial"
                data-testid="button-download-video"
              >
                {isDownloading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Downloading
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 mr-2" />
                    Download Video
                  </>
                )}
              </Button>
              
              <Button 
                variant="outline" 
                onClick={openDirectLink}
                className="flex-1 sm:flex-initial"
                data-testid="button-open-link"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Open Direct Link
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}