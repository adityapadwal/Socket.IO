
# Websockets and Socket.io

Learning Websockets in Node.js and Real-Time messaging using Socket.io

## Tech Stack

**Client:** Static HTML pages

**Server:** Node, Express, Socket.io

## Web Sockets
1. WebSockets:

 - Protocol: WebSockets is a communication protocol that provides full-duplex communication channels over a single TCP connection.
 - Standard: It is a standardized technology (RFC 6455) supported by all modern web browsers.
 - Functionality: WebSockets provide a low-level, event-driven communication channel. They are simple and efficient but require more work to implement higher-level features such as reconnection, fallback options, and broadcasting.

2. Socket.IO:

 - Library: Socket.IO is a JavaScript library that provides an abstraction over WebSockets and other communication protocols (such as HTTP long polling) for fallback purposes.
 - Features: It offers higher-level functionality such as automatic reconnection, multiplexing, rooms, namespaces, and fallback to HTTP long polling if WebSockets are not available.
 - Ease of Use: Socket.IO simplifies the process of implementing real-time applications by providing a higher-level API and additional features that WebSockets do not natively support.