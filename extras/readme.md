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


![alt text](https://raw.githubusercontent.com/carlos-teles/projetosMobile2022/main/extras/01-101projeto.jpeg "Home")
![alt text](https://raw.githubusercontent.com/carlos-teles/projetosMobile2022/main/extras/02-101projeto.jpeg "Details Screen")


###############################################################

	expo init 102-projeto
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

	- cd 102-projeto
	- yarn start # you can open iOS, Android, or web from here, or run them directly with the commands below.
	- yarn android
	- yarn ios # requires an iOS device or macOS for access to an iOS simulator
	- yarn web
	Project is already inside of a git repo, skipping git init.

	cd 102-projeto/
    
	expo install expo-location expo-device
	┌─────────────────────────────────────────────────────────────────────────┐
	│                                                                         │
	│   There is a new version of expo-cli available (6.0.5).                 │
	│   You are currently using expo-cli 6.0.1                                │
	│   Install expo-cli globally using the package manager of your choice;   │
	│   for example: `npm install -g expo-cli` to get the latest version      │
	│                                                                         │
	└─────────────────────────────────────────────────────────────────────────┘
	Installing 2 SDK 46.0.0 compatible native modules using Yarn.
	> yarn add expo-location@~14.3.0 expo-device@~4.3.0
	yarn add v1.22.11
	warning ../../../../../package.json: No license field
	[1/4] Resolving packages...
	[2/4] Fetching packages...
	info fsevents@2.3.2: The platform "linux" is incompatible with this module.
	info "fsevents@2.3.2" is an optional dependency and failed compatibility check. Excluding it from installation.
	[3/4] Linking dependencies...
	[4/4] Building fresh packages...
	success Saved lockfile.
	success Saved 2 new dependencies.
	info Direct dependencies
	├─ expo-device@4.3.0
	└─ expo-location@14.3.0
	info All dependencies
	├─ expo-device@4.3.0
	└─ expo-location@14.3.0
	Done in 4.60s.




![alt text](https://raw.githubusercontent.com/carlos-teles/projetosMobile2022/main/extras/01-102projeto.jpg "Waiting Screen")
![alt text](https://raw.githubusercontent.com/carlos-teles/projetosMobile2022/main/extras/02-102projeto.jpg "Permission Screen")
![alt text](https://raw.githubusercontent.com/carlos-teles/projetosMobile2022/main/extras/03-102projeto.jpg "GPS Screen")

