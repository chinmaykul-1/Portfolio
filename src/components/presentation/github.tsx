import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import Lottie from "lottie-react";
import lottieAnimation from "../../../public/email-colaborate.json"
export function AstroSection() {
  return (
    <section className="py-8 px-8 lg:py-20 shadow-focus bg-gradient-to-b dark:from-gray-900 to-gray-800">
      <div className="container mx-auto">
        <Card
          color="teal"
          shadow={false}
          className="flex-col-reverse overflow-hidden rounded-3xl md:flex-row md:gap-8"
        >
          <CardBody className="py-20 px-14 md:w-7/12">
            <Typography color="white" className="font-normal opacity-70">
              Open to Collaborate
            </Typography>
            <Typography
              variant="h2"
              color="white"
              className="mb-5 font-normal"
            >
              Interested in working together?
            </Typography>
            <Typography variant="lead" color="white">
              I’m always open to exciting DevOps opportunities, automation projects, or cloud challenges.
              Let's create something impactful and efficient.
            </Typography>
            <a href="mailto:chinmaykulkarni81@gmail.com">
              <Button color="white" size="sm" variant="outlined" className="flex items-center mt-5">
                📩 Mail Me
              </Button>
            </a>
          </CardBody>
          <div className="relative grid h-96 place-items-center md:h-auto md:w-5/12">
          <Lottie 
  animationData={lottieAnimation} 
  loop={true} 
  autoPlay={true} 
  style={{ width: '101%', height: '110%' }} 
/>

            {/* <img
              src="email.jpeg" // Replace with your own image if desired
              alt="email collaboration"
              className="h-full w-full object-cover md:absolute"
            /> */}
          </div>
        </Card>
      </div>
    </section>
  );
}

export default AstroSection;
