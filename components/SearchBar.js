import React from "react";
import { View, Text, ScrollView } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function SearchBar() {
  return (
    <View className='mt-4 flex-row'>
      <GooglePlacesAutocomplete
        query={{ key: process.env.API_KEY }}
        placeholder="Search location"
        styles={{
          textInput: {
            backgroundColor: "#eee",
            fontWeight: "700",
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
          },
        }}
        renderLeftButton={() => (
          <View className='ml-4'>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View
            className='flex-row mr-4 bg-white p-2 rounded-2xl items-center'
          >
            <AntDesign
              name="clockcircle"
              size={11}
              className='mr-2'
            />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
}
