# SignalR.NET

This repository contains the sample code used in my Italian article about implementing real-time notifications using SignalR in ASP.NET Core. The article demonstrates how to configure SignalR from scratch and implement a multi-tab notification system.

## Overview

This project demonstrates:
- Basic SignalR configuration in ASP.NET Core
- Real-time notifications across multiple browser tabs
- Client-side notification handling with animations
- Automatic reconnection handling

## Article Reference

The complete article (in Italian) explaining this implementation can be found at [SignalR in ASP.NET Core](https://cosminirimescu.com/signalr-in-asp-net-core).

## Project Structure

```
SignalR.NET/
├── Pages/
│   ├── Shared/
│   │   ├── _Layout.cshtml
│   └── Index.cshtml
├── Hubs/
│   └── NotifyHub.cs
└── wwwroot/
    ├── js/
    │   └── site.js
    └── css/
        └── site.css
```

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/irimescucosmin/SignalR.NET.git
cd SignalR.NET
```

2. Run the application
```bash
dotnet run
```

3. Open multiple browser tabs to `https://localhost:5001` to test real-time notifications

## Prerequisites

- .NET 8.0 SDK
- A modern web browser

## Features

- Real-time notifications
- Multi-tab support
- Automatic reconnection
- Animated notifications
- Simple and clean implementation

## Technologies Used

- ASP.NET Core 8.0
- SignalR
- JavaScript
- CSS3 for animations

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Feel free to submit issues and enhancement requests.

## Related Resources

- [Official SignalR Documentation](https://learn.microsoft.com/en-us/aspnet/core/signalr/introduction)
- [ASP.NET Core Documentation](https://learn.microsoft.com/en-us/aspnet/core)

## Contact

- Website: [cosminirimescu.com](https://cosminirimescu.com)
- Email: hello@cosminirimescu.com
- GitHub: [@irimescucosmin](https://github.com/irimescucosmin)
- Article Link: [SignalR in ASP.NET Core](https://cosminirimescu.com/signalr-in-asp-net-core)

---
Built and maintained by [Cosmin Irimescu](https://github.com/irimescucosmin)