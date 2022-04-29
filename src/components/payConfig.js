export const config = (userInfo, amount) => {
    return {
        public_key: 'FLWPUBK_TEST-e1399dbd0b80e614e77eb9000e0ba5b2-X',
        tx_ref: Date.now(),
        amount: amount,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        // redirect_url: "http://localhost:3000",
        customer: {
          email: userInfo.email,
          phonenumber: userInfo.phone1,
          name: `${userInfo.firstname}  ${userInfo.lastname}`,
        },
        customizations: {
          title: "eShop",
          description: 'Payment for Products Ordered & Delivery',
          logo: 'https://its.unl.edu/images/services/icons/eShop_Icon-01.png',
        },
    }
}


// function makePayment() {
//   FlutterwaveCheckout({
//     public_key: "FLWPUBK_TEST-SANDBOXDEMOKEY-X",
//     tx_ref: "titanic-48981487343MDI0NzMx",
//     amount: 54600,
//     currency: "NGN",
//     payment_options: "card, mobilemoneyghana, ussd",
//     redirect_url: "https://glaciers.titanic.com/handle-flutterwave-payment",
//     meta: {
//       consumer_id: 23,
//       consumer_mac: "92a3-912ba-1192a",
//     },
//     customer: {
//       email: "rose@unsinkableship.com",
//       phone_number: "08102909304",
//       name: "Rose DeWitt Bukater",
//     },
//     customizations: {
//       title: "The Titanic Store",
//       description: "Payment for an awesome cruise",
//       logo: "https://www.logolynx.com/images/logolynx/22/2239ca38f5505fbfce7e55bbc0604386.jpeg",
//     },
//   });
// }