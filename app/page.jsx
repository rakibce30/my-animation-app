import Banner from "./components/Banner/Banner";
import Carousel from "./components/Carousel/Carousel";
import Container from "./components/Container/Container";
import Heading from "./components/Heading/Heading";
import TabIcon from "./components/TabIcon/TabIcon";


export default function Home() {
  return (
    <>
      <Container>
        <Banner />
        <Heading />
        <TabIcon />
      </Container>
      <Carousel/>
    </>
  )
}
