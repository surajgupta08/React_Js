import React from "react";
import Card from "./components/Card";



const jobOpenings = [
  {
    brandlogo: "https://www.pngall.com/wp-content/uploads/13/Google-Logo-PNG-Image.png",
    company: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hour",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://lookaside.fbsbx.com/elementpath/media/?media_id=597423292333741&version=1782938342",
    company: "Meta",
    datePosted: "10 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hour",
    location: "Bangalore, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGARB4PRYKkemGJgn2lUROMMlKLDLTxSgd0SDZ_b_hF-zr5EwsH-I0GcPi&s=10",
    company: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hour",
    location: "Hyderabad, India"
  },
  {
    brandlogo: "https://images.seeklogo.com/logo-png/15/2/apple-logo-png_seeklogo-158010.png",
    company: "Apple",
    datePosted: "3 weeks ago",
    post: "iOS Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$70/hour",
    location: "Bangalore, India"
  },
  {
    brandlogo: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940",
    company: "Netflix",
    datePosted: "1 month ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hour",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/RWCZER-Legal-IP-Trademarks-CP-MS-logo-740x417-1?wid=406&hei=230&fit=crop&resSharp=1",
    company: "Microsoft",
    datePosted: "4 days ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hour",
    location: "Noida, India"
  },
  {
    brandlogo: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/nvidia-og-image-white-bg-1200x630.jpg",
    company: "NVIDIA",
    datePosted: "6 weeks ago",
    post: "AI Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$90/hour",
    location: "Pune, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqfSXiHONNxfSWbITBVU9UgoaM5l4ZFNVbecRkjv3i4A&s=10",
    company: "Oracle",
    datePosted: "2 months ago",
    post: "Cloud Application Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hour",
    location: "Bangalore, India"
  },
  {
    brandlogo: "https://blog.logomaster.ai/hs-fs/hubfs/ibm-logo-1956.jpg?width=672&height=454&name=ibm-logo-1956.jpg",
    company: "IBM",
    datePosted: "8 weeks ago",
    post: "Cloud Engineer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$60/hour",
    location: "Gurgaon, India"
  },
  {
    brandlogo: "https://blog.adobe.com/en/publish/2020/05/28/media_1d87bf78b1ce19defbef0c7858b4df696215a4048.png?width=750&format=png&optimize=medium",
    company: "Adobe",
    datePosted: "10 weeks ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$48/hour",
    location: "Delhi, India"
  }
];


function App() {
  return (
    <div className="parent">
      {jobOpenings.map(function(elem){
        return <Card name={elem.company} datePosted={elem.datePosted} brandlogo={elem.brandlogo} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location}/>
      })}
    </div>
  );
}

export default App;
