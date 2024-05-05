import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

const Notification = ({ errorMessage, clearError }) => {
    useEffect(() => {
        setTimeout(() => {
            clearError();
        }, 8000); 

    }, [errorMessage]);

    return errorMessage ? (
        <View>
            <Text className="text-primary text-md">{errorMessage}</Text>
        </View>
    ) : null;
};

export default Notification;
