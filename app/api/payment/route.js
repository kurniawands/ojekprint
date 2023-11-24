import midtransClient from "midtrans-client";

export const POST = async (request) => {
  const { orderid, total_price } = await request.json();

  try {
    // Create Snap API instance
    let snap = new midtransClient.Snap({
      // Set to true if you want Production Environment (accept real transaction).
      isProduction: false,
      serverKey: process.env.MIDTRANS_SERVER_KEY,
      clientKey: process.env.MIDTRANS_CLIENT_KEY,
    });

    let parameter = {
      transaction_details: {
        order_id: orderid,
        gross_amount: total_price,
      },
      // "credit_card":{
      //     "secure" : true
      // },
      // "customer_details": {
      //     "first_name": "budi",
      //     "last_name": "pratama",
      //     "email": "budi.pra@example.com",
      //     "phone": "08111222333"
      // }
    };

    // snap.createTransaction(parameter).then((transaction) => {
    //   console.log(transaction);
    //   // transaction token
    //   // let transactionToken = transaction.token;
    //   // console.log('transactionToken:',transactionToken);
    //   const redirectUrl = transaction.redirect_url;

    //   // console.log(redirectUrl);
    // });

    const transaction = await snap.createTransaction(parameter);
    const redirectUrl = transaction.redirect_url;

    // console.log(transaction);

    return new Response(JSON.stringify(redirectUrl), { status: 200 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};
