# Tab Tamer: A Chrome Extension for Managing Browser Tabs

## 📋 Overview  
Tab Tamer is a lightweight and intuitive Chrome extension designed to help users manage their tabs efficiently. With features like **closing duplicate tabs** and **suggesting tabs to close**, this tool enhances productivity and reduces browser clutter.

## 🚀 Features  
- **Close Duplicate Tabs:** Automatically detects and closes duplicate tabs.  
- **Suggest Tabs to Close:** Displays how many tabs are open to help users decide which to close.  
- **Performance Notifications:** Alerts the user when more than 20 tabs are open.

## 🛠️ Technologies Used  
- **HTML/CSS**: Popup interface  
- **JavaScript**: Logic for managing tabs and interacting with Chrome APIs  
- **Chrome Extensions Manifest v3**: Structure and permissions management  
- **Chrome APIs**: Tab management, notifications, storage  

## 📂 Folder Structure  
tab-tamer/ 
├── manifest.json # Extension configuration 
├── popup.html # Popup interface HTML 
├── popup.js # Popup logic and tab operations 
├── background.js # Background task for monitoring tabs 
├── icon.png # Extension icon


## 🔧 Installation Guide  
1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/tab-tamer.git
   cd tab-tamer

2. Open Chrome and go to chrome://extensions/.
3. Enable **Developer mode** in the top right corner.
4. Click on **Load unpacked** and select the tab-tamer folder.
5. The extension will now be added to your browser.

## :desktop_computer: Usage
1. Click on the Tab Tamer icon in the Chrome toolbar.
2. The popup will display the number of tabs open and options to close duplicates or suggest tabs to close.
3. Click on the respective buttons to manage your tabs.

## :bug: Known Issues
- The extension may not work as expected if Chrome is running in the background.
- Performance notifications may not display correctly on certain devices.
- The extension may not work as expected on certain websites.
- The extension may not work as expected on certain devices.

## :handshake: Contribution Guidelines
Contributions are welcome! Feel free to submit a pull request or open an issue if you find any bugs or have feature suggestions.

## :License: License