import axios from 'axios';


const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match");
      return;
    }
    axios.post('http://2803-185-93-84-251.ngrok.io/users', {
        username: "string5",
        password_hash: "string5"
    })
    .then(function (response) {
        setUser(u);
        setIsLoading(false);
    })
    .catch(function (error) {
        setIsLoading(false);
        setError(e.toString());
    });

};
