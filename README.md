# Playwright Automation Framework

This project is an automation framework built using Playwright.

## Project Structure
playwright_Framework1/
├── package.json
├── playwright.config.ts
├── tests/
│   ├── test-scenarios.spec.ts
├── utils/
│   ├── helpers.ts
├── tsconfig.json
├── readme.md


To get started with this project, follow the steps below:

1. Download the project:

2.Load the visualstudiocode(VSCode)

3.Open the folder'Playwright_Framework1' in VSCode

4.Open the VScode terminal(sample command in terminal shown below)

(base) PS Folderpath\Playwright_Framework1>

5.Install Playwright for the project by running below command in terminal window
```
    npx playwright install
    ```

6. Install the dependencies:
    ```
    npm init -y
    npm install playwright typescript @playwright/test
    ```
    Hit enter

## Project Dependencies

The project relies on the following main dependencies:

- Playwright test: End-to-end testing framework
- Typescript:

Refer to `package.json` for a complete list of dependencies.

## Running the Tests

You can run the tests using  below command:

 
```
npx playwright test
  
```

##  Viewing the Results

After running the tests, you can view the results in the terminal. The results will show the number of passing and failing tests.
The successful run screenshots are also shown in Playwright_framework1/TestResult.PNG

## Folder Structure Details
Playwright_framework1/playwright-report-test report files
Playwright_framework1/tests: Contains the actual test file.
Playwright_framework1/test-results: Contains the  test result PNG file.
Playwright_framework1/utils: Contains the  helper file.
Playwright_framework1/Package: Contains the dependancy details.
Playwright_framework1/Playwright config: Contains the browser details the test run on.
Playwright_framework1/tsconfig: inclues the test file path and format.
