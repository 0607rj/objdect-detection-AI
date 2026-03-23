# Object Detection App

A Next.js web application for real-time object detection using TensorFlow.js and COCO-SSD model. Detect and identify objects in real-time through your webcam.

## 🚀 Live Demo

Try the live application here: [https://object-detection-ai.netlify.app/](https://object-detection-ai.netlify.app/)

## Features

- 🎥 **Real-time Webcam Streaming** - Live video feed from your webcam
- 🔍 **Object Detection** - Powered by TensorFlow.js COCO-SSD model
- ⚡ **Fast Inference** - Browser-based processing with GPU acceleration
- 🎨 **Modern UI** - Built with React and Tailwind CSS
- 📱 **Responsive Design** - Works on desktop and mobile devices

## Tech Stack

- **Framework** - [Next.js](https://nextjs.org/) 16.1.6
- **React** - 19.2.3
- **ML/AI** - TensorFlow.js with COCO-SSD pre-trained model
- **Styling** - Tailwind CSS
- **Video Capture** - React Webcam
- **Linting** - ESLint

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager
- Modern web browser with webcam access

### Installation

1. Clone or navigate to the project directory:
```bash
cd obj-detection
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

1. **Allow Webcam Access** - Grant permission when prompted
2. **Start Detection** - The object detection model will load and begin analyzing video
3. **View Results** - Detected objects appear with bounding boxes and confidence scores

## Project Structure

```
obj-detection/
├── app/
│   ├── layout.js          # Root layout component
│   ├── page.js            # Home page
│   └── globals.css        # Global styles
├── components/
│   └── object-detection.js # Main object detection component
├── utils/
│   └── render-prediction.js # Utility for rendering predictions
├── public/                # Static assets
├── next.config.mjs       # Next.js configuration
├── tailwind.config.cjs   # Tailwind CSS configuration
└── package.json          # Dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Model Information

This project uses the **COCO-SSD** (Common Objects in Context - Single Shot Detector) pre-trained model which can detect:
- People, animals, vehicles
- Furniture, appliances, food
- Sports equipment, and more

The model is automatically downloaded on first use and cached in the browser.

## Performance

- Model inference runs in real-time in the browser
- No server-side processing needed
- GPU acceleration available on supported devices
- Optimized for modern browsers (Chrome, Firefox, Safari, Edge)

## Browser Compatibility

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Troubleshooting

### Webcam not working
- Check browser permissions for camera access
- Ensure HTTPS (required for webcam access in production)
- Try a different browser

### Slow detection
- Check your internet connection for model download
- Close other browser tabs
- Ensure GPU acceleration is enabled

## Future Enhancements

- Add custom model support
- Image upload detection
- Detection history/logging
- Performance metrics dashboard
- Multi-model comparison

## Resources

- [TensorFlow.js Documentation](https://js.tensorflow.org/)
- [COCO-SSD Model](https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd)
- [Next.js Documentation](https://nextjs.org/docs)
- [React Webcam](https://github.com/mozmorris/react-webcam)

## License

This project is open source and available under the MIT License.
