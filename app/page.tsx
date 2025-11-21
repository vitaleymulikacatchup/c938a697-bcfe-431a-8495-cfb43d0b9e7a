"use client"

import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import AboutFeature from '@/components/sections/about/AboutFeature';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import MetricCardThree from '@/components/sections/metric/MetricCardThree';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, BookOpen, Bot, Code, Gamepad2, Globe, Heart, Play, Star, Users, Zap } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "About", id: "about" },
            { name: "Courses", id: "feature" },
            { name: "Pricing", id: "pricing" },
            { name: "Reviews", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Little IT-shnik"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Discover the World of Programming"
          description="Join Little IT-shnik and start your coding journey today. Learn programming, web development, and robotics in a fun and interactive environment."
          tag="IT Education"
          tagIcon={Code}
          buttons={[
            { text: "Start Learning", href: "pricing" },
            { text: "View Courses", href: "feature" }
          ]}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763722092635-07skhva7.jpg",
              imageAlt: "Students learning programming in modern classroom"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763722093772-rk5ynoma.jpg",
              imageAlt: "Children coding with laptops"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763722094758-gladezo1.jpg",
              imageAlt: "IT school computer lab with young students"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutFeature
          title="We believe in nurturing young minds through technology education. Our mission is to provide comprehensive IT education that prepares students for the digital future."
          features={[
            {
              icon: Code,
              title: "Programming Fundamentals",
              description: "Learn the basics of coding with popular programming languages like Python, JavaScript, and Scratch in a beginner-friendly environment."
            },
            {
              icon: Globe,
              title: "Web Development",
              description: "Create amazing websites and web applications using HTML, CSS, and modern web technologies with hands-on projects."
            },
            {
              icon: Bot,
              title: "Robotics & AI",
              description: "Explore the exciting world of robotics and artificial intelligence through interactive workshops and real robot programming."
            },
            {
              icon: Gamepad2,
              title: "Game Development",
              description: "Design and build your own games using popular game engines and programming frameworks, bringing your creative ideas to life."
            }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="Our Courses"
          description="Explore our comprehensive range of IT courses designed for young learners"
          tag="Courses"
          tagIcon={BookOpen}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          features={[
            {
              title: "Programming Basics",
              description: "Learn fundamental programming concepts using Python and Scratch. Perfect for beginners aged 8-16.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763722095861-d31gx0xo.jpg",
              imageAlt: "Programming code on computer screen",
              button: { text: "Learn More", href: "pricing" }
            },
            {
              title: "Web Development",
              description: "Create stunning websites with HTML, CSS, and JavaScript. Build real projects and deploy them online.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763722096761-bj4z45ht.jpg",
              imageAlt: "Web development coding HTML CSS",
              button: { text: "Start Building", href: "pricing" }
            },
            {
              title: "Robotics & STEM",
              description: "Hands-on robotics programming and STEM education. Work with real robots and sensors.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763722097882-i86k2kn6.jpg",
              imageAlt: "Kids robotics programming STEM education",
              button: { text: "Explore Robotics", href: "pricing" }
            },
            {
              title: "Game Development",
              description: "Create your own games using Unity and other game engines. Learn game design principles.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763722098947-rb5hbcq4.png",
              imageAlt: "Game development programming unity",
              button: { text: "Make Games", href: "pricing" }
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Choose Your Learning Path"
          description="Select the perfect program for your child's coding journey"
          tag="Pricing"
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "basic",
              badge: "Starter",
              badgeIcon: Play,
              price: "$99/month",
              subtitle: "Perfect for beginners",
              features: [
                "4 hours of classes per week",
                "Programming basics with Scratch",
                "Small class sizes (max 8 students)",
                "Online learning materials",
                "Certificate of completion"
              ]
            },
            {
              id: "pro",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "$149/month",
              subtitle: "Comprehensive learning",
              features: [
                "6 hours of classes per week",
                "Python and web development",
                "Project-based learning",
                "1-on-1 mentoring sessions",
                "Access to robotics lab",
                "Portfolio development"
              ]
            },
            {
              id: "advanced",
              badge: "Advanced",
              badgeIcon: Zap,
              price: "$199/month",
              subtitle: "For serious young coders",
              features: [
                "8 hours of classes per week",
                "Advanced programming languages",
                "Game development with Unity",
                "AI and machine learning basics",
                "Internship opportunities",
                "Competition preparation"
              ]
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardThree
          title="Our Impact"
          description="See how Little IT-shnik is making a difference in IT education"
          tag="Statistics"
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            {
              id: "1",
              icon: Users,
              title: "Students Taught",
              value: "500+"
            },
            {
              id: "2",
              icon: Award,
              title: "Certificates Issued",
              value: "300+"
            },
            {
              id: "3",
              icon: Code,
              title: "Projects Created",
              value: "1000+"
            },
            {
              id: "4",
              icon: Heart,
              title: "Satisfaction Rate",
              value: "98%"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Expert Instructors"
          description="Our passionate team of educators and developers"
          tag="Our Team"
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Anna K.",
              role: "Lead Programming Instructor",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763722100184-yo38wrwq.jpg",
              imageAlt: "Anna K. - Lead Programming Instructor"
            },
            {
              id: "2",
              name: "Michael S.",
              role: "Web Development Coach",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763722101108-ia0p6qqd.png",
              imageAlt: "Michael S. - Web Development Coach"
            },
            {
              id: "3",
              name: "Elena P.",
              role: "Robotics Specialist",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763722102333-zubblhhp.jpg",
              imageAlt: "Elena P. - Robotics Specialist"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="What Our Students Say"
          description="Hear from our amazing students and their parents"
          tag="Success Stories"
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Alex M.",
              role: "Age 12, Programming Student",
              testimonial: "Little IT-shnik made programming so fun and easy to understand! I created my first game and now I want to become a software developer.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763722103269-du47c1gz.jpg",
              imageAlt: "Alex M. - Programming Student"
            },
            {
              id: "2",
              name: "Sofia L.",
              role: "Age 14, Web Development Student",
              testimonial: "The instructors are amazing and really care about each student. I built my own website and learned so much about coding!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763722104121-hdk4dlm7.jpg",
              imageAlt: "Sofia L. - Web Development Student"
            },
            {
              id: "3",
              name: "David R.",
              role: "Age 13, Robotics Student",
              testimonial: "Working with robots is incredible! The hands-on approach helped me understand programming in a totally new way.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763722104946-2z9n085s.png",
              imageAlt: "David R. - Robotics Student"
            },
            {
              id: "4",
              name: "Emma T.",
              role: "Age 15, Advanced Student",
              testimonial: "Little IT-shnik prepared me for programming competitions and now I'm confident about pursuing computer science in university.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763722106122-d2ttv3kn.jpg",
              imageAlt: "Emma T. - Advanced Student"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Find answers to common questions about our IT education programs"
          tag="FAQ"
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What age groups do you teach?",
              content: "We welcome students aged 8-18. Our programs are designed with age-appropriate content and teaching methods to ensure effective learning for each group."
            },
            {
              id: "2",
              title: "Do students need prior programming experience?",
              content: "No prior experience is necessary! We start from the basics and gradually build up skills. Our instructors are experienced in teaching complete beginners."
            },
            {
              id: "3",
              title: "What programming languages do you teach?",
              content: "We teach a variety of languages including Scratch for beginners, Python, JavaScript, HTML/CSS, and introduce students to game development with Unity and C#."
            },
            {
              id: "4",
              title: "How small are your class sizes?",
              content: "We maintain small class sizes with a maximum of 8-10 students per instructor to ensure personalized attention and effective learning."
            },
            {
              id: "5",
              title: "Do you offer online classes?",
              content: "Yes, we offer both in-person and online classes. Our online platform provides interactive learning experiences with live instruction and hands-on projects."
            },
            {
              id: "6",
              title: "What equipment do students need?",
              content: "For online classes, students need a computer with internet access. For in-person classes, we provide all necessary equipment including computers, robotics kits, and learning materials."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Ready to Start Your Coding Journey?"
          description="Get in touch with us to learn more about our programs and enrollment process. We're here to help your child discover the exciting world of programming!"
          buttonText="Send Message"
          inputs={[
            { name: "parentName", type: "text", placeholder: "Parent/Guardian Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: true },
            { name: "studentName", type: "text", placeholder: "Student Name", required: true },
            { name: "studentAge", type: "number", placeholder: "Student Age", required: true }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your child's interests and any questions you have about our programs...",
            rows: 5,
            required: true
          }}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Little IT-shnik"
          copyrightText="© 2025 | Little IT-shnik"
          columns={[
            {
              title: "Courses",
              items: [
                { label: "Programming Basics", href: "feature" },
                { label: "Web Development", href: "feature" },
                { label: "Robotics", href: "feature" },
                { label: "Game Development", href: "feature" }
              ]
            },
            {
              title: "About",
              items: [
                { label: "Our Mission", href: "about" },
                { label: "Our Team", href: "team" },
                { label: "Success Stories", href: "testimonial" },
                { label: "FAQ", href: "faq" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Get in Touch", href: "contact" },
                { label: "Enrollment", href: "pricing" },
                { label: "Support", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </>
  );
}