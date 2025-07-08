import { TracingBeam } from "@/components/ui/tracing-beam";
import { Chocolate_Classical_Sans } from "next/font/google";
import React from "react";

function page() {
  return (
    <TracingBeam className="md:mt-32 mt-24 ">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {Features.map((item, index) => (
          <div key={`content-${index}`} className="mb-10 md:mx-0 mx-16">
            <p className="md:text-2xl text-xl text-slate-200 mb-4 font-bold">
              {item.title}
            </p>
            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <img
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              <p className="text-slate-300 font-medium">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}
const Features = [
  {
    title: "Real-Time Expense Tracking",
    description:
      "Experience instant financial clarity with our real-time expense tracking, powered by React and Chart.js. Every transaction updates immediately—an exclusive feature designed for users who demand up-to-the-minute insights. Don't miss out on this game-changing capability!",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Export & AI-Powered Reports",
    description:
      "Unlock unparalleled insights with one-click, AI-powered reports built on Express and Node.js. Generate detailed, downloadable financial summaries that empower you to make smarter decisions. This premium tool is in high demand—act now to secure your edge in financial management!",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Smart Notifications & Alerts",
    description:
      "Stay ahead of your finances with proactive alerts and smart notifications integrated with Firebase Cloud Messaging and React. Get instant updates on unusual spending, upcoming bills, and savings milestones. This feature is essential for anyone who wants to be the first to know—grab it while it's exclusive!",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Real-Time Multi-Currency Support",
    description:
      "Effortlessly manage transactions in multiple currencies with our real-time conversion feature, leveraging reliable third-party APIs and React. Ideal for global travelers and freelancers, this feature gives you a distinct advantage—secure your financial freedom before it's too late!",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Mobile-Optimized Dashboard",
    description:
      "Access your financial insights anytime, anywhere with our cutting-edge, mobile-first dashboard developed using React and Tailwind CSS. This responsive design ensures a seamless experience on every device. Join the elite few who enjoy complete control on the go—act fast and stay ahead!",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Detailed Spending Reports",
    description:
      "Dive deep into your spending habits with our comprehensive, downloadable reports powered by Express and MongoDB. These clear, data-driven insights help you optimize your budget and boost savings. This advanced feature is available for a limited time—don't let your financial future slip away!",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
export default page;
