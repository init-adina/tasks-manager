import Container from "@shared/ui/Container";
import ProgressiveImage from "@shared/ui/core/image/ProgressiveImage";
import Headline from "@shared/ui/Headline";

function Poster() {
  return (
    <section className="poster 2xl:h-screen bg-gradient-to-b from-[#6FD6FF]/15 via-[#D8B5FF]/20 to-white -mt-24">
      <div className="wrapper h-full pt-40 2xl:pt-24 flex items-center">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="info py-10 flex flex-col gap-10">
              <Headline
                size="sm"
                className="font-medium bg-gradient-to-r  from-primary-400 via-primary-300 to-primary-100 bg-clip-text text-transparent"
              >
                Clarity, Project by Project.
              </Headline>

              <div className="flex flex-col gap-4">
                <Headline
                  size="xl"
                  className="font-bold uppercase"
                >
                  Track And Manage
                </Headline>

                <Headline
                  size="lg"
                  className="font-extralight"
                >
                  Projects of us
                </Headline>
              </div>

              <div className="text-gray-500 leading-loose text-sm ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus officiis repellat minima earum amet, iure eveniet
                similique perferendis consectetur. Repellendus!
              </div>
            </div>

            <div className="poster-image flex justify-end">
              <ProgressiveImage
                src="/assets/img/slides/bg-t.png"
                width={600}
                height={600}
                alt="poster"
                className="select-none pointer-events-none"
              />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default Poster;
