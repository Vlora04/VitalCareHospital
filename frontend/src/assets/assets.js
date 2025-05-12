import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
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
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'Mjek i përgjithshëm',
        image: General_physician
    },
    {
        speciality: 'Gjinekolog',
        image: Gynecologist
    },
    {
        speciality: 'Dermatolog',
        image: Dermatologist
    },
    {
        speciality: 'Pediatër',
        image: Pediatricians
    },
    {
        speciality: 'Neurolog',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterolog',
        image: Gastroenterologist
    },
]


export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Arben Krasniqi',
        image: doc1,
        speciality: 'Mjek i përgjithshëm',
        degree: 'Mjekësi e Përgjithshme',
        experience: '4 vite',
        about: 'Dr. Arben ka përkushtim të madh ndaj kujdesit të përgjithshëm shëndetësor dhe parandalimit të sëmundjeve.',
        fees: 25,
        address: {
            line1: 'Rr. Iliria, Nr. 12',
            line2: 'Prishtinë, Kosovë'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Elira Berisha',
        image: doc2,
        speciality: 'Gjinekolog',
        degree: 'Gjinekologji',
        experience: '6 vite',
        about: 'E specializuar në kujdesin për gratë dhe lindjen, Dr. Elira është një zgjedhje e sigurt për çdo paciente.',
        fees: 30,
        address: {
            line1: 'Lagjja Dardania, Blloku A',
            line2: 'Ferizaj, Kosovë'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Florim Gashi',
        image: doc3,
        speciality: 'Dermatolog',
        degree: 'Dermatologji',
        experience: '3 vite',
        about: 'Dr. Florim është ekspert në trajtimin e lëkurës dhe sëmundjeve dermatologjike.',
        fees: 20,
        address: {
            line1: 'Rr. Adem Jashari, Nr. 8',
            line2: 'Gjakovë, Kosovë'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Ilir Beqiri',
        image: doc4,
        speciality: 'Pediatër',
        degree: 'Pediatri',
        experience: '5 vite',
        about: 'Dr. Ilir kujdeset me përkushtim për shëndetin e fëmijëve.',
        fees: 25,
        address: {
            line1: 'Rr. Nënë Tereza',
            line2: 'Suharekë, Kosovë'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Teuta Kelmendi',
        image: doc5,
        speciality: 'Neurolog',
        degree: 'Neurologji',
        experience: '7 vite',
        about: 'Eksperte në trajtimin e sëmundjeve të trurit dhe sistemit nervor.',
        fees: 35,
        address: {
            line1: 'Rr. Zahir Pajaziti, Nr. 15',
            line2: 'Mitrovicë, Kosovë'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Besart Mehmeti',
        image: doc6,
        speciality: 'Gastroenterolog',
        degree: 'Gastroenterologji',
        experience: '4 vite',
        about: 'Specialist në trajtimin e problemeve me stomakun dhe sistemin tretës.',
        fees: 30,
        address: {
            line1: 'Rr. Luan Haradinaj',
            line2: 'Pejë, Kosovë'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Blerim Shala',
        image: doc7,
        speciality: 'Kardiolog',
        degree: 'Kardiologji',
        experience: '8 vite',
        about: 'Dr. Blerim është specialist në trajtimin e sëmundjeve të zemrës.',
        fees: 40,
        address: {
            line1: 'Rr. Dëshmorët e Kombit, Nr. 22',
            line2: 'Prishtinë, Kosovë'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Valon Dervishi',
        image: doc8,
        speciality: 'Oftalmolog',
        degree: 'Oftalmologji',
        experience: '5 vite',
        about: 'Dr. Valon është ekspert në trajtimin e problemeve me sytë dhe shikimin.',
        fees: 30,
        address: {
            line1: 'Rr. Bajram Curri, Nr. 10',
            line2: 'Shkup, Maqedoni'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Ardiana Xhemaili',
        image: doc9,
        speciality: 'Psikiatër',
        degree: 'Psikiatri',
        experience: '6 vite',
        about: 'Dr. Ardiana ofron kujdes të specializuar për shëndetin mendor.',
        fees: 40,
        address: {
            line1: 'Rr. Luan Haradinaj, Nr. 5',
            line2: 'Pejë, Kosovë'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Valmir Mustafa',
        image: doc10,
        speciality: 'Dentist',
        degree: 'Dentisti',
        experience: '7 vite',
        about: 'Dr. Valmir ofron trajtime dentare dhe kujdes oral.',
        fees: 30,
        address: {
            line1: 'Rr. Bajram Curri, Nr. 16',
            line2: 'Prizren, Kosovë'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Mimoza Osmani',
        image: doc11,
        speciality: 'Ortoped',
        degree: 'Ortopedi',
        experience: '10 vite',
        about: 'Dr. Mimoza është eksperte në trajtimin e lëndimeve të kockave dhe muskujve.',
        fees: 50,
        address: {
            line1: 'Rr. Hasan Prishtina, Nr. 8',
            line2: 'Gjakovë, Kosovë'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Shkëlzen Koliqi',
        image: doc12,
        speciality: 'Fizioterapist',
        degree: 'Fizioterapi',
        experience: '4 vite',
        about: 'Dr. Shkëlzen ofron terapi për rehabilitimin e lëndimeve muskulore.',
        fees: 25,
        address: {
            line1: 'Rr. UÇK, Nr. 13',
            line2: 'Mitrovicë, Kosovë'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Eva Dajti',
        image: doc13,
        speciality: 'Endokrinolog',
        degree: 'Endokrinologji',
        experience: '9 vite',
        about: 'Dr. Eva është eksperte në trajtimin e sëmundjeve të gjëndrës tiroide dhe diabetit.',
        fees: 40,
        address: {
            line1: 'Rr. Luan Haradinaj, Nr. 23',
            line2: 'Pejë, Kosovë'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Driton Hoxha',
        image: doc14,
        speciality: 'Mjek i përgjithshëm',
        degree: 'Mjekësi e Përgjithshme',
        experience: '5 vite',
        about: 'Dr. Dritoni ofron shërbime për kujdesin shëndetësor të përgjithshëm.',
        fees: 20,
        address: {
            line1: 'Rr. Muharrem Fejza, Nr. 19',
            line2: 'Ferizaj, Kosovë'
        }
    }
]

