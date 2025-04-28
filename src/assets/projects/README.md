# Project Images

This directory is for storing your project images. To add your own project images:

1. Add your project images to this directory (recommended formats: .jpg, .png)
2. Update the `projectsData` array in `src/Components/Content/Projects.jsx` with your project information
3. Make sure to use the correct path to your project images

Example:
```javascript
{
  id: 1,
  title: "Your Project Title",
  description: "Description of your project",
  technologies: ["React", "Node.js", "MongoDB"],
  image: "/src/assets/projects/your-project-image.jpg",
  githubLink: "https://github.com/yourusername/yourproject",
  liveLink: "https://yourproject.com"
}
```

## Recommended Image Sizes
- Width: 1200-1600px
- Height: 800-1000px
- Format: JPG or PNG
- File size: Keep under 1MB for optimal performance
- Aspect ratio: 16:9 or 4:3 recommended for project screenshots 