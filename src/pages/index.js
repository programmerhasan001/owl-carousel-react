import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Home() {
  return (
    <div>
      <h2>Hello</h2>
      <OwlCarousel>
        <div>
          <h2>Slide-1</h2>
        </div>
        <div>
          <h2>Slide-2</h2>
        </div>
        <div>
          <h2>Slide-3</h2>
        </div>
      </OwlCarousel>
    </div>
  )
}
