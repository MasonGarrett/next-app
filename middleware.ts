export { default } from 'next-auth/middleware';

// only redirect if we hit these endpoints
export const config = {
    // *: zero or more parameters
    // +: one ore more paramaters
    // ?: zero or one paramaters
    matcher: ['/users/:id*'],
};
