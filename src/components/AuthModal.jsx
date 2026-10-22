import React, { useState } from "react";
import { X, User } from "lucide-react";

function AuthModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");

  if (!isOpen) return null;

  const handleNextStep = (e) => {
    e.preventDefault();
    if (phone.length < 10) return;
    setStep(2);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    alert("ورود با موفقیت انجام شد! (این بخش با بک‌اند تکمیل می‌شود)");
    onClose();
    setStep(1);
    setPhone("");
    setCode("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      ></div>

      <div className="relative w-full max-w-sm bg-[#F9F6F0] rounded-3xl shadow-2xl border border-[#EFEAE1] p-6 dir-rtl z-10 space-y-5">
        
        <div className="flex items-center justify-between border-b border-[#EFEAE1] pb-3">
          <div className="flex items-center gap-2 text-[#4A3E3D]">
            <User size={20} />
            <h3 className="font-bold text-base">ورود / عضویت</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-[#EAE2D8] text-[#4A3E3D] transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {step === 1 ? (
          <form onSubmit={handleNextStep} className="space-y-4">
            <div className="space-y-1 text-right">
              <label className="text-xs font-medium text-[#7A6E6D]">
                شماره موبایل خود را وارد کنید
              </label>
              <input
                type="tel"
                placeholder="09123456789"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                maxLength={11}
                autoFocus
                className="w-full px-4 py-2.5 text-sm bg-white border border-[#EFEAE1] rounded-xl focus:outline-none focus:border-[#7A685D] text-[#4A3E3D] text-left dir-ltr"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#7A685D] hover:bg-[#65554B] text-white py-3 rounded-xl text-sm font-bold transition-all shadow-sm cursor-pointer"
            >
              دریافت کد تایید
            </button>
          </form>
        ) : (
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="text-xs text-[#7A6E6D] text-right">
              کد تایید به شماره <span className="font-bold text-[#4A3E3D]">{phone}</span> ارسال شد.
            </div>

            <div className="space-y-1 text-right">
              <input
                type="text"
                placeholder="کد تایید ۴ رقمی"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                maxLength={4}
                autoFocus
                className="w-full px-4 py-2.5 text-sm bg-white border border-[#EFEAE1] rounded-xl focus:outline-none focus:border-[#7A685D] text-[#4A3E3D] text-center tracking-widest font-bold"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#7A685D] hover:bg-[#65554B] text-white py-3 rounded-xl text-sm font-bold transition-all shadow-sm cursor-pointer"
            >
              ورود به حساب کاربری
            </button>

            <button
              type="button"
              onClick={() => setStep(1)}
              className="w-full text-xs text-[#7A6E6D] hover:text-[#4A3E3D] transition-colors text-center cursor-pointer pt-1"
            >
              ویرایش شماره موبایل
            </button>
          </form>
        )}

      </div>
    </div>
  );
}

export default AuthModal;