import { auth } from "@clerk/nextjs/server"

const adminIds= [
    "user_2mCXRz0aUaGHjjXOQqK0zeqfPUr"
]

export const isAdmin = () => {
    const { userId } =  auth (); 

    if(!userId) {
        return false;
    }

    return adminIds.indexOf(userId) !== -1;
}
