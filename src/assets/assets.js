import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about.jpg'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'
import heroo from './hero.png'
import logoo from './logo.png'
import hair from './services_icon/hair.png'
import styles from './services_icon/hair-styling.png'
import bath from './services_icon/bath.png'
import wax from './services_icon/wax.png'
import facial from './services_icon/facial-massage.png'
import pack from './services_icon/bath-towel.png'
import manicure from './services_icon/manicure.png'
import makeup from './services_icon/makeover.png'
import massage from './services_icon/body-massage.png'
import add from './services_icon/add.png'
import account from './spa-account.png'
import contact from './contact.jpg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo,
    heroo,
    logoo,
    hair,
    styles,
    bath,
    wax,
    facial,
    makeup,
    manicure,
    pack,
    massage,
    add,
    account,
    contact
}

export const specialityData = [
    {
        speciality: 'Hair treatment',
        image: hair
    },
    {
        speciality: 'Hairstyles',
        image: styles
    },
    {
        speciality: 'Moroccan bath',
        image: bath
    },
    {
        speciality: 'Facial',
        image: facial
    },
    {
        speciality: 'Waxing',
        image: wax
    },
    {
        speciality: 'Massage',
        image: massage
    },
    {
        speciality: 'Manicure & Pedicure',
        image: manicure
    },
    {
      speciality: 'Additional Services',
      image: add
    },
    {
       speciality: 'Makeup',
       image: makeup
    },
    {
      speciality: 'Packages',
      image: pack
   },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Richard James',
        image: doc1,
        speciality: 'Hair treatment',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc2',
        name: 'Hairstyles',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Sarah Patel',
        image: doc3,
        speciality: 'Moroccan bath',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Christopher Lee',
        image: doc4,
        speciality: 'Facial',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Jennifer Garcia',
        image: doc5,
        speciality: 'Waxing',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Andrew Williams',
        image: doc6,
        speciality: 'Massage',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Christopher Davis',
        image: doc7,
        speciality: 'Manicure & Pedicure',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Timothy White',
        image: doc8,
        speciality: 'Additional Services',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Ava Mitchell',
        image: doc9,
        speciality: 'Makeup',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Jeffrey King',
        image: doc10,
        speciality: 'Packages',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Zoe Kelly',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Patrick Harris',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Chloe Evans',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Ryan Martinez',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Amelia Hill',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
]


export const salonData = [
    {
      category: "Hair Treatments",
      services: [
        { name: "Protein Treatment", price: "Starting from 60 OMR" },
        { name: "Keratin Treatment", price: "Starting from 55 OMR" },
        { name: "Caviar Treatment", price: "Starting from 35 OMR" },
        { name: "Filler Treatment", price: "Starting from 25 OMR" },
        { name: "Crystal Treatment", price: "Starting from 40 OMR" },
        { name: "Nashi Treatment", price: "Starting from 30 OMR" },
        { name: "Mix Shake Treatment", price: "Starting from 25 OMR" },
        { name: "Kevin Murphy Treatment", price: "Starting from 30 OMR" },
        { name: "Dandruff Treatment", price: "25 OMR" },
      ],
    },
    {
      category: "Hairstyles",
      services: [
        { name: "Half-Hair Roll (Short Hair)", price: "30 OMR" },
        { name: "Full-Hair Roll", price: "40 OMR" },
        { name: "Closed Hairstyle", price: "Starting from 35 OMR" },
      ],
    },
    {
      category: "Moroccan Bath",
      services: [
        { name: "Regular Moroccan Bath", price: "25 OMR" },
        { name: "Blue Nila Bath", price: "30 OMR" },
        { name: "Special Bath", price: "50 OMR" },
        { name: "Postpartum Bath", price: "40 OMR" },
        { name: "Bridal Bath", price: "50 OMR" },
        { name: "Pigmentation Treatment Bath", price: "50 OMR" },
        { name: "Russian Bath", price: "35 OMR" },
      ],
    },
    {
      category: "Facials",
      services: [
        { name: "Whitening Facial", price: "25 OMR" },
        { name: "Deep Cleansing Facial", price: "27 OMR" },
        { name: "Glow Facial", price: "28 OMR" },
        { name: "Special Facial", price: "33 OMR" },
        { name: "Hydro Facial", price: "35 OMR" },
        { name: "Thalgo Facial", price: "35 OMR" },
        { name: "Hand Whitening Facial", price: "30 OMR" },
        { name: "Feet Whitening Facial", price: "30 OMR" },
        { name: "Hand Facial", price: "25 OMR" },
        { name: "Feet Facial", price: "25 OMR" },
        { name: "Underarm Facial", price: "18 OMR" },
        { name: "Back Facial", price: "28 OMR" },
      ],
    },
    {
      category: "Waxing",
      services: [
        { name: "Full-Body Wax", price: "35 OMR" },
        { name: "Full Arm Wax", price: "8 OMR" },
        { name: "Full Leg Wax", price: "12 OMR" },
        { name: "Half Arm Wax", price: "5 OMR" },
        { name: "Half Leg Wax", price: "7 OMR" },
        { name: "Underarm Wax", price: "4 OMR" },
        { name: "Bikini Wax", price: "8 OMR" },
      ],
    },
    {
      category: "Massage",
      services: [
        { name: "Full-Body Massage", price: "35 OMR" },
        { name: "Rolex Full-Body Massage", price: "38 OMR" },
        { name: "Herbal Massage", price: "40 OMR" },
        { name: "Sculpting Massage", price: "35 OMR" },
        { name: "Half-Hour Rolex Massage", price: "18 OMR" },
        { name: "Half-Hour Herbal Massage", price: "25 OMR" },
      ],
    },
    {
      category: "Manicure & Pedicure",
      services: [
        { name: "Manicure", price: "9 OMR" },
        { name: "Pedicure", price: "12 OMR" },
        { name: "Manicure & Pedicure", price: "18 OMR" },
        { name: "Special Manicure & Pedicure", price: "25 OMR" },
        { name: "Exclusive Manicure & Pedicure", price: "33 OMR" },
        { name: "Manicure + Gel Color", price: "18 OMR" },
        { name: "Manicure, Pedicure & Gel Color", price: "35 OMR" },
        { name: "Regular Nail Color (Hands)", price: "5 OMR" },
        { name: "Regular Nail Color (Hands & Feet)", price: "8 OMR" },
        { name: "Gel Nail Color (Hands)", price: "10 OMR" },
        { name: "Gel Nail Color (Hands & Feet)", price: "18 OMR" },
        { name: "Gel Art Design", price: "3 OMR" },
        { name: "Regular Nail Extension", price: "15 OMR" },
        { name: "Gel Removal (Hands)", price: "8 OMR" },
        { name: "Acrylic Removal", price: "15 OMR" },
      ],
    },
    {
      category: "Additional Services",
      services: [
        { name: "Eyebrow Bleaching", price: "3 OMR" },
        { name: "Eyebrow Threading", price: "5 OMR" },
        { name: "Face Threading", price: "7 OMR" },
        { name: "Hair Trim (Ends)", price: "4 OMR" },
        { name: "Any Haircut Style", price: "15 OMR" },
        { name: "Hair Wash", price: "Starting from 3–8 OMR" },
        { name: "Short Hair Wash + Blow Dry", price: "Starting from 12 OMR" },
        { name: "Regular Short Hair Blow Dry", price: "Starting from 15 OMR" },
        { name: "Roller Blow Dry", price: "Starting from 15 OMR" },
      ],
    },
    {
      category: "Makeup",
      services: [
        { name: "Regular Makeup", price: "25 OMR" },
        { name: "Regular Makeup with Lenses", price: "35 OMR" },
        { name: "Special Makeup", price: "45 OMR" },
        { name: "Special Makeup with Lenses", price: "55 OMR" },
        { name: "Bridal Makeup", price: "70 OMR" },
        { name: "Bridal Makeup with Lenses", price: "85 OMR" },
      ],
    },
    {
      category: "Packages",
      services: [
        { name: "4 Full-Body Massage Sessions", price: "110 OMR" },
        { name: "Rolex Massage Sessions", price: "120 OMR" },
        { name: "Herbal Massage Sessions", price: "135 OMR" },
        { name: "Moroccan Bath Sessions", price: "80 OMR" },
        { name: "Blue Nila Bath Sessions", price: "90 OMR" },
        { name: "Special Bath Sessions", price: "140 OMR" },
        { name: "Bridal Bath Sessions", price: "145 OMR" },
        { name: "Russian Bath Sessions", price: "120 OMR" },
        { name: "Pigmentation Bath Sessions", price: "145 OMR" },
        { name: "Caviar Treatment Sessions", price: "90 OMR" },
        { name: "Filler Treatment Sessions", price: "70 OMR" },
        { name: "Crystal Treatment Sessions", price: "100 OMR" },
        { name: "Mix Shake Treatment Sessions", price: "70 OMR" },
        { name: "Dandruff Treatment Sessions", price: "80 OMR" },
      ],
    },
  ]

  export const staffServices = [
  {
    _id: 'staff1',
    name: 'aa',
    category: 'Hair Treatments',
    services: [
      { name: 'Protein Treatment', price: 'Starting from 60 OMR' },
      { name: 'Keratin Treatment', price: 'Starting from 55 OMR' },
      { name: 'Caviar Treatment', price: 'Starting from 35 OMR' },
      { name: 'Filler Treatment', price: 'Starting from 25 OMR' },
      { name: 'Crystal Treatment', price: 'Starting from 40 OMR' },
      { name: 'Nashi Treatment', price: 'Starting from 30 OMR' },
      { name: 'Mix Shake Treatment', price: 'Starting from 25 OMR' },
      { name: 'Kevin Murphy Treatment', price: 'Starting from 30 OMR' },
      { name: 'Dandruff Treatment', price: '25 OMR' },
    ],
  },
  {
    _id: 'staff2',
    name: 'bb',
    category: 'Hairstyles',
    services: [
      { name: 'Half-Hair Roll (Short Hair)', price: '30 OMR' },
      { name: 'Full-Hair Roll', price: '40 OMR' },
      { name: 'Closed Hairstyle', price: 'Starting from 35 OMR' },
    ],
  },
  {
    _id: 'staff3',
    name: 'cc',
    category: 'Moroccan Bath',
    services: [
      { name: 'Regular Moroccan Bath', price: '25 OMR' },
      { name: 'Blue Nila Bath', price: '30 OMR' },
      { name: 'Special Bath', price: '50 OMR' },
      { name: 'Postpartum Bath', price: '40 OMR' },
      { name: 'Bridal Bath', price: '50 OMR' },
      { name: 'Pigmentation Treatment Bath', price: '50 OMR' },
      { name: 'Russian Bath', price: '35 OMR' },
    ],
  },
  {
    _id: 'staff4',
    name: 'dd',
    category: 'Facials',
    services: [
      { name: 'Whitening Facial', price: '25 OMR' },
      { name: 'Deep Cleansing Facial', price: '27 OMR' },
      { name: 'Glow Facial', price: '28 OMR' },
      { name: 'Special Facial', price: '33 OMR' },
      { name: 'Hydro Facial', price: '35 OMR' },
      { name: 'Thalgo Facial', price: '35 OMR' },
      { name: 'Hand Whitening Facial', price: '30 OMR' },
      { name: 'Feet Whitening Facial', price: '30 OMR' },
      { name: 'Hand Facial', price: '25 OMR' },
      { name: 'Feet Facial', price: '25 OMR' },
      { name: 'Underarm Facial', price: '18 OMR' },
      { name: 'Back Facial', price: '28 OMR' },
    ],
  },
  {
    _id: 'staff5',
    name: 'ee',
    category: 'Waxing',
    services: [
      { name: 'Full-Body Wax', price: '35 OMR' },
      { name: 'Full Arm Wax', price: '8 OMR' },
      { name: 'Full Leg Wax', price: '12 OMR' },
      { name: 'Half Arm Wax', price: '5 OMR' },
      { name: 'Half Leg Wax', price: '7 OMR' },
      { name: 'Underarm Wax', price: '4 OMR' },
      { name: 'Bikini Wax', price: '8 OMR' },
    ],
  },
  {
    _id: 'staff6',
    name: 'ff',
    category: 'Massage',
    services: [
      { name: 'Full-Body Massage', price: '35 OMR' },
      { name: 'Rolex Full-Body Massage', price: '38 OMR' },
      { name: 'Herbal Massage', price: '40 OMR' },
      { name: 'Sculpting Massage', price: '35 OMR' },
      { name: 'Half-Hour Rolex Massage', price: '18 OMR' },
      { name: 'Half-Hour Herbal Massage', price: '25 OMR' },
    ],
  },
  {
    _id: 'staff7',
    name: 'gg',
    category: 'Manicure & Pedicure',
    services: [
      { name: 'Manicure', price: '9 OMR' },
      { name: 'Pedicure', price: '12 OMR' },
      { name: 'Manicure & Pedicure', price: '18 OMR' },
      { name: 'Special Manicure & Pedicure', price: '25 OMR' },
      { name: 'Exclusive Manicure & Pedicure', price: '33 OMR' },
      { name: 'Manicure + Gel Color', price: '18 OMR' },
      { name: 'Manicure, Pedicure & Gel Color', price: '35 OMR' },
      { name: 'Regular Nail Color (Hands)', price: '5 OMR' },
      { name: 'Regular Nail Color (Hands & Feet)', price: '8 OMR' },
      { name: 'Gel Nail Color (Hands)', price: '10 OMR' },
      { name: 'Gel Nail Color (Hands & Feet)', price: '18 OMR' },
      { name: 'Gel Art Design', price: '3 OMR' },
      { name: 'Regular Nail Extension', price: '15 OMR' },
      { name: 'Gel Removal (Hands)', price: '8 OMR' },
      { name: 'Acrylic Removal', price: '15 OMR' },
    ],
  },
  {
    _id: 'staff8',
    name: 'hh',
    category: 'Additional Services',
    services: [
      { name: 'Eyebrow Bleaching', price: '3 OMR' },
      { name: 'Eyebrow Threading', price: '5 OMR' },
      { name: 'Face Threading', price: '7 OMR' },
      { name: 'Hair Trim (Ends)', price: '4 OMR' },
      { name: 'Any Haircut Style', price: '15 OMR' },
      { name: 'Hair Wash', price: 'Starting from 3–8 OMR' },
      { name: 'Short Hair Wash + Blow Dry', price: 'Starting from 12 OMR' },
      { name: 'Regular Short Hair Blow Dry', price: 'Starting from 15 OMR' },
      { name: 'Roller Blow Dry', price: 'Starting from 15 OMR' },
    ],
  },
  {
    _id: 'staff9',
    name: 'ii',
    category: 'Makeup',
    services: [
      { name: 'Regular Makeup', price: '25 OMR' },
      { name: 'Regular Makeup with Lenses', price: '35 OMR' },
      { name: 'Special Makeup', price: '45 OMR' },
      { name: 'Special Makeup with Lenses', price: '55 OMR' },
      { name: 'Bridal Makeup', price: '70 OMR' },
      { name: 'Bridal Makeup with Lenses', price: '85 OMR' },
    ],
  },
  {
    _id: 'staff10',
    name: 'jj',
    category: 'Packages',
    services: [
      { name: '4 Full-Body Massage Sessions', price: '110 OMR' },
      { name: 'Rolex Massage Sessions', price: '120 OMR' },
      { name: 'Herbal Massage Sessions', price: '135 OMR' },
      { name: 'Moroccan Bath Sessions', price: '80 OMR' },
      { name: 'Blue Nila Bath Sessions', price: '90 OMR' },
      { name: 'Special Bath Sessions', price: '140 OMR' },
      { name: 'Bridal Bath Sessions', price: '145 OMR' },
    ],
  },
];
