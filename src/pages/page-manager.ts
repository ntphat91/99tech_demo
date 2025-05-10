import { Page } from '@playwright/test';
import { Login } from './login';
import { DashBoard } from './dashboard';

export class PageManager {
  login: Login;
  dashBoard: DashBoard;

  constructor(page: Page) {
    this.login = new Login(page);
    this.dashBoard = new DashBoard(page);
  }
}
