import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Loader2, AlertCircle } from "lucide-react";
import { VideoPreview } from "./VideoPreview";
import { useToast } from "@/hooks/use-toast";

interface VideoData {
  operator: string;
  url: string;
  thumbnail: string;
  title: string;
}

export function VideoDownloader() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [videoData, setVideoData] = useState<VideoData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const isValidFacebookUrl = (url: string) => {
    const fbPatterns = [
      /^https?:\/\/(www\.)?facebook\.com\/.*\/videos\/.*/,
      /^https?:\/\/(www\.)?fb\.watch\/.*/,
      /^https?:\/\/(m\.)?facebook\.com\/.*\/videos\/.*/,
    ];
    return fbPatterns.some(pattern => pattern.test(url));
  };

  const handleDownload = async () => {
    if (!url.trim()) {
      setError("Please enter a Facebook video URL");
      return;
    }

    if (!isValidFacebookUrl(url)) {
      setError("Please enter a valid Facebook video URL");
      return;
    }

    setIsLoading(true);
    setError(null);
    setVideoData(null);

    try {
      const response = await fetch(`https://rapido.zetsu.xyz/api/fbdl?url=${encodeURIComponent(url)}`);
      
      if (!response.ok) {
        throw new Error("Failed to process video. Please check the URL and try again.");
      }

      const data: VideoData = await response.json();
      setVideoData(data);
      
      toast({
        title: "Video processed successfully!",
        description: "Your video is ready for download.",
      });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An unexpected error occurred";
      setError(errorMessage);
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleDownload();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-semibold flex items-center justify-center gap-2">
            <Download className="w-6 h-6 text-primary" />
            Facebook Video Downloader
          </CardTitle>
          <CardDescription>
            Paste any Facebook video URL below to download it instantly
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              type="url"
              placeholder="Paste Facebook video URL here..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1"
              data-testid="input-video-url"
            />
            <Button 
              onClick={handleDownload}
              disabled={isLoading || !url.trim()}
              className="px-6"
              data-testid="button-download"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Processing
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </>
              )}
            </Button>
          </div>

          {error && (
            <div className="flex items-center gap-2 p-3 text-sm bg-destructive/10 border border-destructive/20 rounded-md text-destructive" data-testid="error-message">
              <AlertCircle className="w-4 h-4" />
              {error}
            </div>
          )}
        </CardContent>
      </Card>

      {videoData && <VideoPreview videoData={videoData} />}
    </div>
  );
}