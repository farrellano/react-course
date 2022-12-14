import { useForm, Controller } from "react-hook-form";
import useUser from "../../hook/useUser";
import { useLocation } from "wouter";
import { useEffect } from "react";
import { Form, ButtonToolbar, Button, Panel, FlexboxGrid } from "rsuite";

export default function Login() {
  const { login, isLogged, isLoginHasError, isLoginLoading } = useUser();
  const [, navigate] = useLocation();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  useEffect(() => {
    if (isLogged) navigate("/");
  }, [isLogged, navigate]);

  const onSubmit = (data) => {
    const { username, password } = data;
    console.log(data);
    login({ username, password });
  };

  return (
    <>
      <FlexboxGrid justify="center">
        <FlexboxGrid.Item colspan={12}>
          <Panel header={<h3>Login</h3>} bordered>
            <Form onSubmit={handleSubmit(onSubmit)} fluid>
              <Form.Group>
                <Form.ControlLabel>Username or email address</Form.ControlLabel>
                <Controller
                  name="username"
                  control={control}
                  render={({ field }) => (
                    <Form.Control {...field} name="username" />
                  )}
                />
              </Form.Group>
              <Form.Group>
                <Form.ControlLabel>Password</Form.ControlLabel>
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <Form.Control
                      {...field}
                      name="password"
                      type="password"
                      autoComplete="off"
                    />
                  )}
                />
              </Form.Group>
              <Form.Group>
                <ButtonToolbar>
                  <Button appearance="primary" type="submit">
                    Sign in
                  </Button>
                  <Button appearance="link">Forgot password?</Button>
                </ButtonToolbar>
              </Form.Group>
            </Form>
          </Panel>
          {isLoginHasError ? <>Credentials error</> : <></>}
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </>
  );
}
