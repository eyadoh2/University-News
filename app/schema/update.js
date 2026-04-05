import { minLength, required } from "../validation.js";

export const updatingNewsSchema = {
    first_idName: { 
        validators: [required, minLength(3)],
        displayName: "Title"
    },
    first_title: { 
        validators: [required, minLength(5)],
        displayName: "Title"
    },
    first_date: { 
        validators: [required] ,
        displayName: "Title"
    },
    first_paragraph: { 
        validators: [required, minLength(100)],
        displayName: "Title"
    },

    second_title: { 
        validators: [required, minLength(5)],
        displayName: "Title"
    },
    second_header: { 
        validators: [required, minLength(5)],
        displayName: "Title"
    },
    second_paragraph: { 
        validators: [required, minLength(120)],
        displayName: "Title"
    },
    second_header_2: { 
        validators: [required, minLength(5)],
        displayName: "Title"
    },
    second_paragraph_2: { 
        validators: [required, minLength(100)],
        displayName: "Title"
    },
    second_header_3: { 
        validators: [required, minLength(5)],
        displayName: "Title"
    },
    second_paragraph_3: { 
        validators: [required, minLength(100)],
        displayName: "Title"
    },
    second_header_4: { 
        validators: [required, minLength(5)],
        displayName: "Title"
    },
     second_paragraph_4: { 
        validators: [required, minLength(70)],
        displayName: "Title"
    },
    second_paragraph_5: { 
        validators: [required, minLength(50)],
        displayName: "Title"
    }
}