import profile from './../../assets/profile.svg';

import { animate, motion } from "framer-motion"

export function Profile() {
  return <motion.img
   src={profile}
   alt="Imagem com movimento"
   layoutId='profile-picture'
   initial={{ opacity: 0 }}
   animate={{ opacity: 1 }}
   transition={{ duration: 1}}
   />
}




