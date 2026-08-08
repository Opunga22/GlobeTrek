
import './globals.css';
export const metadata = {
  title: 'Globe Trek | Helping Communities, Empowering Lives',
  description: 'Helping communities and empowering lives through sustainable development initiatives.',
  icons: {
    icon: '/assets/neew.jpeg',
  },
};
export default function RootLayout({children}:{children:React.ReactNode}){
return <html lang='en'><body>{children}</body></html>
}