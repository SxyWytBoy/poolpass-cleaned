import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import PoolCard from '@/components/PoolCard';

// Mock data for featured pools (Luxury Options)
const featuredPools = [
  {
    id: "1",
    name: "Luxury Indoor Pool & Spa",
    location: "Kensington, London",
    price: 75,
    rating: 4.9,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    indoorOutdoor: "indoor" as const,
    amenities: ["Heated", "Loungers", "Towels Provided", "Jacuzzi", "Private Changing Rooms"]
  },
  {
    id: "2",
    name: "Rooftop Infinity Pool",
    location: "Manchester City Centre",
    price: 95,
    rating: 4.7,
    reviews: 85,
    image: "https://images.unsplash.com/photo-1477120292453-dbba2d987c24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    indoorOutdoor: "outdoor" as const,
    amenities: ["Heated", "City View", "Bar Service", "Loungers", "Sunset Views"]
  },
  {
    id: "3",
    name: "Country House Pool & Gardens",
    location: "Cotswolds",
    price: 68,
    rating: 4.8,
    reviews: 63,
    image: "https://images.unsplash.com/photo-1551123847-4041291bec0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    indoorOutdoor: "both" as const,
    amenities: ["Garden Access", "Changing Rooms", "Food Available", "Jacuzzi", "Fire Pit"]
  },
  {
    id: "4",
    name: "Modern Boutique Hotel Pool",
    location: "Bristol",
    price: 72,
    rating: 4.6,
    reviews: 50,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
    indoorOutdoor: "indoor" as const,
    amenities: ["Heated", "Mood Lighting", "Cocktail Bar", "Towels", "Spa Access"]
  },
  {
    id: "5",
    name: "Secluded Forest Retreat Pool",
    location: "Lake District",
    price: 88,
    rating: 4.9,
    reviews: 91,
    image: "https://images.unsplash.com/photo-1591462605714-9c57e354d8b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    indoorOutdoor: "outdoor" as const,
    amenities: ["Nature Views", "Loungers", "Hot Tub", "Outdoor Shower", "Privacy"]
  },
  {
    id: "6",
    name: "Penthouse Pool & Lounge",
    location: "Central Birmingham",
    price: 82,
    rating: 4.5,
    reviews: 74,
    image: "https://images.unsplash.com/photo-1582719478127-7c6fbcf12d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    indoorOutdoor: "outdoor" as const,
    amenities: ["Rooftop Access", "Fire Pit", "Lounge Seating", "Towels Provided", "Ambient Music"]
  },
  {
    id: "7",
    name: "Historic Manor House Pool",
    location: "Surrey",
    price: 79,
    rating: 4.8,
    reviews: 68,
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    indoorOutdoor: "both" as const,
    amenities: ["Heated", "Stone Architecture", "Jacuzzi", "Changing Cabana", "Tea Service"]
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section with additional top margin class */}
      <div className="mt-10 md:mt-12">
        <HeroSection />
      </div>
      
      {/* Featured Pools Section */}
      <section className="bg-white section-padding">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Featured Pools</h2>
            <Link to="/pools" className="text-pool-primary font-medium hover:underline">
              View all pools
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPools.map((pool) => (
              <PoolCard
                key={pool.id}
                id={pool.id}
                name={pool.name}
                location={pool.location}
                price={pool.price}
                rating={pool.rating}
                reviews={pool.reviews}
                image={pool.image}
                indoorOutdoor={pool.indoorOutdoor}
                amenities={pool.amenities}
              />
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Link to="/pools">
              <Button className="bg-pool-primary hover:bg-pool-secondary text-white">
                Explore More Pools
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <HowItWorks />
      
      {/* Host CTA Section */}
      <section className="bg-white section-padding">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-pool-dark to-pool-primary rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Text Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                  Own a Pool? Become a Host
                </h2>
                <p className="text-white/90 mb-6 text-lg">
                  Turn your private or hotel pool into an income stream. Join PoolPass hosts across the UK earning extra revenue from their pool facilities.
                </p>
                <div>
                  <Link to="/host">
                    <Button className="bg-white text-pool-primary hover:bg-gray-100">
                      Learn More About Hosting
                    </Button>
                  </Link>
                </div>
              </div>
              
              {/* Image Side */}
              <div className="relative h-64 md:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1615397349754-cfa2066a298e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                  alt="Swimming Pool" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
