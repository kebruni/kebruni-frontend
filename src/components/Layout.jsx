import Header from './Header';
import Footer from './Footer';
import AnimatedOutlet from './AnimatedOutlet';

function Layout() {
  return (
    <div className="layout">
      {/* Animated sky background with clouds */}
      <div className="sky-bg">
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
        <div className="cloud cloud-3"></div>
        <div className="cloud cloud-4"></div>
        <div className="cloud cloud-5"></div>
        <div className="cloud cloud-6"></div>
        <div className="cloud cloud-7"></div>
        <div className="cloud cloud-8"></div>
      </div>

      <Header />

      <main className="main-content">
        <AnimatedOutlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
