import test from '../fixtures/base-fixture';

test('has title', async ({ pageManager }) => {
  const { login, dashBoard } = pageManager;
  await login.navigate('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await login.login('Admin', 'admin123');
  await dashBoard.waitForSideMenu();
});
