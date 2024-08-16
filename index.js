import express from "express";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());

const SECRET_KEY = "mursaleen";

app.post('/register', (req, res) => {
    const { username, password } = req.body;
    if (username === "mursaleen" && password === "abc123@") {

        const payload = {
            userid: 123,
            username: 'Ahmad123',
            manager: true,
        };

        const token = jwt.sign(payload, SECRET_KEY);
        res.json({ token });
    } else {
        res.status(401).json({ message: "invalid user" });
    }
});

// const authenticateToken = (req, res, next) => {
//     const header = req.get("authorization");
//     const token = header && header.split(' ')[1];

//     if (token == null) return res.status(401).json({ message: "Token not provided" });

//     jwt.verify(token, SECRET_KEY, (err, user) => {
//         if (err) return res.status(403).json({ message: "Token is not valid" });
//         req.user = user;
//         next();
//     });
// };

// app.get('/admin', authenticateToken, (req, res) => {
//     res.json({ message: "this is a user", user: req.user });
// });

app.listen(4000, () => console.log("Server is running on port 4000"));
