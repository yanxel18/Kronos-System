[![Total alerts](https://img.shields.io/lgtm/alerts/g/yanxel18/Kronos-System.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/yanxel18/Kronos-System/alerts/)
![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/yanxel18/Kronos-System.svg?logo=lgtm&logoWidth=18)]
# Kronos-System
# Background
The company uses manual white bulletin board to go in and out of the company.
They attached magnet labels beside their name and those labels are the location they want to go. 
For Example:

| Bryan | 退 | ミーティングルームA　| <Meeting Room A>

# System Basic function
This system is for displaying "In,Out and Leave" and the location status of an employee.
They can select the location they want to go base on the selection available

The System has a C# WPF Desktop application on which is installed to a Microsoft Surface Pro Tablet
and connected to a huge screen using HDMI cable. The C# system is connected to an RFID card reader
to which the employees use to tap in and out of the room.

The React Web monitoring is displayed also to the monitor by using the C# WPF CefSharp (Chromium) browser
that integrates and shows the React Web system.

The React SPA is also use for realtime monitoring and changing of employee status. Using Async on AXIOS 
that triggers REST-API created on Node Express to get new values from MariaDB.
