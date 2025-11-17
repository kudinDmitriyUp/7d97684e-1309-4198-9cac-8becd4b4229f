"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Github, Linkedin, Mail, MessageCircle, Sparkles, TrendingUp, Trophy, Twitch, Twitter, Users, Youtube, Zap } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="medium"
      sizing="small"
      background="circleGradient"
      cardStyle="layered-gradient"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="layered"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="DeckMaster"
          button={{
            text: "Build Deck",
            href: "https://example.com"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Build Legendary Hearthstone Decks"
          description="Master the meta with our advanced deck builder, card database, and tournament-winning strategies"
          tag="Deck Builder Pro"
          tagIcon={Sparkles}
          buttons={[
            {
              text: "Start Building",
              href: "https://example.com"
            },
            {
              text: "Browse Decks",
              href: "decks"
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35IBXHDuVlkcBNeD17jI0bcqZ1z/uploaded-1763394158908-8hs0l2fs.jpg"
          imageAlt="Hearthstone deck builder interface"
          frameStyle="browser"
        />
      </div>
      
      <div id="about" data-section="about">
        <TagAbout
          tag="Why DeckMaster"
          description="We're passionate Hearthstone players who understand the intricacies of deck building. Our platform combines years of competitive experience with cutting-edge analytics to help you climb the ladder and dominate tournaments."
        />
      </div>
      
      <div id="features" data-section="features">
        <FeatureCardOne
          title="Powerful Deck Building Tools"
          description="Everything you need to create, optimize, and share winning Hearthstone decks"
          tag="Features"
          tagIcon={Zap}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          features={[
            {
              title: "Advanced Deck Builder",
              description: "Intuitive drag-and-drop interface with real-time mana curve analysis and synergy suggestions",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35IBXHDuVlkcBNeD17jI0bcqZ1z/uploaded-1763394159775-1kbvmgyj.jpg",
              imageAlt: "Deck builder interface"
            },
            {
              title: "Complete Card Database",
              description: "Searchable database with all Hearthstone cards, filters, and detailed statistics",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35IBXHDuVlkcBNeD17jI0bcqZ1z/uploaded-1763394160493-5j0cybq4.jpg",
              imageAlt: "Card database search"
            },
            {
              title: "Meta Analysis",
              description: "Track win rates, popular decks, and meta trends with comprehensive analytics",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35IBXHDuVlkcBNeD17jI0bcqZ1z/uploaded-1763394161047-77z1gqeg.jpg",
              imageAlt: "Meta statistics dashboard"
            },
            {
              title: "Tournament Ready",
              description: "Export decks for competitive play and discover pro player strategies",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35IBXHDuVlkcBNeD17jI0bcqZ1z/uploaded-1763394161789-u2ck7fls.jpg",
              imageAlt: "Tournament deck lists"
            }
          ]}
        />
      </div>
      
      <div id="decks" data-section="decks">
        <ProductCardOne
          title="Featured Deck Archetypes"
          description="Explore top-tier decks that dominate the current meta"
          tag="Top Decks"
          tagIcon={Trophy}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="scale-rotate"
          products={[
            {
              id: "aggro-deck",
              name: "Aggro Hunter",
              price: "85% WR",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35IBXHDuVlkcBNeD17jI0bcqZ1z/uploaded-1763394162468-58jzs2rp.jpg",
              imageAlt: "Aggro Hunter deck"
            },
            {
              id: "control-deck",
              name: "Control Warrior",
              price: "78% WR",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35IBXHDuVlkcBNeD17jI0bcqZ1z/uploaded-1763394163259-ex9pu8ba.jpg",
              imageAlt: "Control Warrior deck"
            },
            {
              id: "combo-deck",
              name: "Miracle Rogue",
              price: "82% WR",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35IBXHDuVlkcBNeD17jI0bcqZ1z/uploaded-1763394163911-bvmvpp6j.jpg",
              imageAlt: "Miracle Rogue deck"
            }
          ]}
        />
      </div>
      
      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Platform Statistics"
          description="Join thousands of players building winning decks"
          tag="Our Impact"
          tagIcon={TrendingUp}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="blur-reveal"
          metrics={[
            {
              id: "1",
              value: "250K+",
              description: "Active Deck Builders"
            },
            {
              id: "2",
              value: "1.5M",
              description: "Decks Created"
            },
            {
              id: "3",
              value: "95%",
              description: "Win Rate Improvement"
            },
            {
              id: "4",
              value: "50K+",
              description: "Tournament Wins"
            }
          ]}
        />
      </div>
      
      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet the DeckMaster Team"
          description="Legendary players and developers working together"
          tag="Our Team"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="opacity"
          members={[
            {
              id: "1",
              name: "Alex Chen",
              role: "Lead Designer",
              description: "Former Hearthstone World Champion with 8 years of competitive experience",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35IBXHDuVlkcBNeD17jI0bcqZ1z/uploaded-1763394164819-mpybc8xe.jpg",
              imageAlt: "Alex Chen portrait",
              socialLinks: [
                {
                  icon: Twitter,
                  url: "https://twitter.com"
                },
                {
                  icon: Twitch,
                  url: "https://twitch.tv"
                }
              ]
            },
            {
              id: "2",
              name: "Sarah Martinez",
              role: "Full-Stack Developer",
              description: "Backend architect specializing in gaming platforms and real-time analytics",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35IBXHDuVlkcBNeD17jI0bcqZ1z/uploaded-1763394165617-gqvvgkks.jpg",
              imageAlt: "Sarah Martinez portrait",
              socialLinks: [
                {
                  icon: Github,
                  url: "https://github.com"
                },
                {
                  icon: Linkedin,
                  url: "https://linkedin.com"
                }
              ]
            },
            {
              id: "3",
              name: "Mike Thompson",
              role: "Data Analyst",
              description: "Meta specialist tracking win rates and deck performance across all ranks",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35IBXHDuVlkcBNeD17jI0bcqZ1z/uploaded-1763394166160-tprc1q4m.jpg",
              imageAlt: "Mike Thompson portrait",
              socialLinks: [
                {
                  icon: Twitter,
                  url: "https://twitter.com"
                }
              ]
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Newsletter"
          title="Stay Updated with Meta Changes"
          description="Get weekly deck recommendations, meta reports, and exclusive strategies delivered to your inbox"
          tagIcon={Mail}
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="Join 50,000+ players receiving our weekly meta updates. Unsubscribe anytime."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35IBXHDuVlkcBNeD17jI0bcqZ1z/uploaded-1763394158908-8hs0l2fs.jpg"
          imageAlt="Hearthstone cards"
          mediaPosition="right"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="DeckMaster"
          copyrightText="© 2025 DeckMaster. All rights reserved."
          columns={[
            {
              title: "Platform",
              items: [
                {
                  label: "Deck Builder",
                  href: "builder"
                },
                {
                  label: "Card Database",
                  href: "cards"
                },
                {
                  label: "Meta Tracker",
                  href: "meta"
                }
              ]
            },
            {
              title: "Community",
              items: [
                {
                  label: "Discord",
                  href: "https://discord.gg"
                },
                {
                  label: "Reddit",
                  href: "https://reddit.com"
                },
                {
                  label: "Tournaments",
                  href: "tournaments"
                }
              ]
            },
            {
              title: "Support",
              items: [
                {
                  label: "Help Center",
                  href: "help"
                },
                {
                  label: "Contact",
                  href: "contact"
                },
                {
                  label: "Bug Reports",
                  href: "bugs"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Twitter,
              href: "https://twitter.com/deckmaster",
              ariaLabel: "Follow us on Twitter"
            },
            {
              icon: Youtube,
              href: "https://youtube.com/deckmaster",
              ariaLabel: "Subscribe to our YouTube channel"
            },
            {
              icon: MessageCircle,
              href: "https://discord.gg/deckmaster",
              ariaLabel: "Join our Discord community"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}