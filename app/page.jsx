import Banner from "./components/Banner/Banner";
import Carousel from "./components/Carousel/Carousel";
import Container from "./components/Container/Container";
import GalleryCarousel from "./components/GalleryCarousel/GalleryCarousel";
import Heading from "./components/Heading/Heading";
import ReviewCarousel from "./components/ReviewCarousel/ReviewCarousel";
import TabIcon from "./components/TabIcon/TabIcon";
import Testimonial from "./components/Testimonial/Testimonial";


export default function Home() {
  return (
    <>
      <Container>
          <Banner />
        <Heading
          title="Simple, curated styles that always work"
          description="Choose from carefully selected styles to create pixel-perfect designs in seconds—even if you're not a designer."
          className="mt-72"
        />
        <TabIcon />
      </Container>
      <div className="my-8">
        <Carousel><GalleryCarousel /></Carousel>
      </div>
      <Container>
        <Heading
          title="Made to be shared"
          description="Improve your share-game by exporting at the perfect aspect ratio for Twitter, LinkedIn, Slack, Facebook... you get the idea."
          className="mt-16"
        />
        <div className="mt-12 mb-40">
          <Testimonial />
        </div>
        <Heading
          title="The word on the street"
          description="Join thousands of Wrappers and get started free."
          className="mt-16"
        />
      </Container>
      <div className="mt-10">
        <Carousel><ReviewCarousel/></Carousel>
      </div>
    </>
  )
}
