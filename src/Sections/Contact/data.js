import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';

export const contacts = [
    {
        icon: <BsTelephone size={40} />,
        name: '+374 93088238',
    },
    {
        icon: <AiOutlineLinkedin size={40} />,
        name: 'LinkedIn',
        value: 'https://www.linkedin.com/in/armen-khalilyan-230a95244/',
    },
    {
        icon:  <AiFillGithub size={40} />,
        name: 'GitHub',
        value: 'https://github.com/khalilyan',
    }
]