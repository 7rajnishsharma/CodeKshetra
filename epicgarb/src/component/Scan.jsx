// Scan.jsx

import React, { useEffect, useRef } from 'react';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';

const Scan = () => {
  let webcamRef = useRef(null);
  let canvasRef = useRef(null);
  let mobilenetModel = null;

  useEffect(() => {
    const loadModel = async () => {
      mobilenetModel = await mobilenet.load();
      console.log('Model loaded successfully.');
    };

    loadModel();
  }, []);

  const predictFromWebcam = async () => {
    // Access the webcam
    const video = webcamRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Capture a frame from the webcam
    context.drawImage(video, 0, 0, 640, 480);
    const imageData = context.getImageData(0, 0, 640, 480);

    // Convert the image data to a tensor
    const imageTensor = tf.browser.fromPixels(imageData).toFloat();

    // Preprocess the image
    const preprocessedImage = tf.image.resizeBilinear(imageTensor, [224, 224])
      .expandDims(0)
      .div(127.5)
      .sub(1.0);

    // Make predictions
    const predictions = await mobilenetModel.predict(preprocessedImage).data();

    // Find the class with the highest probability
    const maxPrediction = Math.max(...predictions);
    const predictedClass = predictions.indexOf(maxPrediction);

    // Display the result (modify this part based on your application)
    console.log('Predicted Class:', predictedClass);
  };

  useEffect(() => {
    // Access the webcam and classify frames
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        webcamRef.current.srcObject = stream;
      })
      .catch((err) => {
        console.error('Error accessing webcam:', err);
      });

    webcamRef.current.addEventListener('loadeddata', () => {
      setInterval(() => {
        predictFromWebcam();
      }, 1000); // Adjust the interval as needed
    });
  }, []);

  return (
    <div>
      <video ref={webcamRef} width="640" height="480" autoPlay></video>
      <canvas ref={canvasRef} width="640" height="480"></canvas>
    </div>
  );
};

export default Scan;
