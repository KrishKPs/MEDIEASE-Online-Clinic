const zod = require ("zod")

// Defing a zod for Users 
const userzod = zod.object ({

    username : zod.string().min(5), 
    password : zod.string().min(8), 
    age : zod.number()
})

const doctorzod = zod.object({
    username : zod.string().min(5),
    email: zod.string().email(), 
    password : zod.string().min(8), 
    experience : zod.number()
})


module.exports = ({

    userzod : userzod, 
    doctorzod : doctorzod
})