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

