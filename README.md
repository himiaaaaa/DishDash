## Introduction

DishDash - a mobile food delivery application developed using React Native. 

![preview](./assets/images/preview.png)

## Technologies

- **React Native** and **Expo**

- **NativeWind**: Tailwind CSS for React Native to manage and style the user interface.
- **Google Places API**: For integrating location and place search functionality, including restaurant searches.
- **Yelp API**: To fetch data on restaurants and integrate it into the app.
- **Redux**: For state management across the app.
- **Firebase Authentication**: For user authentication (sign-in, sign-up, and logout functionality).
- **Firebase Firestore Database**: For storing order data and user information.
- **React Navigation**: For managing navigation within the app, including bottom tabs and stack navigation.
- **React Native Vector Icons**: To add icons to the app's UI for a better user experience.
- **Lottie React Native**: For implementing animations.
- **Dotenv**: For managing environment variables, such as API keys.
- **React Native Swiper**: For implementing a food picture carousel.

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
