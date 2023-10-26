import Banner from "./components/Banner/Banner";
import Carousel from "./components/Carousel/Carousel";
import Container from "./components/Container/Container";
import Heading from "./components/Heading/Heading";
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
        <Carousel />
      </div>
      <Container>
        <Heading
          title="Made to be shared"
          description="Improve your share-game by exporting at the perfect aspect ratio for Twitter, LinkedIn, Slack, Facebook... you get the idea."
          className="mt-16"
        />
        <Testimonial/>
      </Container>
    </>
  )
}
