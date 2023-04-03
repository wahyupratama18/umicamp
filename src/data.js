import { ref } from 'vue'

const infos = [{
    image: 'logo.png',
    name: 'Background',
    contents: [
        'UM iCamp is part of the continued efforts of Universitas Negeri Malang to enhance global education. The program was initiated to provide overseas college students with hands-on opportunities to learn Indonesian language and experience the cultural and academic life in Indonesia.',
        'This intensive program consists of classroom sessions, socio-cultural sessions, and field trips to cultural and historical venues. Through the sessions, international students will have opportunities to better understand the dynamic aspects of Indonesian society in the past, present, and future.'
    ]
}, {
    image: 'bromo.jpg',
    name: 'Scholarship Coverage',
    contents: [
        'Indonesia begins to be the referral college to continue study in higher education in bachelor, master\'s, and doctorate degrees. As one of the pioneers of ex-teacher training college in Indonesia, Universitas Negeri Malang continues to improve its quality, both in academic and non-academic. By adding elements of language and culture in every line of education, Universitas Negeri Malang strives to realize its goal to be one of the referral colleges nationally and internationally. This can be seen from the increasing number of international students each year.',
        'With the aim to expand its wings in International level, Universitas Negeri Malang through the Office of International Affairs offers a variety of degree and non-degree programs. One of the non-degree internationalization programs that aims to introduce Indonesian culture and language is UM iCamp 2023. This program is designed to entice international students to learn Indonesian language and culture, especially around Malang.',
        'In order to introduceIndonesian language and culture to international students as well as celebrate the diversity, UM iCamp 2023 presents the theme "Broaden Your Vistas, Embrace Cultural Diversity".'
    ]
}, {
    image: 'gamelan.jpg',
    name: 'Objectives',
    contents: [
        'The objectives of this program are:',
    ],
    lists: [
        'To introduce Indonesian cultures, especially Malang culture, to international students.',
        'To give educational service that could inspire the international students.',
        'To expand the exposure of international event in Universitas Negeri Malang.',
        'To optimize the reciprocity of international partnership initiation.',
        'To endorse the potential tourism of Malang City',
        'To promote the education quality of Indonesia, especially Universitas Negeri Malang, to international students.',
    ]
}]

const dates = [{
    title: 'Open Application',
    date: '10 April 2023',
}, {
    title: 'Application Deadline',
    date: '25 May 2023',
}, {
    title: 'Administrative Selection',
    date: '25 - 30 May 2023'
}, {
    title: 'Acceptance Notification',
    date: '1 June 2023'
}, {
    title: 'Payment Deadline',
    date: '10 June 2023'
}, {
    title: 'UM iCamp Program',
    date: '18 - 24 July 2023'  
}]

const timelines = [{
    title: 'Day 0',
    date: 'Monday, 17 July 2023',
    agendas: [{
        time: 'TBA',
        title: 'Participant Arrival'
    }]
}, {
    title: 'Day 1',
    date: 'Tuesday, 18 July 2023',
    agendas: [{
        time: '08.00 - 10.00',
        title: 'Registration and Check In'
    }, {
        time: '10.00 - 11.00',
        title: 'Welcoming Session and Introduction'
    }, {
        time: '11.00 - 12.00',
        title: 'Lunch Break'
    }, {
        time: '12.00 - 13.30',
        title: 'Bahasa Indonesia Introduction'
    }, {
        time: '13.30 - 15.00',
        title: 'Campus Tour'
    }, {
        time: '15.00 - 18.00',
        title: 'Preparation and Check in Asrama'
    }, {
        time: '18.00 - 21.00',
        title: 'Welcoming Gala Dinner'
    }, {
        time: '21.00 - 00.00',
        title: 'Rest'
    }]
}, {
    title: 'Day 2',
    date: 'Wednesday, 19 July 2023',
    agendas: [{
        time: '07.00 - 08.00',
        title: 'Breakfast'
    }, {
        time: '08.00 - 12.00',
        title: 'Departure to Campsite'
    }, {
        time: '12.00 - 13.00',
        title: 'Lunch Break'
    }, {
        time: '12.00 - 13.00',
        title: 'Lunch Break'
    }, {
        time: '13.00 - 15.00',
        title: 'BIPA Class'
    }, {
        time: '13.00 - 15.00',
        title: 'BIPA Class'
    }, {
        time: '15.00 - 17.00',
        title: 'Batik Workshop'
    }, {
        time: '17.00 - 19.00',
        title: 'Sport and Leisure Activities'
    }, {
        time: '19.00 - 21.00',
        title: 'Dinner'
    }, {
        time: '21.00 - 00.00',
        title: 'Rest'
    }]
}, {
    title: 'Day 3',
    date: 'Thursday, 20 July 2023',
    agendas: [{
        time: '07.00 - 08.00',
        title: 'Breakfast'
    }, {
        time: '08.00 - 11.00',
        title: 'Departure to Jatimpark II'
    }, {
        time: '11.00 - 12.00',
        title: 'Lunch Break'
    }, {
        time: '12.00 - 16.00',
        title: 'Explore Jatimpark II'
    }, {
        time: '16.00 - 18.00',
        title: 'Departure to Campsite'
    }, {
        time: '18.00 - 19.00',
        title: 'Dinner'
    }, {
        time: '19.00 - 21.00',
        title: 'Campfire and Performing Music from Each Countries'
    }, {
        time: '21.00 - 00.00',
        title: 'Rest'
    }]
}, {
    title: 'Day 4',
    date: 'Friday, 21 July 2023',
    agendas: [{
        time: '07.00 - 08.00',
        title: 'Breakfast'
    }, {
        time: '08.00 - 13.00',
        title: 'Departure to Wedi Awu'
    }, {
        time: '13.00 - 14.00',
        title: 'Lunch Break'
    }, {
        time: '14.00 - 16.00',
        title: 'Sports and Leisure Activities'
    }, {
        time: '16.00 - 19.00',
        title: 'Leisure to Village'
    }, {
        time: '19.00 - 24.00',
        title: 'Departure to UM'
    }, {
        time: '24.00 - 05.00',
        title: 'Departure to Bromo'
    }]
}, {
    title: 'Day 5',
    date: 'Saturday, 22 July 2023',
    agendas: [{
        time: '05.00 - 06.00',
        title: 'Sunrise Bromo'
    }, {
        time: '08.00 - 13.00',
        title: 'Bromo Trip (Breakfast Included)'
    }, {
        time: '13.00 - 14.00',
        title: 'Lunch Break'
    }, {
        time: '14.00 - 17.00',
        title: 'Departure to Hotel'
    }, {
        time: '17.00 - 18.00',
        title: 'Check in Hotel'
    }, {
        time: '18.00 - 21.00',
        title: 'Free time'
    }]
}, {
    title: 'Day 6',
    date: 'Sunday, 23 July 2023',
    agendas: [{
        time: '07.00 - 08.00',
        title: 'Breakfast'
    }, {
        time: '09.00 - 12.00',
        title: 'Indonesian Traditional Dance part I'
    }, {
        time: '12.00 - 13.00',
        title: 'Lunch Break'
    }, {
        time: '13.00 - 15.00',
        title: 'Indonesian Traditional Dance part II'
    }, {
        time: '15.00 - 18.00',
        title: 'Preparation for Closing Ceremony'
    }, {
        time: '18.00 - 21.00',
        title: 'Closing Ceremony'
    }, {
        time: '21.00 - 00.00',
        title: 'Rest'
    }]
}, {
    title: 'Day 7',
    date: 'Monday, 24 July 2023',
    agendas: [{
        time: '07.00 - 09.00',
        title: 'Breakfast'
    }, {
        time: '09.00 - 10.00',
        title: 'Check Out Hotel'
    }, {
        time: '10.00 - 15.00',
        title: 'Departure to Juanda'
    }]
}]

const programs = [{
    name: 'Cultural Studies',
    image: 'application.jpg',
    lists: [
        'Introduction to Indonesia;',
        'Indonesian Language for Beginners;',
        '‘Nusantara’ Music;',
        '‘Nusantara’ Game;',
        'Cooking Indonesian Traditional Food;',
        '‘Batik’ Workshop;',
        '‘Nusantara’ Fashion Workshop;',
        'Knitting Class (Merajut);',
        'Pottery Class;',
        'Weaving Class (Menganyam);',
        '‘Nusantara’ Dance Workshop;',
        'Culture Sharing.',
    ]
}, {
    name: 'Cultural Trip',
    image: 'dance.jpg',
    lists: [
        'Trip to Bromo;',
        'Trip to the Beach;',
        'Village Immersion.',
    ]
}]

const requirements = [
    'NOT an Indonesian citizen',
    'Be at least 18 years old and no more than 35 years old',
    'Enrolled in a Degree/Non-Degree program of a university (undergraduate and graduate)',
    'Be able to speak in English',
    'Have a health insurance',
    'Have a recommendation letter from home university',
]

const howTos = [{
    name: 'Prepare the following essays:',
    lists: [
        'Your motivation in applying to UM iCamp 2023, what knowledge you seek to gain, and how UM iCamp program would benefit from your attendance. <b>(max. 500 words)</b>.',
        'Your personal experiences in school or your community as it relates to the previous short essay in no. 1. <b>(max. 500 words)</b>',
    ]
}, {
    name: 'Prepare the following files:',
    lists: [
        'A Formal Photo in Color <b>(a passport size photo, 4 cm x 6 cm)</b> to upload. <b>(File *.JPG max. 1 MB)</b>',
        'Scan of Passport to upload. <b>(File *.jpg max. 1 MB)</b>',
        'Medical certificate to upload. <b>(Conditional) (File *.JPG max. 1 MB)</b>',
        'Declaration Letter to upload. <b>(File .PDF max 1 MB). Please find the format in the Application Form.</b>',
    ]
}, {
    name: 'Sign-Up to <a href="https://forms.gle/vsSexyb18hLYzix29">Apply Now</a>',
}, {
    name: 'Follow the instructions given into your account.'
}, {
    name: 'Wait for a notification that you have successfully registered to UM iCamp 2023.',
}, {
    name: 'Result Announcement will be on <b>10 June 2023</b> on your UM iCamp 2023 account.'
}, {
    name: 'Program Fee: USD $450<br>and Availabe Scholarship for limited seats'
}]

const schemes = [
    'Self-Fund',
    'Scholarship',
]

const fees = [{
    coverages: [
        'Registration fee',
        'Accommodation during the program',
        'Breakfast, lunch, dinner during the program',
        'Merchandise UM iCamp ',
        'Cultural and social program',
        'Certificate of participants',
    ],
    schemes: [
        'USD $450',
        'Waived',
    ]
}, {
    coverages: [
        'Airfare ticket',
        'Visa processing fee',
        'Insurance',
        'Personal expenses',
    ],
    schemes: [
        'Not waived',
        'Not waived',
    ]
}]

const payments = [{
    name: 'Client',
    value: 'Universitas Negeri Malang (UM)',
}, {
    name: 'Bank name',
    value: 'PT. Bank Negara Indonesia (BNI) (Persero) Tbk',
}, {
    name: 'Virtual Account',
    value: '9888855513580001',
}, {
    name: 'Branch',
    value: 'BRAWIJAYA Malang',
}, {
    name: 'SWIFT code',
    value: 'BNINDJAXXX',
}, {
    name: 'Customer email',
    value: 'farida.ariyani@um.ac.id',
}]

const testimonials = [{
    name: 'Myat Nyein Khine (Myanmar)',
    image:'testimonials/1.png',
    testi: 'Very welcoming and one will have a new family',
},{
    name: 'Cadiz Quispe Gustavo Pedro (Bolivia)',
    image:'testimonials/2.png',
    testi: 'It is a unique experience that young people can live.',
}/* ,{
    name: 'John Doe',
    image:'testimonials/3.png',
    testi: 'Lorem ipsum dolor sit amet',
} */]

const galleries = [
    'gallery/1.jpg',
    'gallery/2.jpg',
    'gallery/3.jpg',
    'gallery/4.jpg',
]

export { infos, dates, programs, requirements, howTos, schemes, fees, payments, testimonials, galleries, timelines }