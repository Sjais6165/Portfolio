# Achievement Images

This directory is for storing your achievement images. To add your own achievement images:

1. Add your achievement images to this directory (recommended formats: .jpg, .png)
2. Update the `achievementsData` array in `src/Components/Content/Achievements.jsx` with your achievement information
3. Make sure to use the correct path to your achievement images

Example:
```javascript
{
  id: 1,
  title: "Your Achievement Title",
  organization: "Organization Name",
  description: "Description of your achievement",
  date: "YYYY",
  image: "/src/assets/achievements/your-achievement-image.jpg"
}
```

## Recommended Image Sizes
- Width: 800-1200px
- Height: 600-900px
- Format: JPG or PNG
- File size: Keep under 500KB for optimal performance 