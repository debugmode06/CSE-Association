import { Code2, Users, Briefcase, Lightbulb, FileText, Megaphone } from 'lucide-react';

export const clubsData = [
  {
    id: 'technical-activities',
    title: 'Technical Activities',
    badge: 'TECHNICAL',
    description: 'Sync with the latest hackathons, seminars, and networking mixers happening across the department.',
    linkText: 'Explore Activities',
    icon: Code2,
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800',
    fullDescription: 'Our Technical Activities club brings together the brightest minds to participate in hackathons, algorithmic challenges, and hands-on coding workshops. Stay ahead of the curve by building robust technical skills.',
    calendarSummary: 'October 2024',
    calendarSubtitle: 'Fall Semester Focus',
    featuredEvents: [
      {
        id: 'tech-1',
        day: '15',
        month: 'Oct',
        tag: 'Hackathon',
        tagColor: 'cyan',
        title: 'Autumn Hack-A-Thon',
        desc: 'Building solutions for local sustainability challenges.',
        time: '48 Hours',
        location: 'Main Engineering Atrium'
      },
      {
        id: 'tech-2',
        day: '22',
        month: 'Oct',
        tag: 'Workshop',
        tagColor: 'orange',
        title: 'Advanced React Patterns',
        desc: 'Deep dive into modern web development with senior engineers.',
        time: '04:00 PM - 06:00 PM',
        location: 'Lab 402'
      }
    ],
    archives: [
      {
        id: 'tech-a1',
        date: 'September 12, 2024',
        title: 'Summer Code Camp Highlights',
        desc: 'A recap of the intensive 2-week development camp for freshmen.',
        badge: 'Recording',
        badgeColor: 'blue',
        img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800'
      },
      {
        id: 'tech-a2',
        date: 'March 05, 2024',
        title: 'Introduction to Web3',
        desc: 'Guest speakers from Ethereum Foundation explaining smart contracts.',
        badge: 'Slides',
        badgeColor: 'cyan',
        img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800'
      },
      {
        id: 'tech-a3',
        date: 'January 20, 2024',
        title: 'Winter AI Build-a-thon',
        desc: 'Gallery from our 48-hour AI application building contest.',
        badge: 'Gallery',
        badgeColor: 'orange',
        img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800'
      }
    ]
  },
  {
    id: 'events-outreach',
    title: 'Events and Outreach',
    badge: 'COMMUNITY',
    description: 'Organizing flagship events, managing outreach programs, and building a strong student community.',
    linkText: 'View Events',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800',
    fullDescription: 'The heart of our association. We orchestrate the large-scale mixers, alumni connections, and community outreach events that bind our department together.',
    calendarSummary: 'November 2024',
    calendarSubtitle: 'Community Month',
    featuredEvents: [
      {
        id: 'outreach-1',
        day: '05',
        month: 'Nov',
        tag: 'Social',
        tagColor: 'cyan',
        title: 'Annual Thanksgiving Mixer',
        desc: 'Join 200+ students and alumni for an evening of networking.',
        time: '06:00 PM - 09:00 PM',
        location: 'Student Union Hall'
      },
      {
        id: 'outreach-2',
        day: '12',
        month: 'Nov',
        tag: 'Volunteering',
        tagColor: 'orange',
        title: 'High School Code-Day',
        desc: 'Mentoring local high school students in introductory Python.',
        time: '09:00 AM - 03:00 PM',
        location: 'Off-Campus (City High)'
      }
    ],
    archives: [
      {
        id: 'outreach-a1',
        date: 'August 05, 2024',
        title: 'Welcome Week Festival',
        desc: 'Gallery from our massive orientation week celebration.',
        badge: 'Gallery',
        badgeColor: 'cyan',
        img: 'https://images.unsplash.com/photo-1475669698648-2f144fcaaeb1?auto=format&fit=crop&q=80&w=800'
      },
      {
        id: 'outreach-a2',
        date: 'July 15, 2024',
        title: 'Alumni Tech Panel',
        desc: 'Insights and Q&A with recent graduates working in FAANG.',
        badge: 'Recording',
        badgeColor: 'blue',
        img: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=800'
      },
      {
        id: 'outreach-a3',
        date: 'June 20, 2024',
        title: 'End of Year Gala',
        desc: 'Celebrating student achievements and club awards.',
        badge: 'Photos',
        badgeColor: 'orange',
        img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800'
      },
      {
        id: 'outreach-a4',
        date: 'May 10, 2024',
        title: 'Spring Charity Drive',
        desc: 'Our successful fundraising campaign for local STEM education.',
        badge: 'Slides',
        badgeColor: 'indigo',
        img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800'
      }
    ]
  },
  {
    id: 'professional-development',
    title: 'Professional Development',
    badge: 'CAREER',
    description: 'Sharpening skills through resume building, interview prep, and industry networking sessions.',
    linkText: 'See Opportunities',
    icon: Briefcase,
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=800',
    fullDescription: 'Your bridge to the industry. We provide the tools, reviews, and connections necessary to land top-tier internships and full-time roles.',
    calendarSummary: 'October 2024',
    calendarSubtitle: 'Recruitment Season',
    featuredEvents: [
      {
        id: 'pd-1',
        day: '18',
        month: 'Oct',
        tag: 'Seminar',
        tagColor: 'cyan',
        title: 'Big Tech Resume Review',
        desc: '1-on-1 resume tear-downs with engineers from Google and Microsoft.',
        time: '01:00 PM - 05:00 PM',
        location: 'Career Center'
      }
    ],
    archives: [
      {
        id: 'pd-a1',
        date: 'April 10, 2024',
        title: 'Mock Interview Marathon',
        desc: 'Students practiced behavioral and technical interviews with alumni.',
        badge: 'Photos',
        badgeColor: 'cyan',
        img: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=800'
      },
      {
        id: 'pd-a2',
        date: 'February 15, 2024',
        title: 'Salary Negotiation 101',
        desc: 'Learn how to advocate for your worth in your first job.',
        badge: 'Recording',
        badgeColor: 'indigo',
        img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800'
      },
      {
        id: 'pd-a3',
        date: 'November 05, 2023',
        title: 'LinkedIn Profile Makeover',
        desc: 'Step-by-step guide to building a recruiter-ready profile.',
        badge: 'Slides',
        badgeColor: 'blue',
        img: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800'
      }
    ]
  },
  {
    id: 'entrepreneurship-club',
    title: 'Entrepreneurship and Club',
    badge: 'INNOVATION',
    description: 'Incubating startup ideas, practicing business strategy, and learning how to build successful products.',
    linkText: 'Join the Hub',
    icon: Lightbulb,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    fullDescription: 'For the builders and visionaries. Transform your side projects into viable startups through pitch competitions, mentorship, and seed funding insights.',
    calendarSummary: 'December 2024',
    calendarSubtitle: 'Pitch Quarter',
    featuredEvents: [
      {
        id: 'ent-1',
        day: '01',
        month: 'Dec',
        tag: 'Competition',
        tagColor: 'cyan',
        title: 'Winter Pitch Fest',
        desc: 'Pitch your MVP to a panel of local angel investors.',
        time: '05:00 PM - 08:00 PM',
        location: 'Innovation Hub'
      }
    ],
    archives: [
      {
        id: 'ent-a1',
        date: 'October 12, 2023',
        title: 'Fall Pitch Fest',
        desc: 'Students pitched their MVP to local angel investors.',
        badge: 'Recording',
        badgeColor: 'orange',
        img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800'
      },
      {
        id: 'ent-a2',
        date: 'September 01, 2023',
        title: 'Startup Ideation Workshop',
        desc: 'Brainstorming frameworks to discover viable business ideas.',
        badge: 'Slides',
        badgeColor: 'cyan',
        img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800'
      }
    ]
  },
  {
    id: 'administrative-finance',
    title: 'Administrative & Finance',
    badge: 'OPERATIONS',
    description: 'Managing association resources, budgeting, scheduling, and logistical operations.',
    linkText: 'Learn More',
    icon: FileText,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
    fullDescription: 'The backbone of our association. Learn organizational leadership, budget management, and operational strategy by running a large-scale student organization.',
    calendarSummary: 'Ongoing',
    calendarSubtitle: 'Operations',
    featuredEvents: [
      {
        id: 'admin-1',
        day: '30',
        month: 'Oct',
        tag: 'Meeting',
        tagColor: 'cyan',
        title: 'Q3 Budget Review',
        desc: 'Open meeting for all members to review association financials.',
        time: '07:00 PM - 08:00 PM',
        location: 'Room 201'
      }
    ],
    archives: [
      {
        id: 'admin-a1',
        date: 'August 20, 2023',
        title: 'Annual Budget Assembly',
        desc: 'Reviewing the annual financial distribution for the association.',
        badge: 'Slides',
        badgeColor: 'blue',
        img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800'
      },
      {
        id: 'admin-a2',
        date: 'June 10, 2023',
        title: 'Leadership Transition',
        desc: 'Official handover ceremony to the new executive board.',
        badge: 'Gallery',
        badgeColor: 'cyan',
        img: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800'
      }
    ]
  },
  {
    id: 'media-communications',
    title: 'Media & Communications',
    badge: 'MEDIA',
    description: 'Handling social media presence, content creation, photography, and public relations.',
    linkText: 'View Gallery',
    icon: Megaphone,
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800',
    fullDescription: 'The voice of our community. Develop skills in digital marketing, graphic design, and brand management while documenting our greatest moments.',
    calendarSummary: 'Weekly',
    calendarSubtitle: 'Content Sprints',
    featuredEvents: [
      {
        id: 'media-1',
        day: '10',
        month: 'Nov',
        tag: 'Workshop',
        tagColor: 'cyan',
        title: 'Figma for Beginners',
        desc: 'Learn how to design stunning UI/UX and promotional graphics.',
        time: '04:00 PM - 05:30 PM',
        location: 'Design Lab'
      }
    ],
    archives: [
      {
        id: 'media-a1',
        date: 'December 05, 2023',
        title: 'Content Creator Summit',
        desc: 'Workshops on video editing and social media algorithms.',
        badge: 'Recording',
        badgeColor: 'indigo',
        img: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800'
      },
      {
        id: 'media-a2',
        date: 'October 15, 2023',
        title: 'Photography Walk',
        desc: 'Campus photography tour capturing student life.',
        badge: 'Photos',
        badgeColor: 'orange',
        img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800'
      },
      {
        id: 'media-a3',
        date: 'September 22, 2023',
        title: 'Brand Identity Design',
        desc: 'Redesigning the association logo and visual guidelines.',
        badge: 'Slides',
        badgeColor: 'blue',
        img: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=800'
      }
    ]
  }
];
