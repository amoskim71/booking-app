# Lodgesy - A Booking App
**_(*Under Construction)_**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This App is a part of Android App Development Project created using [Angular](https://angular.io/) and [Ionic](https://ionicframework.com) Frameworks.  
This App allows users to book a room or offer their own place for booking, edit and view thier offers or bookings.

- [Lodgesy - A Booking App](#lodgesy---a-booking-app)
  * [The Design](#the-design)  
    + [Design Prototype](#design-prototype)  
    + [What does each page do?](#what-does-each-page-do)
  * [To run Locally](#to-run-locally)
    + [Building the App](#building-the-app)
  * [Project Setup](#project-setup)
      - [Create and open new Firebase Project](#create-and-open-new-firebase-project)
      - [Firebase Project Id _(You'll need this later)_](#firebase-project-id---you-ll-need-this-later--)
      - [Firebase API Key](#firebase-api-key)
      - [Firebase URLs](#firebase-urls)
      - [Store Image URL](#store-image-url)
      - [To get your own Google Maps API key](#to-get-your-own-google-maps-api-key)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>


## The Design

### Design Prototype 
![Website Design Wireframe](https://raw.githubusercontent.com/reuelrds/booking-app/master/assets/Website%20Design.png)

### What does each page do?

**_The Auth Page_** -  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The App starts with a Login Page. This page let's user register or Login. A user must register to use the app.


**_The Places Page_** -   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Places Page is the first page to be displayed after a user logs in. It has Two child pages, the **_Discover Page_** and the **_Offers Page_** which are displayed in tabs.


**_The Discover Page_** -  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Discover Page let's users view the list of places which are available for booking. Tapping on an item lead's the user to the **_Place Detail Page_**.


**_The Place Detail Page_** -  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This page offers a user a short description, photos and price about the place that they tapped on the **_Discover Page_**. If the user wants to rent the place, he can click on the Book Button which brings up the booking modal (The modal is created by _create booking_ component in bookings folder).


**_The Offers Page_** -  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Offers Page allows user to rent out his own places/ rooms to other people. A user can list out his place using the add (plus) icon located on the top right corner which brings up the **_New Offer Page_**. The Offers place also displays a list of current offerings by the user. Tapping on an offer leads to the **_Offer Bookings Page_**.


**_The New Offer Page_** -  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This page allows an user to list out a new place available for bookings by other users.


**_The Edit Offer Page_** -  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This page allows an user to edit the current offering.


**_The Bookings Page_** -  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This page allows a user to view the list of the places that he has booked. This page can be reached by opening the side menu and tapping on _Your Bookings_ option.  


## To run Locally


Clone this Repository
```bash
> git clone https://github.com/reuelrds/booking-app
> cd booking-app
```

Install npm dependencies
```bash
> npm install
```

**Note -** Before you proceed forward read [Project Setup](#project-setup)  
&nbsp;

Start the Ionic application in a new Terminal from project root directory
```bash
> npm run start
```

Open the Developer Tools and Click on Toggle Device Toolbar. Select a device from the list of devices.  

**Note -** When Switching between IOS and Android Devices, after selecting a device make sure to refresh the browser. _(This will let ionic render the app with the native styling)_ 

### Building the App

```bash
> npm run build:android
```
This copies the files from the www folder _(This folder is generated by the above command or by running `npm run build`)_ to the **_android/app/src/main/assets/public_** folder.

The **_android_** folder is an Android project and can be opened in the Android Studio to debug or generate an apk file or add some additional native functionality.


**Note -** If you are facing any problems running the above npm scripts, install angular cli and ionic cli globally using `npm install -g @angular/cli` and `npm install -g ionic` respectively and run `ionic serve` to launch the app in a browser. To Build the app use `ng build --prod && ionic capacitor copy android` to create an Android Studio project which can be used to preivew the app on an emulator or a physical device and also generate the apk.  

## Project Setup

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This app uses Firebase and Google Maps. So, you'll need your own API keys and proper Firebase URLs to get the app to work properly. Once you have your API Keys and the Firebase URLs paste it in the `env.ts` file which will be located in `src/environments`.  
**Note -** An example [env.example.ts](https://github.com/reuelrds/booking-app/blob/master/src/environments/env.example.ts) file is provided.


+ #### Create and open new Firebase Project

+ #### Firebase Project Id _(You'll need this later)_
  1. In your Firebase project, Go to Project Settings
  2. Under General Tab you'll find your Project Id listed as `Project ID`

+ #### Firebase API Key
  1. In your Firebase project, Go to Project Settings
  2. Under General Tab you'll find your API Key listed as `Web API Key`

+ #### Firebase URLs
  1. Go to Databse create a new Realtime Database
  2. Once you have done you'll see your Database URL in the table header.
  3. Copy and paste it in `env.ts` file
  
+ #### Store Image URL
  1. Go to `functions/index.js` and update the projectId on line 17 with yours.
  2. Deploy the storeImage function in index.js file to firebase with the help of firebase-tools.
  <!-- 3. Firebase-tools setup -->
  ```
  Firebase-tools setup
  
  # Install firebase tools
  > npm i -g firebase-tools

  # Login into your firebase account
  > firebase login

  # Go to functions dir
  > cd functions

  # Install dependencies
  > npm install

  # Deploy functions
  > firebase -P YOUR_PROJECT_ID deploy
  ```
  3. In your Firebase project, go to Functions
  4. You'll find your storeImageURL under the _trigger_ column. 

+ #### To get your own Google Maps API key
  1. Head over to [Google Maps Platform](https://cloud.google.com/maps-platform/) to get your own API key. 
  2. Click on Get Started.
  3. Select 'Maps' and 'Places' products.
  4. Follow the instructions on screen.

**Note -** You'll need to link your firebase project and google maps with a billing account to get the app working properly. 
