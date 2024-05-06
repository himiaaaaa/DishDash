# Introduction

DishDash - a mobile food delivery application developed using React Native. 

![preview](./assets/images/preview.png)

## Technologies

- **React Native** & **Expo**: For mobile app development

- **NativeWind**: Styling like using tailwindcss

- **Google Places API**: Getting place information

- **React Native Google Place Autocomplete** : Autocomplete for places

- **Yelp API**: Accessing restaurant data

- **Redux**: Managing app state

- **Firebase Authentication**: User authentication

- **Firebase Cloud Firestore Database** : Storing and syncing data

- **React Navigation**: Navigating between screens

- **React Native Vector Icons**: Icons

- **Lottie React Native**: Animations

- **Dotenv**: Managing environment variables
 
- **React Native Swiper**: Swipers

- **Jest**: Test

- **React Native Test Library**: Test

## Project Structure

### UI Layer

- **Components Folder**: This folder contains reusable UI components. Each component includes its logic, styles, and test file.

- **Pages Folder**: This folder contains the main screens of the application.

### Service Layer

- **Services Folder**: This folder contains the modules responsible for handling user interactions and data operations.

#### Redux folder

- **Redux**: Manages the application's state using Redux. Includes reducers, actions, and the Redux store.

#### Constants folder

- **Constants**: Contains fixed values used throughout the application.

#### Assets folder

- **Assets**: Contains media files.

## Functionalities

- **Search Restaurant by Places**: 

Users can search for restaurants using the Google Places API.
- **Display Restaurant List**: 

Displays a list of nearby restaurants based on the user's search query.
- **Food Picture Carousel**: 

Allows users to view food pictures in a carousel format, helping them decide on their order.
- **Filter Restaurant by Category**: 

Users can filter the list of restaurants by category, making it easier to find their preferred type of food.
- **Cart Management**: 

Enables users to add and remove items from their cart and view the total cost.
- **User Authentication**: 

Provides user sign-in, sign-up, and logout functionality using Firebase Authentication.
- **Favorites Functionality**: 

Allows users to mark restaurants as favorites and view their list of favorite restaurants.
- **Take Order**: 

Users can place orders directly from the app, choosing from available menu items.
- **Check Completed Order**: 

Users can review their completed orders, including order details and status.

## Getting started

### Prerequisites

- Node.js
- Yarn or npm
- Expo Go 
- Firebase account
- API keys: For Google Places and Yelp API integration.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/himiaaaaa/DishDash.git
```

2. Navigate to the project directory:

```bash
cd DishDash
```

3. Install dependencies:

```bash
npm install
```

4. Setup environment variables:

Create a .env file in the root directory. Add related API keys.

5. Run the app:

```bash
npx expo start
```

6. Test the app

```bash
npm run test
```
