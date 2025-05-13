# 99tech_demo

## Framework Structure

This project is built using Playwright for end-to-end testing with a Page Object Model (POM) architecture. Here's the structure:

```
src/
├── data/            # Environment configurations and test data
├── fixtures/        # Test fixtures and custom test extensions
├── pages/           # Page Object Models
│   ├── base-page.ts # Base page with common methods
│   ├── login.ts     # Login page interactions
│   └── ...          # Other page objects
└── tests/           # Test specifications
```

### Key Components

- **Page Objects**: Encapsulate page-specific selectors and actions
- **Environment Config**: Supports multiple environments (stg, pre, prd)
- **Fixtures**: Custom test extensions and shared test context

## Execution Steps

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Run Tests**

   - Run all tests:
     ```bash
     npm run test
     ```
   - Run specific browser:
     ```bash
     npm run chromium   # chromium
     npm run firefox    # Firefox
     npm run webkit     # Safari
     ```
   - Debug specific test:
     ```bash
     npm run debug      # Runs tests with tag (e.g. @search)
     ```

3. **Environment Selection**

   - Set environment via ENVIRONMENT variable:
     ```bash
     ENVIRONMENT=stg npm run test
     ```
   - Or create the .env to run locally

4. **View Reports**
   - HTML reports are generated in `playwright-report/`
   - Open `playwright-report/index.html` in browser
   - Or run command:
     ```bash
     npx playwright show-report
     ```

## Configuration

- Environment-specific configurations are in `src/data/{env}.json`
- Playwright configuration in `playwright.config.ts`
- Test data and selectors are maintained in respective page objects

## Running Tests via GitHub Actions

You can run tests manually through GitHub Actions workflow:

1. Go to the "Actions" tab in your GitHub repository
2. Select "Manual Playwright Tests" workflow
3. Click "Run workflow"
4. Enter the script name you want to run:
   - `test` - Run all tests
   - `chromium` - Run tests in Chromium
   - `firefox` - Run tests in Firefox
   - `webkit` - Run tests in WebKit
   - `smoke` - Run tests with specific tag @smoke
5. Click "Run workflow"

The workflow will:

- Set up Node.js environment
- Install dependencies
- Install Playwright browsers
- Run the specified test script
- Upload test reports as artifacts (retained for 30 days)

You can view the test results and download reports from the workflow run page.
