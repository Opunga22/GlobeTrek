
import './globals.css';
export const metadata = {
  title: 'Globe Trek | Explore the World',
  description: 'Discover hidden gems and experience the world with Globe Trek.',
};
export default function RootLayout({children}:{children:React.ReactNode}){
return <html lang='en'><body>{children}</body></html>
}