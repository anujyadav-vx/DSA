//The Event Loop is a mechanism that allows JavaScript to handle asynchronous operations (like setTimeout, promises, API calls) without blocking the main thread, even though JS is single-threaded.


// Call Stack = One chef
// Web APIs = Kitchen helpers
// Queues = Waiting orders
// Event Loop = Restaurant manager


// 1. Chef cooks current order
// 2. Some tasks given to helpers
//    (timer, online order, etc.)

// 3. Finished tasks wait in queue

// 4. Manager checks:
//    "Chef free?"

// 5. If chef free:
//    manager sends next task to chef





// 1. Run synchronous code (Call Stack)

// 2. Async APIs move to Web APIs
//    - setTimeout
//    - fetch
//    - events

// 3. Promise callbacks go to Microtask Queue

// 4. Timer/Event callbacks go to Callback Queue (Macrotask Queue)

// 5. Event Loop checks:
//    Is Call Stack empty?

// 6. If YES:
//    First execute ALL Microtasks

// 7. Then execute ONE Macrotask

// 8. Repeat forever




console.log("Hello Coders!")
setTimeout(() => {
    console.log("The End")
})
Promise.resolve().then(() => {
    console.log("Code Completed")
})
Promise.reject().catch(() => {
    console.log("error")
})
console.log("Let's Code")
setTimeout(() => {
    console.log("Try again! untill Completed")
})