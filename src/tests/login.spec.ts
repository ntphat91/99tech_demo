import test from '@fixtures/base-fixture';

test.describe('Login suite', () => {
  test('User can login successfully @smoke @login', async ({ pageManager }) => {
    const { login, dashBoard } = pageManager;
    await login.navigate(envConfig.LOGIN_URL);
    await login.login(envConfig.USERNAME, process.env.PASSWORD);
    await dashBoard.verifySideMenuDislays();
  });
});
