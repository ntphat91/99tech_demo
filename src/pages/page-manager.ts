import { Page } from '@playwright/test';
import { Login } from '@pages/login';
import { DashBoard } from '@pages/dashboard';
import { SideMenu } from '@pages/side-menu';
import { EmployeeList } from '@pages/employee-list';

export class PageManager {
  login: Login;
  dashBoard: DashBoard;
  sideMenu: SideMenu;
  employeeList: EmployeeList;

  constructor(page: Page) {
    this.login = new Login(page);
    this.dashBoard = new DashBoard(page);
    this.sideMenu = new SideMenu(page);
    this.employeeList = new EmployeeList(page);
  }
}
