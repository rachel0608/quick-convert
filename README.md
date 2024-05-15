# Currency Converter Chrome Extension

The Currency Converter Chrome Extension allows users to highlight a currency and price on a webpage and it is converted into the desired target currency in a popup. The dropdown menu for this Chrome Extension allows users select the target currency. This Chrome extension uses [React](https://react.dev/) with TypeScript and Webpack, [storage](https://developer.chrome.com/docs/extensions/reference/api/storage), [contextMenus](https://developer.chrome.com/docs/extensions/reference/api/contextMenus), and the [CurrencyLayer API](https://currencylayer.com). Currency rates are obtained and cached during the first conversion and stored for the next 8 hours. Visit our [landing page](https://hrizwan3.github.io/QuickConvert/) or watch the [demo](https://drive.google.com/file/d/1ZhXaQSzRG0JjTSt0j-G4vpGZ0CsFKzze/view?usp=sharing) for more information!

## Installation

### Install From Release

- Download the latest release from the [Releases](https://github.com/grantwells10/currency-converter/releases)
- Unzip the downloaded ZIP file
- Open Chrome and navigate to `chrome://extensions`
- Enable "Developer mode"
- Drag and drop the unzipped folder into the extensions page

### Install From Source

1. Clone the repository:

   ```bash
   git clone https://github.com/grantwells10/currency-converter
   ```

2. Install dependencies:

   ```bash
   cd currency-converter
   npm install
   ```

3. Build the extension:

   ```bash
   npm run build
   ```

4. Load the extension in Chrome:

   - Open Chrome and navigate to `chrome://extensions`
   - Enable "Developer mode"
   - Click "Load unpacked" and select the `dist` directory from the project

## Chrome Extension Architecture

This project follows the Manifest V3 architecture for Chrome extensions. Key components of the architecture include:

- `manifest.json`: Defines the extension's metadata, permissions, and script configurations
- `background.js`: Runs in the background and handles events and long-running tasks
- `content.js`: Runs all helper functions to retrieve API data and converts currency values. 
- 'App.tsx: Shows what to display in the popup menu to allow users to select the target currency.


## Credits

The initial setup of this project was based on the tutorial by [Harshita Joshi](https://github.com/Harshita-mindfire) on creating a Chrome extension with React and TypeScript. The corresponding Medium article can be found [here](https://medium.com/@tharshita13/creating-a-chrome-extension-with-react-a-step-by-step-guide-47fe9bab24a1). Additionally, this repo is based on Jérémie Lumbroso's [Text Collector](https://github.com/jlumbroso/chrome-extension-text-collector) chrome extension. 
