# **BTX - Ban Thread in X**

A simple yet powerful Chrome extension that allows users to collapse or hide tweets containing specific keywords or symbols (e.g., 🧵) on Twitter's homepage.

---

## **Features**

- Automatically hide or collapse tweets containing user-defined keywords or symbols.
- Provides an easy-to-use settings page for managing keywords.
- Default keyword: `🧵`, which can be customized or removed.
- Toggle functionality to show/hide the content of matching tweets.
- Only runs on the Twitter homepage (`https://x.com/home`).
- Lightweight and efficient with minimal resource usage.

---

## **Installation**

### **For Development or Manual Use**
1. Clone or download this repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer Mode**.
4. Click **Load unpacked** and select the folder containing the extension files.

### **From Chrome Web Store**
> Pending review and approval. Once available, download it directly from the Chrome Web Store.

---

## **Usage**

1. Install the extension.
2. Navigate to Twitter's homepage (`https://x.com/home`).
3. The extension will automatically detect tweets containing keywords and hide or collapse them.
4. To configure keywords:
   - Click the extension icon in the toolbar.
   - Select **Options**.
   - Add, remove, or modify the keywords.
5. Matching tweets will be processed in real-time based on your settings.

---

## **Settings**

### **Options Available**
- **Toggle Hiding:** Decide whether to completely hide or just collapse tweets containing keywords.
- **Manage Keywords:**
  - Add new keywords by typing them in the input box and clicking "Add Keyword."
  - Delete keywords from the list with a single click.

---

## **Known Limitations**

- The extension currently only works on the Twitter homepage (`https://x.com/home`).
- The detection for `🧵` is based on the `<img>` tag's `alt` attribute. Future Twitter updates may require adjustments.

---

## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## **Contact**

For issues, questions, or suggestions, please open an issue in the repository or contact the developer at [微信公众号： 软件大道X号].
