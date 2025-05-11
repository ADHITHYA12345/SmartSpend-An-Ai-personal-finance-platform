import HeroSection from "@/components/hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { featuresData, howItWorksData, statsData, testimonialsData } from "@/Data/landing";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-40">
      <HeroSection/>
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((statsData,index)=>(
              <div key={index}>
               <div className="text-4xl font-bold text-pink-600 mb-2">{statsData.value}</div>
               <div className="text-grey-600">{statsData.label}</div>
               </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Every you need to manage your finances</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((featuresData,index)=>(
              
           
      <Card key={index} className="p-6">
      <CardContent className="space-y-4 pt-4">
       {featuresData.icon}
        <h3 className="text-xl font-semibold">{featuresData.title} </h3>
       <p className="text-grey-600">{featuresData.description} </p>
      </CardContent>
      </Card>
       ))}
      </div>
        </div> 
      </section>
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorksData.map((step,index)=>(
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">{step.icon}</div>
              <h1 className="text-xl font-semibold mb-4">{step.title}</h1>
              <p className="text-grey-600">{step.description}</p>
            </div>
      
    ))}
      </div>
        </div> 

        <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Every you need to manage your finances</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial,index)=>(
              
           
      <Card key={index} className="p-6">
      <CardContent className="pt-4">
        <div className="flex items-center mb-4">
          <Image
           src={testimonial.image}
           alt={testimonial.name}
           width={40}
           height={40}
           className="rounded-full"
          />
          <div className="ml-4">
            <div className="font-semibold">{testimonial.name}</div>
            <div className="text-sm text-grey-600">{testimonial.role}</div>
          </div>
         
        </div>
        <p className="text-grey-600">{testimonial.quote}</p>
      </CardContent>
      </Card>
       ))}
      </div>
        </div> 
      </section>
      </section>


 <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-12">Ready To Take Control Of Your Finances</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Jion With Thousands Of Users Who are already Managing their finances using smart spend</p>
        </div> 
        <div className="flex justify-center">
        <Link href="/dashboard">
        <Button  size="lg" className="bg-white text-blue-600 hover:bg-blue-50 animate-bounce justify-center mx-auto">
          Start Your Free Trial
        </Button>
        </Link>
        </div>
      </section>


    </div>
    );
}
