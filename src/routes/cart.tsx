import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { 
  ShoppingBag, MapPin, CreditCard, 
  CheckCircle2, ShieldCheck, RefreshCw, Truck,
  Smartphone, Banknote, Landmark, Gift, X
} from "lucide-react";

export const Route = createFileRoute("/checkout")({
  component: CheckoutPage,
});

const SUGGESTED_PRODUCTS = [
  { name: "Relove Stain It Lip Ink", price: "₹499", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=200" },
  { name: "Milani Baked Blush", price: "₹1,450", image: "https://images.unsplash.com/photo-1558500204-629221fc36da?w=200" },
  { name: "Revolution Highlight", price: "₹765", image: "https://images.unsplash.com/photo-1625088981476-88abeb9e9d69?w=200" },
];

export function CheckoutPage() {
  const [step, setStep] = useState<'bag' | 'address' | 'payment'>('bag');
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [timeLeft, setTimeLeft] = useState(600);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const mrp = 795;
  const discount = 79;
  const salePrice = mrp - discount;
  const shipping = salePrice >= 699 ? 0 : 40;
  const prepaidDiscount = paymentMethod !== 'cod' ? Math.round(salePrice * 0.05) : 0;
  const total = salePrice + shipping - prepaidDiscount;

  return (
    <div className="min-h-screen bg-[#FDF0F5] font-sans text-[#1A1A1A]">
      {/* 3-STEP PROGRESS BAR */}
      <div className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="font-black text-xl text-[#E91E63]">HOKmakeup®</Link>
          <div className="flex items-center gap-4 md:gap-8">
            <div className={`flex items-center gap-2 ${step === 'bag' ? 'text-[#7C3AED]' : 'text-green-600'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step === 'bag' ? 'border-[#7C3AED]' : 'border-green-600'}`}>
                <ShoppingBag size={14} />
              </div>
              <span className="hidden md:block text-[10px] font-black uppercase">Bag</span>
            </div>
            <div className={`h-[2px] w-8 md:w-16 ${step !== 'bag' ? 'bg-[#7C3AED]' : 'bg-gray-200'}`} />
            <div className={`flex items-center gap-2 ${step === 'address' ? 'text-[#7C3AED]' : step === 'payment' ? 'text-green-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step === 'address' ? 'border-[#7C3AED]' : step === 'payment' ? 'border-green-600' : 'border-gray-200'}`}>
                <MapPin size={14} />
              </div>
              <span className="hidden md:block text-[10px] font-black uppercase">Address</span>
            </div>
            <div className={`h-[2px] w-8 md:w-16 ${step === 'payment' ? 'bg-[#7C3AED]' : 'bg-gray-200'}`} />
            <div className={`flex items-center gap-2 ${step === 'payment' ? 'text-[#7C3AED]' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step === 'payment' ? 'border-[#7C3AED]' : 'border-gray-200'}`}>
                <CreditCard size={14} />
              </div>
              <span className="hidden md:block text-[10px] font-black uppercase">Payment</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {step === 'bag' && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border shadow-sm flex gap-4">
                <img src="https://images.unsplash.com/photo-1625088981476-88abeb9e9d69?w=400" className="w-24 h-32 object-cover rounded-lg border" />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-bold">Revolution Kiss Drip Water Lip Tint</h3>
                    <button className="text-gray-400"><X size={20}/></button>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">Shade: Coral Water</p>
                  <div className="flex items-center gap-3">
                    <span className="font-black">₹716</span>
                    <span className="text-sm text-gray-400 line-through">₹795</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 border shadow-sm">
                <h3 className="font-bold mb-4 uppercase text-[10px] tracking-widest text-[#7C3AED]">You May Also Like</h3>
                <div className="flex gap-4 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none' }}>
                  {SUGGESTED_PRODUCTS.map((p, i) => (
                    <div key={i} className="min-w-[160px] p-3 border rounded-xl flex flex-col gap-2 bg-white">
                      <img src={p.image} className="aspect-square object-cover rounded-lg" />
                      <p className="text-[10px] font-bold h-6 overflow-hidden leading-tight">{p.name}</p>
                      <p className="text-xs font-black">{p.price}</p>
                      <button className="bg-[#7C3AED] text-white text-[10px] py-2 rounded-lg font-bold">ADD TO BAG</button>
                    </div>
                  ))}
                </div>
              </div>
              <button onClick={() => setStep('address')} className="w-full bg-[#7C3AED] text-white py-4 rounded-xl font-black shadow-lg">CONTINUE TO ADDRESS</button>
            </div>
          )}

          {step === 'address' && (
            <div className="bg-white rounded-2xl p-8 border shadow-sm">
              <h3 className="font-bold text-xl mb-6">Shipping Address</h3>
              <div className="space-y-4">
                <input placeholder="Full Name" className="w-full p-4 border rounded-xl outline-none focus:border-[#7C3AED]" />
                <input placeholder="Mobile Number" className="w-full p-4 border rounded-xl outline-none focus:border-[#7C3AED]" />
                <input placeholder="Flat / House No / Area" className="w-full p-4 border rounded-xl outline-none focus:border-[#7C3AED]" />
                <div className="grid grid-cols-2 gap-4">
                  <input placeholder="Pincode" className="p-4 border rounded-xl outline-none focus:border-[#7C3AED]" />
                  <input placeholder="City" className="p-4 border rounded-xl outline-none focus:border-[#7C3AED]" />
                </div>
                <button onClick={() => setStep('payment')} className="w-full bg-[#7C3AED] text-white py-4 rounded-xl font-black mt-6">DELIVER TO THIS ADDRESS</button>
              </div>
            </div>
          )}

          {step === 'payment' && (
            <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-5 min-h-[450px]">
                <div className="md:col-span-2 border-r bg-gray-50/50">
                  <button onClick={() => setPaymentMethod('upi')} className={`w-full flex items-center gap-4 p-5 text-left border-b ${paymentMethod === 'upi' ? 'bg-white border-l-4 border-l-[#E91E63]' : ''}`}>
                    <Smartphone size={18} className={paymentMethod === 'upi' ? 'text-[#E91E63]' : 'text-gray-400'} />
                    <div><p className="text-[10px] font-black uppercase">UPI</p><p className="text-[9px] text-gray-400">GPay, PhonePe</p></div>
                  </button>
                  <button onClick={() => setPaymentMethod('card')} className={`w-full flex items-center gap-4 p-5 text-left border-b ${paymentMethod === 'card' ? 'bg-white border-l-4 border-l-[#E91E63]' : ''}`}>
                    <CreditCard size={18} className={paymentMethod === 'card' ? 'text-[#E91E63]' : 'text-gray-400'} />
                    <div><p className="text-[10px] font-black uppercase">Cards</p><p className="text-[9px] text-gray-400">Visa, Mastercard</p></div>
                  </button>
                  <button onClick={() => setPaymentMethod('cod')} className={`w-full flex items-center gap-4 p-5 text-left border-b ${paymentMethod === 'cod' ? 'bg-white border-l-4 border-l-[#E91E63]' : ''}`}>
                    <Banknote size={18} className={paymentMethod === 'cod' ? 'text-[#E91E63]' : 'text-gray-400'} />
                    <div><p className="text-[10px] font-black uppercase">Cash on Delivery</p><p className="text-[9px] text-gray-400">Pay at doorstep</p></div>
                  </button>
                </div>
                <div className="md:col-span-3 p-8">
                  {paymentMethod === 'upi' && (
                    <div className="space-y-6 text-center">
                      <div className="flex justify-between items-center bg-yellow-50 p-3 rounded-lg border border-yellow-100">
                        <span className="text-[10px] font-bold text-yellow-800 uppercase tracking-tighter">Complete payment in</span>
                        <span className="font-mono font-bold text-[#7C3AED]">{formatTime(timeLeft)}</span>
                      </div>
                      <div className="aspect-square w-40 mx-auto bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center p-4">
                        <div className="w-full h-full bg-[url('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=HOK')] bg-center bg-no-repeat" />
                      </div>
                      <div className="flex justify-center gap-3 opacity-40">
                        <span className="text-[10px] font-bold">GPay</span><span className="text-[10px] font-bold">PhonePe</span><span className="text-[10px] font-bold">Paytm</span>
                      </div>
                      <button className="w-full bg-[#E91E63] text-white py-4 rounded-full font-black shadow-lg uppercase text-sm">Scan & Pay ₹{total}</button>
                    </div>
                  )}
                  {paymentMethod === 'card' && (
                    <div className="space-y-4">
                      <h4 className="font-bold text-sm uppercase">Enter Card Details</h4>
                      <input placeholder="Card Number" className="w-full p-4 border rounded-xl outline-none focus:border-[#E91E63]" />
                      <div className="grid grid-cols-2 gap-4">
                        <input placeholder="MM/YY" className="p-4 border rounded-xl outline-none focus:border-[#E91E63]" />
                        <input placeholder="CVV" className="p-4 border rounded-xl outline-none focus:border-[#E91E63]" />
                      </div>
                      <button className="w-full bg-[#E91E63] text-white py-4 rounded-xl font-black mt-4">PAY ₹{total}</button>
                    </div>
                  )}
                  {paymentMethod === 'cod' && (
                    <div className="text-center py-12 space-y-4">
                      <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto text-green-600"><Truck /></div>
                      <h4 className="font-bold uppercase text-sm">Pay at Doorstep</h4>
                      <p className="text-xs text-gray-500">Please keep exact change ready for the delivery partner.</p>
                      <button className="w-full bg-black text-white py-4 rounded-xl font-black mt-4 uppercase">Place order</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl border shadow-sm p-6 sticky top-24">
            <div className="bg-purple-50 border border-purple-100 p-3 rounded-xl mb-6 flex justify-between items-center animate-pulse">
              <div className="flex items-center gap-2">
                <Gift size={16} className="text-[#7C3AED]" />
                <span className="text-[10px] font-black text-[#7C3AED] uppercase">HOKWELCOME Applied!</span>
              </div>
              <span className="text-[10px] font-bold text-green-600">-₹79</span>
            </div>
            <h3 className="font-bold uppercase text-[10px] tracking-widest text-gray-400 mb-4">Price Breakdown</h3>
            <div className="space-y-3 text-sm font-medium">
              <div className="flex justify-between"><span>Total MRP</span><span>₹{mrp}</span></div>
              <div className="flex justify-between text-green-600"><span>Discount</span><span>-₹{discount}</span></div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className={shipping === 0 ? 'text-green-600 font-bold' : ''}>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
              </div>
              {prepaidDiscount > 0 && <div className="flex justify-between text-green-600 italic"><span>Prepaid Discount (5%)</span><span>-₹{prepaidDiscount}</span></div>}
              <div className="h-[1px] bg-gray-100 my-2" />
              <div className="flex justify-between text-lg font-black"><span>Total</span><span>₹{total}</span></div>
              <p className="text-[10px] font-bold text-green-600 bg-green-50 p-2 rounded text-center">YAY! YOU SAVED ₹{discount + prepaidDiscount} ON THIS ORDER</p>
            </div>
            <div className="mt-8 pt-8 border-t grid grid-cols-3 gap-2 opacity-50">
              <div className="flex flex-col items-center gap-1 text-center"><ShieldCheck size={14}/><span className="text-[8px] font-bold uppercase">Authentic</span></div>
              <div className="flex flex-col items-center gap-1 text-center"><CheckCircle2 size={14}/><span className="text-[8px] font-bold uppercase">Secure</span></div>
              <div className="flex flex-col items-center gap-1 text-center"><RefreshCw size={14}/><span className="text-[8px] font-bold uppercase">Returns</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
