const {z, email} = require("zod");

const registratiobValidator = z.object({
    name : z.string().trim().min(2, "Name must be atleast two characters"),
    email : z.string().trim().min(6, "Email must be atleast 6 characters").regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Email is invalid"),
    phone: z.string().trim().length(11, "Phone number must be 11 digits!").regex(/^(\+234|0)(70|80|81|90|91)\d{8}$/, "phone number is invalid"),
    password: z.string().min(6,"Password must be atleast 6 characters").regex( /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/, "password must include a special character, a number, uppercase and lowercase letters"),
    role : z.string().trim()


});

module.exports = registratiobValidator;