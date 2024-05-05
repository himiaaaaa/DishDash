import { collection, getDocs, query, where, orderBy, onSnapshot, doc, deleteDoc } from 'firebase/firestore';
import { db } from "../firebase";

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
