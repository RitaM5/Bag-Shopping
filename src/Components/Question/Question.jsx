import React from 'react';
import './Qustion.css';
const Question = () => {
    return (
        <div className="p-5 py-3 qsn-ans my-4 rounded">
           <div>
           <h3>React কিভাবে কাজ করে ?</h3>
           <p>একটা ওয়েবসাইটে কোন একটা এলিমেন্ট চেঞ্জ করলে শুরু থেকে শেষ পর্যন্ত সেটা পুনরায়   প্রিন্ট করাটা সময় সাপেক্ষ ব্যাপার। এবং যখন আমরা ডায়নামিক ওয়েবসাইট তৈরি করি এই কাজটা খুব বেশি হয়। বারবার ওয়েবসাইট রেন্ডারিং করাটা পারফর্মেন্স ভালো হয়না।
           এখানেই React এর মূল স্পেশালিটি।
           React পুরাটা ওয়েবপেজকে নতুনভাবে রেন্ডারিং না করে শুধুমাত্র স্পেসিফিক যে জায়গাটাতে পরিবর্তন হয়েছে সেই জায়গাটা রেন্ডার করে। React এটা করে থাকে virtual DOM এর মাধ্যমে।</p> 
           </div>
           <div className="py-3">
               <h3>useState কিভাবে কাজ করে ?</h3>
               <p>UseState() ব‍্যবহার করা হয়  সাধারণত component এর state management এর জন্য। আর useState() সবসময় functional component এ state variable কে রাখতে চায়।seState() দুইটা জিনিস রিটার্ন করে। একটি হলো State আর অন্যটি হলো function। এই function টা দিয়ে new state সেট করতে হয়।</p>
           </div>
        </div>
    );
};

export default Question;