import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

    const firebaseConfig = {
        apiKey: "AIzaSyCZMCXC83bB9ISHVwN6lha8Zgjfv2ADlXA",
        authDomain: "wale-5498e.firebaseapp.com",
        databaseURL: "https://wale-5498e-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "wale-5498e",
        storageBucket: "wale-5498e.appspot.com",
        messagingSenderId: "739693224246",
        appId: "1:739693224246:web:9ba98fb4c483e4080f5397",
        measurementId: "G-Z3PPTMS9BG"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);