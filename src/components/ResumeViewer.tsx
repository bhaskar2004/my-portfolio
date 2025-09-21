import { Button } from "@/components/ui/button";
import { Download, Eye } from "lucide-react";

const ResumeViewer = () => {
  // Use the correct base URL path
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
    // Create a new window with custom HTML that includes navbar and PDF
    const newWindow = window.open('', '_blank', 'width=1400,height=900,scrollbars=yes,resizable=yes');
    
    if (newWindow) {
      newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Bhaskar T - Resume</title>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            
            body {
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              min-height: 100vh;
              overflow: hidden;
            }
            
            .navbar {
              background: rgba(255, 255, 255, 0.95);
              backdrop-filter: blur(20px);
              border-bottom: 1px solid rgba(255, 255, 255, 0.2);
              padding: 0 32px;
              height: 72px;
              display: flex;
              align-items: center;
              justify-content: space-between;
              box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
              position: sticky;
              top: 0;
              z-index: 100;
            }
            
            .back-btn {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              border: none;
              padding: 12px 24px;
              border-radius: 12px;
              font-weight: 600;
              cursor: pointer;
              display: flex;
              align-items: center;
              gap: 10px;
              transition: all 0.3s ease;
              font-size: 14px;
              box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
              position: relative;
              overflow: hidden;
            }
            
            .back-btn::before {
              content: '';
              position: absolute;
              top: 0;
              left: -100%;
              width: 100%;
              height: 100%;
              background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
              transition: left 0.6s;
            }
            
            .back-btn:hover::before {
              left: 100%;
            }
            
            .back-btn:hover {
              transform: translateY(-2px);
              box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
            }
            
            .back-btn:active {
              transform: translateY(0);
            }
            
            .title {
              font-size: 24px;
              font-weight: 700;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              text-align: center;
              letter-spacing: -0.5px;
            }
            
            .download-btn {
              background: white;
              color: #667eea;
              border: 2px solid #667eea;
              padding: 12px 24px;
              border-radius: 12px;
              font-weight: 600;
              cursor: pointer;
              display: flex;
              align-items: center;
              gap: 10px;
              transition: all 0.3s ease;
              font-size: 14px;
              box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
              position: relative;
              overflow: hidden;
            }
            
            .download-btn::before {
              content: '';
              position: absolute;
              top: 0;
              left: -100%;
              width: 100%;
              height: 100%;
              background: linear-gradient(135deg, #667eea 0%, #e2dfe6ff 100%);
              transition: left 0.3s;
              z-index: -1;
            }
            
            .download-btn:hover::before {
              left: 0;
            }
            
            .download-btn:hover {
              color: white;
              transform: translateY(-2px);
              box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
              border-color: transparent;
            }
            
            .pdf-container {
              height: calc(100vh - 72px);
              padding: 24px;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            
            .pdf-wrapper {
              width: 100%;
              max-width: 1200px;
              height: 100%;
              position: relative;
            }
            
            .pdf-viewer {
              width: 100%;
              height: 100%;
              border: none;
              border-radius: 20px;
              box-shadow: 
                0 25px 50px rgba(0, 0, 0, 0.25),
                0 0 0 1px rgba(255, 255, 255, 0.2);
              background: white;
              transition: all 0.3s ease;
            }
            
            .pdf-viewer:hover {
              transform: translateY(-2px);
              box-shadow: 
                0 30px 60px rgba(0, 0, 0, 0.3),
                0 0 0 1px rgba(255, 255, 255, 0.2);
            }
            
            .loading-spinner {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 50px;
              height: 50px;
              border: 3px solid rgba(255, 255, 255, 0.3);
              border-radius: 50%;
              border-top-color: #667eea;
              animation: spin 1s ease-in-out infinite;
            }
            
            @keyframes spin {
              to { transform: translate(-50%, -50%) rotate(360deg); }
            }
            
            .icon {
              width: 18px;
              height: 18px;
              transition: transform 0.2s ease;
            }
            
            .back-btn:hover .icon {
              transform: translateX(-2px);
            }
            
            .download-btn:hover .icon {
              transform: translateY(-1px);
            }
            
            /* Responsive design */
            @media (max-width: 768px) {
              .navbar {
                padding: 0 16px;
                height: 64px;
              }
              
              .title {
                font-size: 18px;
              }
              
              .back-btn, .download-btn {
                padding: 10px 16px;
                font-size: 13px;
              }
              
              .icon {
                width: 16px;
                height: 16px;
              }
              
              .pdf-container {
                padding: 16px;
                height: calc(100vh - 64px);
              }
            }
            
            /* Custom scrollbar */
            ::-webkit-scrollbar {
              width: 8px;
            }
            
            ::-webkit-scrollbar-track {
              background: rgba(255, 255, 255, 0.1);
            }
            
            ::-webkit-scrollbar-thumb {
              background: rgba(102, 126, 234, 0.5);
              border-radius: 4px;
            }
            
            ::-webkit-scrollbar-thumb:hover {
              background: rgba(102, 126, 234, 0.7);
            }
          </style>
        </head>
        <body>
          <nav class="navbar">
            <button class="back-btn" onclick="window.close()" title="Return to Portfolio">
              <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Back to Portfolio
            </button>
            <div class="title">Bhaskar T — Resume</div>
            <button class="download-btn" onclick="downloadPDF()" title="Download PDF">
              <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              Download PDF
            </button>
          </nav>
          <div class="pdf-container">
            <div class="pdf-wrapper">
              <div class="loading-spinner"></div>
              <iframe 
                class="pdf-viewer" 
                src="${resumePath}#toolbar=1&navpanes=1&scrollbar=1&view=FitH" 
                title="Resume PDF Viewer"
                onload="document.querySelector('.loading-spinner').style.display='none'"
              ></iframe>
            </div>
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
              
              // Add download feedback
              const btn = document.querySelector('.download-btn');
              const originalText = btn.innerHTML;
              btn.innerHTML = '<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>Downloaded!';
              btn.style.background = '#10b981';
              btn.style.borderColor = '#10b981';
              btn.style.color = 'white';
              
              setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = 'white';
                btn.style.borderColor = '#667eea';
                btn.style.color = '#667eea';
              }, 2000);
            }
            
            // Add some nice loading effects
            window.addEventListener('load', () => {
              document.body.style.opacity = '0';
              document.body.style.transition = 'opacity 0.3s ease';
              requestAnimationFrame(() => {
                document.body.style.opacity = '1';
              });
            });
          </script>
        </body>
        </html>
      `);
      newWindow.document.close();
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Button 
        onClick={handleView}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 text-lg hover:shadow-lg hover:-translate-y-0.5"
      >
        <Eye size={20} />
        View Resume
      </Button>
      <Button 
        onClick={handleDownload}
        variant="outline"
        className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 text-lg hover:shadow-lg hover:-translate-y-0.5"
      >
        <Download size={20} />
        Download PDF
      </Button>
    </div>
  );
};

export default ResumeViewer;