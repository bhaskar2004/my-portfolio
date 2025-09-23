import { Button } from "@/components/ui/button";
import { Download, Eye } from "lucide-react";

const ResumeViewer = () => {
  const resumePath = '/my-portfolio/resume/Bhaskar_T_Resume.pdf';

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Bhaskar_T_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    const newWindow = window.open('', '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes');
    
    if (newWindow) {
      newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Bhaskar T - Resume</title>
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              background: #f8f9fa;
              height: 100vh;
              display: flex;
              flex-direction: column;
            }
            
            .header {
              background: white;
              border-bottom: 1px solid #e9ecef;
              padding: 16px 24px;
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
            
            .title {
              font-size: 18px;
              font-weight: 600;
              color: #212529;
            }
            
            .btn {
              background: #007bff;
              color: white;
              border: none;
              padding: 8px 16px;
              border-radius: 6px;
              font-size: 14px;
              cursor: pointer;
              display: flex;
              align-items: center;
              gap: 8px;
              transition: background-color 0.2s;
            }
            
            .btn:hover {
              background: #0056b3;
            }
            
            .btn-secondary {
              background: #6c757d;
            }
            
            .btn-secondary:hover {
              background: #545862;
            }
            
            .pdf-container {
              flex: 1;
              padding: 24px;
            }
            
            .pdf-viewer {
              width: 100%;
              height: 100%;
              border: 1px solid #dee2e6;
              border-radius: 8px;
              background: white;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <button class="btn btn-secondary" onclick="window.close()">
              ← Back
            </button>
            <div class="title">Resume - Bhaskar T</div>
            <button class="btn" onclick="downloadPDF()">
              ↓ Download
            </button>
          </div>
          <div class="pdf-container">
            <iframe 
              class="pdf-viewer" 
              src="${resumePath}#toolbar=1" 
              title="Resume PDF Viewer"
            ></iframe>
          </div>
          <script>
            function downloadPDF() {
              const link = document.createElement('a');
              link.href = '${resumePath}';
              link.download = 'Bhaskar_T_Resume.pdf';
              link.target = '_blank';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }
          </script>
        </body>
        </html>
      `);
      newWindow.document.close();
    }
  };

  return (
    <div className="flex gap-3 justify-center items-center">
      <Button 
        onClick={handleView}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
      >
        <Eye size={16} />
        View Resume
      </Button>
      <Button 
        onClick={handleDownload}
        variant="outline"
        className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-lg flex items-center gap-2"
      >
        <Download size={16} />
        Download
      </Button>
    </div>
  );
};

export default ResumeViewer;