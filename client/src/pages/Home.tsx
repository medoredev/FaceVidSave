import { VideoDownloader } from "@/components/VideoDownloader";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">FB</span>
              </div>
              <h1 className="text-xl font-semibold text-foreground">
                Facebook Video Downloader
              </h1>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-3">
            Download Facebook Videos Instantly
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Fast, free, and easy way to download videos from Facebook. 
            Just paste the video URL and get your download link in seconds.
          </p>
        </div>

        {/* Video Downloader Component */}
        <VideoDownloader />

        {/* Instructions */}
        <div className="mt-12 max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
            How to Download Facebook Videos
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-card rounded-lg border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-lg">1</span>
              </div>
              <h4 className="font-medium text-foreground mb-2">Copy Video URL</h4>
              <p className="text-sm text-muted-foreground">
                Go to Facebook, find the video you want to download, and copy its URL
              </p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-lg border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-lg">2</span>
              </div>
              <h4 className="font-medium text-foreground mb-2">Paste & Process</h4>
              <p className="text-sm text-muted-foreground">
                Paste the URL in the input field above and click the Download button
              </p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-lg border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-lg">3</span>
              </div>
              <h4 className="font-medium text-foreground mb-2">Download Video</h4>
              <p className="text-sm text-muted-foreground">
                Preview the video and click the download button to save it to your device
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-card/30 mt-16">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-sm text-muted-foreground">
            <p>
              Fast and reliable Facebook video downloader. 
              Download videos in high quality with just a few clicks.
            </p>
            <p className="mt-2">
              Powered by Rapido API • Built with ❤️ for easy video downloads
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}