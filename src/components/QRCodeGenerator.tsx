'use client';

import { useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import { QrCode, Download } from 'lucide-react';

interface QRCodeGeneratorProps {
  value: string;
  size?: number;
  title?: string;
  description?: string;
  showDownload?: boolean;
}

export default function QRCodeGenerator({ 
  value, 
  size = 200, 
  title = "Product QR Code",
  description = "Scan to verify authenticity",
  showDownload = true 
}: QRCodeGeneratorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const generateQR = async () => {
      if (canvasRef.current) {
        try {
          await QRCode.toCanvas(canvasRef.current, value, {
            width: size,
            margin: 2,
            color: {
              dark: '#2c2c2c',
              light: '#ffffff'
            }
          });
        } catch (error) {
          console.error('Error generating QR code:', error);
        }
      }
    };

    generateQR();
  }, [value, size]);

  const downloadQR = () => {
    if (canvasRef.current) {
      const link = document.createElement('a');
      link.download = 'product-qr-code.png';
      link.href = canvasRef.current.toDataURL();
      link.click();
    }
  };

  return (
    <div className="bg-white p-6 rounded-card border border-border-subtle text-center">
      <div className="mb-4">
        <div className="flex items-center justify-center gap-2 mb-2">
          <QrCode className="w-5 h-5 text-accent-primary" />
          <h3 className="font-semibold text-foreground">{title}</h3>
        </div>
        <p className="text-sm text-text-muted">{description}</p>
      </div>

      <div className="flex justify-center mb-4">
        <div className="p-4 bg-white rounded-lg shadow-sm border">
          <canvas 
            ref={canvasRef}
            className="block"
          />
        </div>
      </div>

      {showDownload && (
        <button
          onClick={downloadQR}
          className="inline-flex items-center gap-2 bg-accent-primary hover:bg-accent-primary/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          <Download className="w-4 h-4" />
          Download QR Code
        </button>
      )}

      <div className="mt-4 text-xs text-text-muted">
        <p>Scan with any QR code reader to verify product authenticity</p>
      </div>
    </div>
  );
}
