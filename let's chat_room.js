var firebaseConfig = {
      apiKey: "AIzaSyAMj3Tpz6O8D3nw1A0Qcq1z7ewdTA-4PMw",
      authDomain: "let-s-chat-fd69f.firebaseapp.com",
      projectId: "let-s-chat-fd69f",
      storageBucket: "let-s-chat-fd69f.appspot.com",
      messagingSenderId: "784016131953",
      appId: "1:784016131953:web:954b00afae649bf16f18d0"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
