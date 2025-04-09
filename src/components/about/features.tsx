import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { AcademicCapIcon, SparklesIcon } from "@heroicons/react/24/solid";

function BigFeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string; }) {
  return (
    <Card color="transparent" shadow={false} className="w-full">
      <CardBody className="flex flex-col items-center text-center py-12 px-8">
        <div className="mb-6 grid h-16 w-16 place-items-center rounded-full bg-dark p-3 text-white">
          {icon}
        </div>
        <Typography variant="h3" color="blue-gray" className="mb-4 !font-bold">
          {title}
        </Typography>
        <Typography className="max-w-2xl px-4 font-normal text-gray-700 text-lg">
          {description}
        </Typography>
      </CardBody>
    </Card>
  );
}

export function FeatureSectionTwo() {
  return (
    <section className="py-28 px-4 bg-white">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="dark" className="mb-2 font-bold text-lg">
          Personal Profile
        </Typography>
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Know Me Better
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 text-blue-gray-800 md:w-10/12 lg:w-7/12 lg:px-8"
        >
          Here’s a closer look at my educational achievements and what I enjoy doing in my spare time.
        </Typography>
      </div>
      <div className="container mx-auto grid gap-12 md:grid-cols-2">
        <BigFeatureCard
          icon={<AcademicCapIcon className="h-8 w-8" strokeWidth={2} />}
          title="Education"
          description="Strong academic foundation with an M.Sc. and B.Sc. in Computer Science, consistently ranked among top performers. Passionate about bridging theory with real-world DevOps and cloud solutions"
        />
        <BigFeatureCard
          icon={<SparklesIcon className="h-8 w-8" strokeWidth={2} />}
          title="Hobbies"
          description="Outside of tech, I love exploring historic forts and nature trails, capturing the beauty of landscapes and my pets through photography, and immersing myself in Indian classical music."
        />
      </div>
    </section>
  );
}

export default FeatureSectionTwo;
