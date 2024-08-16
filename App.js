// import jwt from "jsonwebtoken";

// const secretkey="Mursaleen";


// const paylode={
// userid:123,
// username:"Ahmad",
// admin:true,
// }

// // const options={
// //     expiresIn:"1hr",
// //     algorithm:"HS256",
// // }

// const tokan=jwt.sign(paylode,secretkey);

// console.log(tokan);



// import express from "express";
// import jwt from "jsonwebtoken";

// const app = express();
// app.use(express.json()); 

// const SECRET_KEY = 'secretkey'; 

// const authenticateToken = (req, res, next) => {
//     const authHeader = req.headers['authorization'];
//     const token = authHeader && authHeader.split(' ')[1];

//     if (token == null) return res.sendStatus(401); 

//     jwt.verify(token, SECRET_KEY, (err, user) => {
//         if (err) return res.sendStatus(403); 
//         req.user = user;
//         next();
//     });
// };

// app.post('/user', (req, res) => {
//     const { username, password } = req.body;

//     if (username === 'username' && password === 'password') {
//           const payload = {
//             userid: 123,
//             username: 'user123',
//             admin: true,
//         };
//         const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' }); 
//         res.json({ token });
//     } else {
//         res.status(401).json({ message: 'Invalid credentials' });
//     }
// });


// app.get('/protected', authenticateToken, (req, res) => {
//     res.json({ message: 'This is a protected route', user: req.user });
// });

// app.listen(5000, () => console.log('Server is running on port 5000'));