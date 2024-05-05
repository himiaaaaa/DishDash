import { collection, getDocs, query, where, orderBy, onSnapshot, doc, deleteDoc,  addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from "../firebase";

export const addOrderToFirebase = async (items, restaurantName, totalPrice, email, navigation, setModalVisible) => {
  try {
    const restaurantItems = await items.filter(item => item.restaurantName === restaurantName);
    
    const orderData = {
      restaurantName: restaurantName,
      userEmail: email,
      items: restaurantItems,
      totalPrice: totalPrice,
      pricePlusDelivery: totalPrice >= 200 ? totalPrice: (Number(totalPrice) + 5).toFixed(2),
      createdAt: serverTimestamp()
    }
    await addDoc(collection(db, 'orders'), orderData);
    console.log('Order added to Firestore successfully');
    setModalVisible(false);
    await navigation.navigate('OrderCheckedOut', { restaurantName: restaurantName })
  } catch (error) {
    console.error('Error adding order to Firestore: ', error);
  }
};

export const fetchCompletedOrders = async (email, setOrders, navigation) => {
    try {
        if (!email) {
            navigation.navigate('ProfilePage');
            return;
        }
        
        const ordersRef = collection(db, 'orders');
        const q = query(ordersRef, where("userEmail", "==", email), orderBy('createdAt', 'desc'));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const completedOrders = [];
            querySnapshot.forEach((doc) => {
                completedOrders.push(doc.data());
            });
            setOrders(completedOrders);
            console.log('Completed orders', completedOrders)
        });

        return unsubscribe;

    } catch (error) {
        console.error('Error fetching completed orders from Firestore: ', error);
    }
};

export const deleteOrder = async (userEmail, orderDate) => {
    try {
        console.log("User Email:", userEmail, "Order Date:", orderDate)
        const ordersRef = collection(db, 'orders');
        const q = query(ordersRef, where("userEmail", "==", userEmail), where("createdAt", "==", orderDate));
        
        const querySnapshot = await getDocs(q);
        
        if (querySnapshot.empty) {
            console.log("No matching orders found.");
            return;
        }
        
        querySnapshot.forEach(async (docSnapshot) => {
            console.log("Deleting order:", docSnapshot.id)
            const orderRef = doc(db, 'orders', docSnapshot.id);
            await deleteDoc(orderRef);
        });
        
        console.log("Order deleted successfully");
        
    } catch (error) {
        console.error("Error deleting order: ", error);
    }
};
