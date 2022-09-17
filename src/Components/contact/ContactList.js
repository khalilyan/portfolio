import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';

export const ContactList = [
    {
        icon:  <div className='contWrap' >
        <a href='https://goo.gl/maps/5ranE2GnFYDmu1kr8' target='_blank' >
            <LocationOnIcon fontSize='large' style={{fontSize: '75px'}} className='Contactlogo' />
        </a>
        </div>,
        src: 'https://goo.gl/maps/5ranE2GnFYDmu1kr8',
        title: 'Armenia/Armavir/Arshaluys/2/14'
       
    },
    {
        icon: <div className='contWrap' >
        <LocalPhoneIcon fontSize='large' style={{fontSize: '75px'}}  className='Contactlogo'/>
        </div>,
        title: '(+374) 93-088-238',
    },
    {
        icon: <div className='contWrap' >
        <a href='https://www.linkedin.com/in/armen-khalilyan-230a95244/' target='_blank' >
            <LinkedInIcon fontSize='large' style={{fontSize: '75px'}}  className='Contactlogo'/>
        </a>
        </div>,
        src: 'https://www.linkedin.com/in/armen-khalilyan-230a95244/',
        title: 'LinkedIn'
        
    },
    {
        icon: <div className='contWrap' >
        <a href='https://www.facebook.com/profile.php?id=100009884226250' target='_blank' >
            <FacebookIcon fontSize='large' style={{fontSize: '75px'}}  className='Contactlogo'/>
        </a>
        </div>
        ,
        src: 'https://www.facebook.com/profile.php?id=100009884226250',
        title: 'Facebook'
    },
    {
        icon: <div className='contWrap' >
        <a href='https://filebin.net/3se8d9l9m5fhu27t' target='_blank' >
            <FeaturedPlayListIcon fontSize='large' style={{fontSize: '75px'}}  className='Contactlogo'/>
        </a>
        </div>,
        title: 'Download CV',
        src: ' https://disk.yandex.ru/i/_kV31sQ5TF_MTg'
        
    },
    {
        icon: <div className='contWrap' >
            <MailIcon fontSize='large' style={{fontSize: '75px'}}  className='Contactlogo'/>
        </div>,
        title: 'armkhalilyan@gmail.com',
    },
] 
