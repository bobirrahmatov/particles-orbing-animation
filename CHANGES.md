# Data Orb Animation - Changes Documentation

## Overview
This project has been updated to create a blue data orb animation with a modern light/dark theme toggle, inspired by shadcn design principles.

## Changes Made

### 1. **Particle Animation Simplification**
   - **Removed**: Secondary shapes (cone and icosahedron geometries)
   - **Kept**: Single sphere geometry only for a clean, rounded particle effect
   - **Updated**: Particles now remain consistently blue (#2dabff)
   - **Enhanced**: Data scattering effect with organic particle movement

### 2. **Fog Effects - Kept Fog 1 Only**
   - **Kept Fog 1**: Blue fog (#0099ff) for atmospheric depth
   - **Removed fog color 2** (pink) and **fog color 3** (yellow)
   - Fog adds depth perception to the particle cloud
   - Adjustable fog distance (start/end) in dat.GUI
   - Single fog color creates cohesive visual effect

### 3. **Shape Cycling Removed**
   - Removed slider component
   - Eliminated automatic cycling between different shapes
   - Simplified animation to focus on pulsing orb effect
   - Maintained smooth particle scattering animation

### 4. **Theme Toggle Implementation**
   - Added shadcn-inspired light/dark theme toggle
   - **Light Theme**: Clean white background (#f0f4f8)
   - **Dark Theme**: Deep dark background (#0a0a0f)
   - Smooth transitions between themes
   - Theme preference saved to localStorage
   - Animated sun/moon icons

### 5. **UI Improvements**
   - Modern toggle button with hover effects
   - Smooth color transitions
   - Responsive button placement (top-right corner)
   - dat.GUI compatibility with both themes

## Files Modified

### Resources (Source Files)
- `resources/assets/js/app.js` - Removed slider, simplified animation loop
- `resources/assets/js/webgl/particle.js` - Single shape, blue color only
- `resources/assets/js/webgl/particle-stage.js` - Updated default background
- `resources/assets/js/webgl/shaders/vertexshader.vert` - Simplified vertex logic
- `resources/assets/js/webgl/shaders/fragmentshader.frag` - Removed fog effects
- `resources/assets/css/app.scss` - Added theme variables and toggle styles
- `resources/assets/js/theme-toggle.js` - New theme toggle component

### Public (Compiled Files)
- `public/index.html` - Updated with theme toggle scripts
- `public/assets/css/app.css` - Compiled theme styles
- `public/assets/js/theme-toggle.js` - Standalone theme toggle
- `public/assets/js/init.js` - Renderer initialization helper

## Features

### Blue Data Orb Animation
- 1200 blue particles forming a sphere
- Organic scattering and reforming motion
- Continuous pulsing animation every 8 seconds
- Smooth rotation with configurable speed
- Bloom effect for visual depth

### Theme Toggle
- **Dark Mode** (Default)
  - Background: #0a0a0f
  - Perfect for showcasing the glowing blue particles
  
- **Light Mode**
  - Background: #f0f4f8
  - Clean, professional appearance
  - Particles remain visible and vibrant

### Design Principles
- Shadcn-inspired component design
- Smooth transitions and micro-interactions
- Modern, minimal aesthetic
- Accessible button with ARIA labels

## Usage

### Opening the Animation
Simply open `public/index.html` in a modern web browser.

### Theme Toggle
Click the sun/moon button in the top-right corner to switch between light and dark modes.

### Debug Controls
The dat.GUI panel (bottom-right) allows you to adjust:
- **Fog 1 controls**: start distance, end distance, and color
- Particle duration
- Animation range
- Particle move range and speed
- Bloom effects
- Particle color
- Background color

## Technical Details

### Technologies Used
- Three.js (WebGL rendering)
- GSAP (Animation)
- Custom GLSL shaders
- Vanilla JavaScript (Theme toggle)
- CSS custom properties (Theme system)

### Browser Compatibility
- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile: Responsive (may have reduced particle count for performance)

## Performance
- 1200 particles optimized for 60fps
- Efficient shader-based animations
- Smooth theme transitions without animation interruption
- No external dependencies for theme system

## Future Enhancements
- Additional particle colors
- More animation patterns
- Interactive particle response to mouse/touch
- Customizable particle density
- Export animation as video

---

**Created**: January 2026
**Based on**: 3D Particle Morphing by Hisami Kurita

