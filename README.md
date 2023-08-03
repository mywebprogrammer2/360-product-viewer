# 360 Product Viewer

![Product Viewer](https://i.ibb.co/pLB9MXY/360-view.gif)

A simple and efficient 360 product viewer that allows you to upload an MP4 video showcasing the 360 view of your product. This viewer utilizes FFMPEG in the backend to generate a set of images from the video, which are then displayed in an interactive manner using the "react-360-product-viewer" package.

## Features

- Upload MP4 video to showcase 360 view of your product
- Generate a set of images from the uploaded video using FFMPEG
- Display the generated images in an interactive viewer
- Clicking on an image shows a Bootstrap modal for a more detailed view

## Demo

[Link to Demo](link_to_live_demo_if_available)

## Installation

Before running the application, make sure you have [FFMPEG](https://www.ffmpeg.org/) installed on your system. If you haven't installed it yet, you can download it from the official website or use package managers like [Homebrew](https://brew.sh/) (macOS) or [APT](https://wiki.debian.org/Apt) (Linux).

After installing FFMPEG, you need to add the installation path of FFMPEG in the backend code to ensure smooth functionality.

## Usage

Follow the steps below to use the 360 product viewer:

1. Clone this repository to your local machine.
2. Install the required dependencies using the package manager of your choice (e.g., npm or yarn).

```bash
npm install
```

3. Start the application.

```bash
npm start
```

4. Access the application through your web browser. The app should be running at `http://localhost:3000` by default.

5. On the top of the UI, you will see an upload bar. Use it to select an MP4 video file showcasing the 360 view of your product.

6. After selecting the video, click on the "Convert" button to initiate the FFMPEG backend process, which will generate a set of images.

7. Once the process is complete, you will see the generated images displayed as cards below the upload bar.

8. Click on any of the image cards to view a Bootstrap modal with a more detailed and interactive 360 view of your product.

## Contributing

We welcome contributions to enhance the functionality and usability of the 360 product viewer. If you find any bugs or have ideas for new features, feel free to open an issue or submit a pull request.

Please make sure to follow the established coding conventions and keep the code clean and well-documented.

## License

This project is licensed under the [MIT License](link_to_license_file_if_any).

## Acknowledgments

We would like to express our gratitude to the creators of the "react-360-product-viewer" package and the FFMPEG development team for their valuable tools and contributions.


# That would be it :)
