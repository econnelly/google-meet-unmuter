# Google Meet Unmuter

This Chrome extension was created to minimize the awkward pause between the time someone in a meeting asks me a question and the time it takes for me to find the Google Meet window and unmute my microphone. It will find the window, activate the tab, and unmute your microphone. The suggested way to use this extension is to assign it a keyboard shortcut.

## Installation

1) Clone the repository
2) Install npm modules
3) Build the project
4) Install the unpacked chrome extension

```bash
git clone https://github.com/econnelly/google-meet-unmuter.git
```
```bash
cd google-meet-unmuter
```
```bash
npm install
```

```bash
npm run build
```

[Follow these instructions](https://developer.chrome.com/docs/extensions/mv3/getstarted/#unpacked) to install the extension

## Usage

The extension adds a button to your Chrome window. Pressing that button will unmute your Google Meet meeting and bring the window into focus.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)