declare module '@payhere/payhere-mobilesdk-reactnative' {
  export interface PaymentObject {
    sandbox: boolean;
    merchant_id: string;
    notify_url: string;
    order_id: string;
    items: string;
    amount: string | number;
    currency: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    country: string;
    delivery_address?: string;
    delivery_city?: string;
    delivery_country?: string;
    custom_1?: string;
    custom_2?: string;
  }

  export interface PayHere {
    startPayment(
      paymentObject: PaymentObject,
      onCompleted: (paymentId: string) => void,
      onError: (error: string) => void,
      onDismissed: () => void
    ): void;
  }

  const payHere: PayHere;
  export default payHere;
}