console.log("hello world");
// Part-1----- Basic Node JS------------
//-------Event loop Explained--------
setImmediate(()=>console.log("setImmediate"));
setTimeout(()=>console.log("Timer expired"),0);
Promise.resolve(()=>console.log("Promise"));

fs.readFile(newLocalutf8",()=>{
    setTimeout(()=>console.log("2nd timer"),0);
process.nextTick(()=>console.log("2nd setImmediate"));
console.log("file reading c8");
}); 
    process.nextTick(()=>console.log("nextTick"));
    console.log("last line of the file");/*
// What is Event Loop in Node.js?
/* The Event Loop in Node.js is a key concept that allows Node.js to handle multiple operations (like reading files, making network requests, etc.) without blocking the execution of other code. This makes Node.js very efficient, especially for I/O operations.
TICK- In nodejs Tick mean that one Full cycle of the Event Loop is Knows as Tick.
To Find the Event Loop in the Libuv Doc- Go To=> Libuv/src/unix/core.c.
I also give the link --> https://github.com/libuv/libuv/blob/v1.x/src/unix/core.c



 */
/*
┌───────────────────────────┐
┌─>│           timers          │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │     pending callbacks     │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │       idle, prepare       │
│  └─────────────┬─────────────┘      ┌───────────────┐
│  ┌─────────────┴─────────────┐      │   incoming:   │
│  │           poll            │<─────┤  connections, │
│  └─────────────┬─────────────┘      │   data, etc.  │
│  ┌─────────────┴─────────────┐      └───────────────┘
│  │           check           │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
└──┤      close callbacks      │

Pending callbacks-Pending callbacks refer to callbacks that are waiting to be executed but can only run once certain operations (usually I/O tasks) are finished
When Pending callbacks Run-Pending callbacks run after the poll phase.
Some I/O operations 
I/O operations that were queued for completion but couldn’t finish in the previous event loop cycle are executed here.


*/

// Part-1----- Basic Node JS------------
//-------Event loop Explained--------
/*
// What is Event Loop in Node.js?
/* The Event Loop in Node.js is a key concept that allows Node.js to handle multiple operations (like reading files, making network requests, etc.) without blocking the execution of other code. This makes Node.js very efficient, especially for I/O operations.
TICK- In nodejs Tick mean that one Full cycle of the Event Loop is Knows as Tick.

 */
/*
┌───────────────────────────┐
┌─>│           timers          │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │     pending callbacks     │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │       idle, prepare       │
│  └─────────────┬─────────────┘      ┌───────────────┐
│  ┌─────────────┴─────────────┐      │   incoming:   │
│  │           poll            │<─────┤  connections, │
│  └─────────────┬─────────────┘      │   data, etc.  │
│  ┌─────────────┴─────────────┐      └───────────────┘
│  │           check           │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
└──┤      close callbacks      │

Pending callbacks-Pending callbacks refer to callbacks that are waiting to be executed but can only run once certain operations (usually I/O tasks) are finished
When Pending callbacks Run-Pending callbacks run after the poll phase.
Some I/O operations 
I/O operations that were queued for completion but couldn’t finish in the previous event loop cycle are executed here.
// Question -- I have a 1 Question is Nodejs is single-thread or multi-thread-------------

 */
//------------ Thread pool in libuv-----------------
// ---- I have a 1 Question is Nodejs is single-thread or multi-thread-------------
/*
---------When you perform a blocking task (like reading a file), libuv sends the task to a pool of worker threads.
---------By default, libuv creates a thread pool with 4 worker threads.
---------These threads work in the background, handling the blocking tasks concurrently.
---------Once a task is completed by a worker thread, the result is sent back to the event loop, which can then execute a callback function to process the result
---------We can change the size of thread pool also by the command--->process.env.UV_THREADPOOL_SIZE=100;
Now the size of thread pool become 100
*/
// epoll(linux)
// kqueue(MacOs)
// CODE 
