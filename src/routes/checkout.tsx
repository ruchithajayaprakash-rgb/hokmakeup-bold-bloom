import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { 
  ChevronLeft, ShoppingBag, MapPin, CreditCard, 
  CheckCircle2, ShieldCheck, RefreshCw, Truck,
  Smartphone, Banknote, Landmark, Gift, CreditCard as CardIcon,
  Plus, Minus, X
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
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

  // Timer logic for UPI
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

  // Price Breakdown Calculations
  const mrp = 795;
  const discount = 79;
  const salePrice = mrp - discount;
  const shipping = salePrice >= 699 ? 0 : 40;
  const prepaidDiscount = paymentMethod !== 'cod' ? Math.round(salePrice * 0.05) : 0;
  const total = salePrice + shipping - prepaidDiscount;

  return (
    <div className="min-h-screen bg-[#F8F8F8] font-sans text-[#1A1A1A]">
      {/* --- 3-STEP PROGRESS BAR --- */}
      <div className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="font-black text-xl text-hok-text">HOKmakeup®</Link>
          <div className="flex items-center gap-4 md:gap-8">
            <StepItem icon={<ShoppingBag size={16}/>} label="Bag" active={step === 'bag'} complete={step !== 'bag'} />
            <div className={`h-[2px] w-8 md:w-16 ${step !== 'bag' ? 'bg-[#7C3AED]' : 'bg-gray-200'}`} />
            <StepItem icon={<MapPin size={16}/>} label="Address" active={step === 'address'} complete={step === 'payment'} />
            <div className={`h-[2px] w-8 md:w-16 ${step === 'payment' ? 'bg-[#7C3AED]' : 'bg-gray-200'}`} />
            <StepItem icon={<CreditCard size={16}/>} label="Payment" active={step === 'payment'} complete={false} />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT COLUMN: Main Content */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* STEP 1: BAG */}
          {step === 'bag' && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
              <div className="bg-white rounded-2xl p-6 border shadow-sm">
                <div className="flex gap-4">
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
              </div>

              {/* Horizontal "You May Also Like" Scroll */}
              <div className="bg-white rounded-2xl p-6 border shadow-sm overflow-hidden">
                <h3 className="font-bold mb-4 uppercase text-xs tracking-widest text-[#7C3AED]">You May Also Like</h3>
                <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
                  {SUGGESTED_PRODUCTS.map((p, i) => (
                    <div key={i} className="min-w-[160px] p-3 border rounded-xl flex flex-col gap-2">
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

          {/* STEP 3: PAYMENT PANEL */}
          {step === 'payment' && (
            <div className="bg-white rounded-2xl border shadow-sm overflow-hidden animate-in fade-in slide-in-from-bottom-4">
              <div className="grid grid-cols-1 md:grid-cols-5 min-h-[450px]">
                {/* Payment Nav (Left) */}
                <div className="md:col-span-2 border-r bg-gray-50/50">
                  <PaymentNav current={paymentMethod} set={setPaymentMethod} />
                </div>
                {/* Payment Details (Right) */}
                <div className="md:col-span-3 p-8">
                  {paymentMethod === 'upi' && (
                    <div className="space-y-6 text-center">
                      <div className="flex justify-between items-center bg-yellow-50 p-3 rounded-lg border border-yellow-100 mb-4">
                        <span className="text-xs font-bold text-yellow-800">Complete payment in</span>
                        <span className="font-mono font-bold text-[#7C3AED]">{formatTime(timeLeft)}</span>
                      </div>
                      <div className="aspect-square w-48 mx-auto bg-white border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center p-4">
                        <div className="w-full h-full bg-[url('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=HOK')] bg-center bg-no-repeat opacity-20" />
                        <p className="text-[10px] uppercase font-bold text-gray-400 mt-2">Scan with any UPI app</p>
                      </div>
                      <div className="flex justify-center gap-3 opacity-60">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg" className="h-4" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Google_Pay_Logo.svg" className="h-4" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/PhonePe_Logo.svg" className="h-4" />
                      </div>
                      <button className="w-full bg-[#E91E63] text-white py-4 rounded-full font-black shadow-lg uppercase tracking-wider">Scan & Pay ₹{total}</button>
                    </div>
                  )}

                  {paymentMethod === 'card' && (
                    <div className="space-y-4">
                      <h4 className="font-bold">Enter Card Details</h4>
                      <input placeholder="Card Number" className="w-full p-4 border rounded-xl focus:ring-2 ring-purple-100 outline-none" />
                      <div className="grid grid-cols-2 gap-4">
                        <input placeholder="MM/YY" className="p-4 border rounded-xl outline-none" />
                        <input placeholder="CVV" className="p-4 border rounded-xl outline-none" />
                      </div>
                      <button className="w-full bg-[#7C3AED] text-white py-4 rounded-xl font-black mt-4">PAY ₹{total}</button>
                    </div>
                  )}

                  {paymentMethod === 'cod' && (
                    <div className="text-center py-12 space-y-4">
                      <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto">
                        <Truck className="text-green-600" />
                      </div>
                      <h4 className="font-bold">Cash on Delivery Available</h4>
                      <p className="text-sm text-gray-500 px-8">Pay with cash or QR at your doorstep when you receive your order.</p>
                      <button className="w-full bg-black text-white py-4 rounded-xl font-black mt-4">PLACE ORDER</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {step === 'address' && (
            <div className="bg-white rounded-2xl p-8 border shadow-sm animate-in fade-in">
              <h3 className="font-bold text-xl mb-6">Shipping Address</h3>
              <div className="space-y-4">
                <input placeholder="Full Name" className="w-full p-4 border rounded-xl" />
                <input placeholder="Mobile Number" className="w-full p-4 border rounded-xl" />
                <input placeholder="Flat / House No / Area" className="w-full p-4 border rounded-xl" />
                <input placeholder="Pincode" className="w-full p-4 border rounded-xl" />
                <button onClick={() => setStep('payment')} className="w-full bg-[#7C3AED] text-white py-4 rounded-xl font-black mt-6">DELIVER TO THIS ADDRESS</button>
              </div>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: Price Breakdown & Badges */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border shadow-sm p-6 sticky top-24">
            
            {/* Automatic Coupon Flash */}
            <div className="bg-purple-50 border border-purple-100 p-3 rounded-xl mb-6 flex justify-between items-center animate-pulse">
              <div className="flex items-center gap-2">
                <Gift size={16} className="text-[#7C3AED]" />
                <span className="text-[10px] font-black text-[#7C3AED] uppercase">HOKWELCOME Applied!</span>
              </div>
              <span className="text-[10px] font-bold text-green-600">-₹79</span>
            </div>

            <h3 className="font-bold uppercase text-xs tracking-widest text-gray-400 mb-4">Price Breakdown</h3>
            <div className="space-y-3 text-sm font-medium">
              <div className="flex justify-between">
                <span>Total MRP</span>
                <span>₹{mrp}</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>Discount applied</span>
                <span>-₹{discount}</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-1">
                  <span>Delivery Charges</span>
                  {shipping === 0 && <span className="text-[10px] font-bold text-green-600 uppercase">FREE</span>}
                </div>
                <span className={shipping === 0 ? 'line-through text-gray-400' : ''}>₹40</span>
              </div>
              {prepaidDiscount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Prepaid Order Discount (5%)</span>
                  <span>-₹{prepaidDiscount}</span>
                </div>
              )}
              <div className="h-[1px] bg-gray-100 my-2" />
              <div className="flex justify-between text-lg font-black pt-2">
                <span>Total Amount</span>
                <span>₹{total}</span>
              </div>
              <p className="text-[10px] font-bold text-green-600 bg-green-50 p-2 rounded text-center">
                YAY! YOU SAVED ₹{discount + prepaidDiscount} ON THIS ORDER
              </p>
            </div>

            {/* Prepaid Nudge */}
            {paymentMethod === 'cod' && (
                <div className="mt-6 p-3 bg-blue-50 border border-blue-100 rounded-xl text-[10px] font-bold text-blue-700 flex items-center gap-2">
                    <CreditCard size={14} />
                    SAVE EXTRA ₹{Math.round(salePrice * 0.05)} BY PAYING ONLINE!
                </div>
            )}

            {/* Trust Badges */}
            <div className="mt-8 pt-8 border-t grid grid-cols-3 gap-2">
              <TrustBadge icon={<ShieldCheck size={18}/>} label="Authentic" />
              <TrustBadge icon={<CheckCircle2 size={18}/>} label="Secure" />
              <TrustBadge icon={<RefreshCw size={18}/>} label="Returns" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Sub-components for cleaner code
function StepItem({ icon, label, active, complete }: any) {
  return (
    <div className={`flex items-center gap-2 ${active ? 'text-[#7C3AED]' : complete ? 'text-green-600' : 'text-gray-400'}`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${active ? 'border-[#7C3AED] bg-purple-50' : complete ? 'border-green-600 bg-green-50' : 'border-gray-200'}`}>
        {complete ? <CheckCircle2 size={16} /> : icon}
      </div>
      <span className="hidden md:block text-xs font-black uppercase tracking-tighter">{label}</span>
    </div>
  );
}

function PaymentNav({ current, set }: any) {
  const methods = [
    { id: 'upi', label: 'UPI', sub: 'GPay, PhonePe, UPI', icon: <Smartphone size={18} /> },
    { id: 'card', label: 'Cards', sub: 'Visa, Master, Rupay', icon: <CardIcon size={18} /> },
    { id: 'cod', label: 'Cash on Delivery', sub: 'Pay at doorstep', icon: <Banknote size={18} /> },
    { id: 'nb', label: 'NetBanking', sub: 'All major banks', icon: <Landmark size={18} /> },
    { id: 'gift', label: 'Gift Card', sub: 'HOK Vouchers', icon: <Gift size={18} /> },
  ];

  return (
    <div className="flex flex-col">
      {methods.map((m) => (
        <button 
          key={m.id}
          onClick={() => set(m.id)}
          className={`flex items-center gap-4 p-5 text-left transition-all border-b border-gray-100 ${current === m.id ? 'bg-white border-l-4 border-l-[#E91E63] shadow-sm' : 'hover:bg-gray-100/50'}`}
        >
          <div className={current === m.id ? 'text-[#E91E63]' : 'text-gray-400'}>{m.icon}</div>
          <div>
            <p className={`text-xs font-black uppercase ${current === m.id ? 'text-[#1A1A1A]' : 'text-gray-500'}`}>{m.label}</p>
            <p className="text-[10px] text-gray-400 font-medium">{m.sub}</p>
          </div>
        </button>
      ))}
    </div>
  );
}

function TrustBadge({ icon, label }: any) {
  return (
    <div className="flex flex-col items-center gap-1 text-center">
      <div className="text-gray-400">{icon}</div>
      <span className="text-[9px] font-bold uppercase text-gray-500">{label}</span>
    </div>
  );
}
 
