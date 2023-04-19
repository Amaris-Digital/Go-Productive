import React, {useState} from 'react';

interface Props {
    onLogin: React.Dispatch<React.SetStateAction<null>>;
}



const LoginForm: React.FC<Props> = ({ onLogin }) => {

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [errors, setErrors] = useState<Error[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);






  return (
    <form onSubmit={handleSubmit}>
      <FormField>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormField>

      <Button variant="fill" color="primary" type="submit">
        {isLoading ? "Loading..." : "Login"}
      </Button>

      <FormField>
        {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
      </FormField>
    </form>
  );


}

export default LoginForm
