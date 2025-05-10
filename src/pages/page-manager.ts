import { Page } from '@playwright/test';
import { Login } from '@pages/login';
import { DashBoard } from '@pages/dashboard';

export class PageManager {
  login: Login;
  dashBoard: DashBoard;

  constructor(page: Page) {
    this.login = new Login(page);
    this.dashBoard = new DashBoard(page);
  }
}
