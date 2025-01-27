# string-calculator

# React Native Project

This is a React Native project. This README will guide you through setting up the project and running the test cases.

## Prerequisites

Before you begin, ensure that you have the following installed:

- Node.js (preferably the latest LTS version)
- React Native CLI (https://reactnative.dev/docs/environment-setup)
- Android Studio (https://developer.android.com/studio) (for Android development)
- Xcode (https://developer.apple.com/xcode/) (for iOS development)
- Yarn (https://yarnpkg.com/) (optional but recommended for package management)

## Installing Dependencies

1. Clone this repository to your local machine:

    git clone https://github.com/your-repo/your-project.git
    cd your-project

2. Install dependencies using npm or yarn:

    npm install
    # or, if you use yarn:
    yarn install

3. Link native dependencies:

    npx react-native link

## Running the Application

To run the app on an Android or iOS device or emulator, use the following commands:

### Android:

    npx react-native run-android

### iOS:

    npx react-native run-ios

Make sure that the Android emulator or iOS simulator is running, or you have a device connected.

## Running Tests

The project uses Jest for running tests. Follow these steps to run and execute the test cases.

### Unit Tests

To run the unit tests for your React Native project, use:

    npm test
    # or if using yarn
    yarn test

This will start Jest in watch mode, allowing you to see the test results in real-time as you make changes.

### Running Tests in CI (Continuous Integration)

If you want to run the tests in a CI environment or without watch mode, you can run:

    npm run test:ci
    # or using yarn
    yarn test:ci

### Running Tests for a Specific File

You can also run tests for a specific test file by running:

    npm test <test-file-path>
    # or using yarn
    yarn test <test-file-path>

### Coverage Report

To generate a code coverage report, run:

    npm run test:coverage
    # or using yarn
    yarn test:coverage

This will output a coverage report in the console and generate a coverage folder containing the detailed report.

## Troubleshooting

- If tests fail: Make sure that all dependencies are installed properly and that your environment (Android/iOS) is set up correctly.
- If Jest doesn't run properly: Ensure that you have the required versions of React Native and Jest.

For more information on configuring Jest for React Native, check out the official documentation here (https://reactnative.dev/docs/testing-overview).

## Useful Commands

- Start Metro Bundler:

    npx react-native start

- Run the Android emulator:

    npx react-native run-android

- Run the iOS simulator:

    npx react-native run-ios

## Contributing

Feel free to open an issue or submit a pull request if you'd like to contribute to the project!
