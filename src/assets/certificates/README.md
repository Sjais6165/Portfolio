# Certificate Images

This directory is for storing your certificate images. To add your own certificates:

1. Add your certificate images to this directory (recommended formats: .jpg, .png)
2. Update the `certificatesData` array in `src/Components/Content/Certificates.jsx` with your certificate information
3. Make sure to use the correct path to your certificate images

Example:
```javascript
{
  id: 1,
  title: "Your Certificate Title",
  provider: "Certificate Provider",
  date: "Month' YY",
  image: "/src/assets/certificates/your-certificate-image.jpg"
}
```

## Recommended Image Sizes
- Width: 800-1200px
- Height: 600-900px
- Format: JPG or PNG
- File size: Keep under 500KB for optimal performance 