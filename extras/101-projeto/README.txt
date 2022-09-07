1 - You need react-native and expo-cli installed

Create project:

expo init 101-projeto
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│   There is a new version of expo-cli available (6.0.5).                 │
│   You are currently using expo-cli 6.0.1                                │
│   Install expo-cli globally using the package manager of your choice;   │
│   for example: `npm install -g expo-cli` to get the latest version      │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
✔ Choose a template: › blank               a minimal app as clean as an empty canvas
✔ Downloaded template.
🧶 Using Yarn to install packages. Pass --npm to use npm instead.
✔ Installed JavaScript dependencies.

✅ Your project is ready!

To run your project, navigate to the directory and run one of the following yarn commands.

- cd 101-projeto
- yarn start # you can open iOS, Android, or web from here, or run them directly with the commands below.
- yarn android
- yarn ios # requires an iOS device or macOS for access to an iOS simulator
- yarn web
Project is already inside of a git repo, skipping git init.

cd 101-projeto/

npm install @react-navigation/native-stack

expo start
