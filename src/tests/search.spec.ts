import test from '@fixtures/base-fixture';

test.describe('Search Employee suite', () => {
  test('User can search employee successfully @smoke @search', async ({ pageManager }) => {
    const { login, dashBoard, employeeList } = pageManager;

    let employeeName = 'admin';
    await login.navigate(envConfig.LOGIN_URL);
    await login.login(envConfig.USERNAME, process.env.PASSWORD);

    await dashBoard.gotoPIMPage();
    await employeeList.searchByName(employeeName);
    await employeeList.verifyResultDisplaysCorrectly(employeeName);
  });
});
