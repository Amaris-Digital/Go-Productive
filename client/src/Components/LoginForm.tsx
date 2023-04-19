import React, {useState} from 'react';

interface Props {
    onLogin: React.Dispatch<React.SetStateAction<null>>;
}



const LoginForm: React.FC<Props> = ({ onLogin }) => {

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [errors, setErrors] = useState<Error[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);


    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
    
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }).then((r) => {
          setIsLoading(false);
          if (r.ok) {
            r.json().then((user) => onLogin(user));
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
      }



  return (
    <div>
      
    </div>
  )
}

export default LoginForm
