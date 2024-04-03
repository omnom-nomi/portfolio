# Portfolio Website with Chat Application

## Development Approach

I built this portfolio website using HTML, CSS, and JavaScript. The goal was to make an engaging and user-friendly website. The website has three main pages: Home, About, and Contact (with the LiveChat application).

For the chat application, I set up a client-server system using Socket.IO. Socket.IO allows real-time, two-way communication between the client (web browser) and the server.

My development process went through several steps:

1. Set up the basic website structure with the homepage, about page, and contact page.
2. Added navigation and UI elements like a sticky navbar and banners.
3. Added portfolio sections with cards, lists, and sliders to showcase my projects and skills.
4. Created a basic webchat design and added fake messages as examples.
5. Improved the webchat design, like showing user messages on the right and others on the left.
6. Wrote client-side and server-side code for the webchat, including event listeners and Socket.IO.
7. Added features like showing when users join/leave, and autoscroll.
8. Added buttons and functions to navigate between the contact page and webchat.
9. Made design tweaks to the webchat, like adjusting sizes and styling.

## Client-Server Communication

I used Socket.IO for the client-server communication in the chat application. Socket.IO sets up a persistent connection between the client and server. Here's how it works:

### Client-Side

1. The client (web browser) connects to the server using Socket.IO.
2. When a user joins the chat, the client sends a 'join' event to the server with the user's name.
3. The client listens for events from the server like 'user joined', 'user left', and 'new message', and updates the chat interface.
4. When a user sends a message, the client sends a 'send message' event to the server with the message content.

### Server-Side

1. The server listens for incoming connections from clients and sets up a Socket.IO connection for each client.
2. When a 'join' event comes from a client, the server broadcasts a 'user joined' event to all connected clients, letting them know about the new user.
3. The server listens for 'send message' events from clients and broadcasts the message to all connected clients using a 'new message' event.
4. When a client disconnects, the server broadcasts a 'user left' event to all remaining connected clients.

## Challenges

1. **Real-time Communication**: Making real-time communication between multiple clients and the server was a challenge. Socket.IO helped me handle two-way communication effectively.

2. **User Management**: Keeping track of active users in the chat and showing their status (joined, left, typing) required careful handling of user connections and events. I was able to implement the join/leave notifications, but not the typing status or displaying active users on the side.

3. **Responsive Design**: Making sure the website and chat application looked good on different devices and screen sizes required a lot of CSS and media query work.

4. **Integration**: Integrating the chat application into the portfolio website smoothly while keeping a consistent user experience was important.

## Technical Details

- **Front-end**: HTML5, CSS3, JavaScript
- **Back-end**: Node.js
- **Real-time Communication**: Socket.IO

Overall, building this portfolio website with a chat application involved using both front-end and back-end technologies. The focus was on creating an engaging user experience through real-time communication and responsive design.

## References

- https://getbootstrap.com/docs/5.3/components/carousel/#how-it-works
- https://getbootstrap.com/docs/5.3/components/navbar/
- https://getbootstrap.com/docs/5.3/components/offcanvas/
- https://getbootstrap.com/docs/5.3/components/buttons/#base-class
