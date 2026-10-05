import './globals.css'
import { Montserrat } from 'next/font/google'
const montserrat = Montserrat({ subsets:['latin'], variable:'--font-montserrat' })
export const metadata={title:'Wargi Hub | Sate Maranggi Wargi Sari Asih',description:'Sate Maranggi, lebih dekat dengan keseharian warga Jakarta.'}
export default function RootLayout({children}){return <html lang="id"><body className={montserrat.variable}>{children}</body></html>}
