using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.Drawing.Drawing2D;
using System.IO;

public class ImgUtil {
  static ImageCodecInfo JpegCodec() {
    foreach (var c in ImageCodecInfo.GetImageEncoders()) if (c.MimeType == "image/jpeg") return c;
    return null;
  }
  public static void Resize(string src, string dst, int maxDim, long quality) {
    using (var img = Image.FromFile(src)) {
      double scale = Math.Min(1.0, (double)maxDim / Math.Max(img.Width, img.Height));
      int w = (int)Math.Round(img.Width * scale), h = (int)Math.Round(img.Height * scale);
      using (var bmp = new Bitmap(w, h, PixelFormat.Format24bppRgb))
      using (var g = Graphics.FromImage(bmp)) {
        g.InterpolationMode = InterpolationMode.HighQualityBicubic;
        g.SmoothingMode = SmoothingMode.HighQuality;
        g.PixelOffsetMode = PixelOffsetMode.HighQuality;
        g.CompositingQuality = CompositingQuality.HighQuality;
        g.DrawImage(img, new Rectangle(0, 0, w, h));
        var ep = new EncoderParameters(1);
        ep.Param[0] = new EncoderParameter(Encoder.Quality, quality);
        Directory.CreateDirectory(Path.GetDirectoryName(dst));
        bmp.Save(dst, JpegCodec(), ep);
      }
    }
  }
  public static void CircleLogo(string src, string dst, int size) {
    using (var img = Image.FromFile(src)) {
      var bmp = new Bitmap(size, size, PixelFormat.Format32bppArgb);
      using (var g = Graphics.FromImage(bmp)) {
        g.InterpolationMode = InterpolationMode.HighQualityBicubic;
        g.SmoothingMode = SmoothingMode.HighQuality;
        g.PixelOffsetMode = PixelOffsetMode.HighQuality;
        g.DrawImage(img, new Rectangle(0, 0, size, size));
      }
      var outBmp = new Bitmap(size, size, PixelFormat.Format32bppArgb);
      double cx = (size - 1) / 2.0, cy = (size - 1) / 2.0, r = size / 2.0 - 1.5;
      for (int y = 0; y < size; y++) {
        for (int x = 0; x < size; x++) {
          double d = Math.Sqrt((x - cx) * (x - cx) + (y - cy) * (y - cy));
          double a = (r - d) * 1.5 + 0.5;
          if (a > 1) a = 1; if (a < 0) a = 0;
          var p = bmp.GetPixel(x, y);
          outBmp.SetPixel(x, y, Color.FromArgb((int)(a * 255), p.R, p.G, p.B));
        }
      }
      Directory.CreateDirectory(Path.GetDirectoryName(dst));
      outBmp.Save(dst, ImageFormat.Png);
      outBmp.Dispose();
      bmp.Dispose();
    }
  }
}
