

const {conn,auth} = require("../../connect/firebase");
const friebase = require("firebase-admin") ;

 module.exports.verifyToken=async (req,res,next)=>{

    const idToken = req.cookies.access_token;
    if (!idToken) {
        return res.status(403).json({ error: 'No token provided' });
    }

    try {
      const decodedToken = await admin.auth().verifyIdToken(idToken); 
        req.user = decodedToken;
        next();
    } catch (error) {
        console.error('Error verifying token:', error);
        return res.status(403).json({ error: 'Unauthorized' });
    }
};
module.exports.verifyToken1=async (req,res,next)=>{
  const appCheckToken = req.header("X-Firebase-AppCheck");

  if (!appCheckToken) {
      res.status(401);
      return next("Unauthorized");
  }

  try {
      const appCheckClaims = await getAppCheck().verifyToken(appCheckToken);

      // If verifyToken() succeeds, continue with the next middleware
      // function in the stack.
      return next();
  } catch (err) {
      res.status(401);
      return next("Unauthorized");
  }
}


 module.exports.registerUser=async (req,res,next)=>{

    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(422).json({
        email: "Email is required",
        password: "Password is required",
      });
    }
  
    auth.createUser(email, password)
      .then((userCredential) => {
        sendEmailVerification(auth.currentUser)
          .then(() => {
            res.status(201).json({ message: "Verification email sent! User created successfully!" });
          })
          .catch((error) => {
            console.error(error);
            res.status(500).json({ error: "Error sending email verification" });
          });
      })
      .catch((error) => {
        const errorMessage = error.message || "An error occurred while registering user";
        res.status(500).json({ error: errorMessage });
      });
  }
   

module.exports.loginUser=async (req,res,next)=>{

    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(422).json({
            email: "Email is required",
            password: "Password is required",
        });
    }
    
    auth.signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => { 
          const idToken = userCredential._tokenResponse.idToken
            if (idToken) {
                res.cookie('access_token', idToken, {
                    httpOnly: true
                });
                res.status(200).json({ message: "User logged in successfully", userCredential });
            } else {
                res.status(500).json({ error: "Internal Server Error" });
            }
        })
        .catch((error) => {
            console.error(error);
            const errorMessage = error.message || "An error occurred while logging in";
            res.status(500).json({ error: errorMessage });
        });
  }
  module.exports.logoutUser=async (req,res,next)=>{

  signOut(auth)
    .then(() => {
      res.clearCookie('access_token');
      res.status(200).json({ message: "User logged out successfully" });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    });
}
module.exports.resetPassword=async (req,res,next)=>{

  const { email } = req.body;
  if (!email ) {
    return res.status(422).json({
      email: "Email is required"
    });
  }
  sendPasswordResetEmail(auth, email)
    .then(() => {
      res.status(200).json({ message: "Password reset email sent successfully!" });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    });
}
