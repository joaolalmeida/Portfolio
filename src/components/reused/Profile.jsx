import profile from './../../assets/profile.svg';

import { motion } from "framer-motion"

export function Profile() {
  return <motion.img
   src={profile}
   alt="Imagem com movimento"
   layoutId='profile-picture'
   transition={{ duration: 1}}
   />
}




