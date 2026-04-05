import { minLength, required } from "../validation.js";

export const addingCommentSchema = {
    name: { 
        validators: [required, minLength(3)],
        displayName: "Name"
    },
    comment: {
        validators: [required, minLength(4)],
        displayName: "Comment"
    }
    
}