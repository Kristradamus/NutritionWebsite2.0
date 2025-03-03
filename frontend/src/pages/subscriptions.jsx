import { useState, useRef, useEffect } from "react";
import "./subscriptions.css"

export default function Subscriptions() {
const [isYearly,setIsYearly] = useState(false);

{/*------------------------------------BENEFITS---------------------------------------------*/}
const subscriptionPlans = [
{
 type: "New",
 priceMonth: 5.99,
 priceYear: 69.99,
 benefits: [
   { benefit: "Access to Basic Nutrition Guides", description: "Simple, easy-to-follow meal plans and basic nutritional tips." },
   { benefit: "Weekly Tips", description: "Email with basic nutritional advice to improve general health and wellness." },
   { benefit: "Basic Recipes", description: "Access to a selection of healthy recipes to get started on your nutrition journey." },
   { benefit: "Limited Access to Communities", description: "Access to the community page and different servers, but with limited features." },
   { benefit: "1 Free Consultation (15 minutes)", description: "A one-time introductory consultation to understand your needs." }
 ]
},
{
 type: "Intermediate",
 priceMonth: 15.99,
 priceYear: 199.99,
 benefits: [
   { benefit: "Personalized Meal Plans", description: "Tailored meal plans to fit your goals." },
   { benefit: "Weekly Check-ins", description: "Regular check-ins to track progress and make small adjustments to meal plans as needed." },
   { benefit: "Exclusive Recipes & Meal Prep Tips", description: "Access to an expanded library of recipes and meal prep guides." },
   { benefit: "Access to Challenges/Programs", description: "Participate in monthly nutrition challenges or follow along with specialized programs." },
   { benefit: "Access to Expert Webinars", description: "Monthly webinars or live sessions on advanced nutrition topics." },
   { benefit: "Discount on Supplements/Products", description: "Exclusive discounts on health-related products like supplements, equipment, and more." }
 ]
},
{
 type: "Professional",
 priceMonth: 25.99,
 priceYear: 299.99,
 benefits: [
   { benefit: "Fully Customized Nutrition Plans", description: "Detailed, completely personalized plans tailored to your specific needs by professionals." },
   { benefit: "1-on-1 Coaching (Weekly)", description: "Personalized, direct coaching with a certified nutritionist or health coach to optimize your diet and goals." },
   { benefit: "Advanced Meal Tracking Tools", description: "Access to advanced tracking tools and apps to log meals, monitor nutrients, and make data-driven adjustments." },
   { benefit: "Priority Support", description: "VIP customer service with priority responses to all your queries and concerns." },
   { benefit: "Exclusive Pro Content", description: "Access to exclusive articles, videos, and courses about advanced nutrition strategies." },
   { benefit: "Private 1-on-1 Consultations (Monthly)", description: "Regular in-depth consultations to ensure you're on the right track with your nutrition plan." },
   { benefit: "Complete Access to the Community", description: "VIP membership in a specialized community or forum for high-level discussions, Q&A, and support from other pros." },
   { benefit: "Additional Discounts", description: "Higher discounts on products or services like consultations, supplements, and more." },
   { benefit: "Bonus: Personalized Fitness Plan", description: "Access to a fitness plan in addition to nutrition, creating a holistic approach to your goals." }
 ]
}
];

const subHandleToggle = () => {
setIsYearly(!isYearly);
}
const SubscriptionPlan = ({ plan }) => {
return (
 <div className={`subPlan sub${plan.type}`}>
   <div className={`subPlanTop sub${plan.type}Top`}>
     <h1 className="subTopTitle">{plan.type}</h1>
     <div className="subPrice">
       <h1 className="subTopTitle">{isYearly ? plan.priceYear : plan.priceMonth}</h1>
       <div className="subSidePrice">
         <h4 className="subCurrency">lv.</h4>
         <h4 className="subTime">{isYearly ? "/year" : "/month"}</h4>
       </div>
     </div>
     <div className="subButtons">
       <button className={`subTryFree ${plan.type}TryFree`}><strong>Try free</strong></button>
       <button className={`subBuyNow ${plan.type}BuyNow`}><strong>Buy now</strong><i className="fa-solid fa-location-arrow"></i></button>
     </div>
   <hr></hr>
   </div>
   <div className={`subBottom sub${plan.type}Bottom`}>
     <ul className={`subBenefits sub${plan.type}Benefits`}>
       {plan.benefits.map((item, index) => (
         <li key={index} className="subBenefit">
          <strong className="subBenefitTitle"><i className="fa-solid fa-check"></i>
            {item.benefit}:</strong>
          <p className="subDescription">{item.description}</p>
         </li>
       ))}
     </ul>
   </div>
 </div>
);
};
return (
<div className="subscriptions">
<div className="subBox">
<div className="subToggleContainer" onClick={subHandleToggle}>
  <div className={`subToggleCircle ${isYearly ? "moveRight" : "moveLeft"}`}></div>
  <span className={`subToggleText ${!isYearly ? "active" : ""}`}><strong>Monthly</strong></span>
  <span className={`subToggleText ${isYearly ? "active" : ""}`}><strong>Yearly</strong></span>
</div>
 <div className="subCategories">
   {subscriptionPlans.map((plan, index) => (
     <SubscriptionPlan key={index} plan={plan}/>
   ))}
 </div>
 </div>
</div>
);
}