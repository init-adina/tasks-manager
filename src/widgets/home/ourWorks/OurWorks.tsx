import Container from "@shared/ui/Container";
import Headline from "@shared/ui/Headline";
import CurwedSwiper from "./CurvedSwiper";
import { workItems } from "@shared/data/WorksData";

function OurWorks() {
  return (
    <section className="our-works">
      <Container>
        <div className="wrapper grid grid-cols-5 gap-8 py-8">
          <div className="flex flex-col col-span-2 gap-12">
            <Headline className="font-medium">Our Works</Headline>

            <div className="info-texts flex flex-col gap-4 text-gray-500 ">
              <div>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti ullam molestiae, excepturi sit tenetur officia quo
                saepe doloremque quam illum harum ducimus illo, alias nemo,
                commodi inventore incidunt cupiditate aperiam dignissimos velit
                neque est delectus?
              </div>
              <div>
                {" "}
                Temporibus impedit ea, deleniti nesciunt magnam perspiciatis,
                asperiores libero est laudantium consequatur fugiat veritatis
                nostrum itaque consectetur distinctio quibusdam aliquid
                excepturi facere illum dicta!
              </div>

              <div>
                Voluptatem saepe amet qui earum ipsum accusamus ab reiciendis ut
                rem sit itaque omnis, ullam exercitationem! Vero quo nihil
                aspernatur adipisci sunt ipsam. Quasi repellat sequi eveniet
                atque commodi saepe veniam mollitia, cumque minus eaque rem
                quas!
              </div>

              <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem,
                quisquam.
              </div>
            </div>
          </div>

          <div className="col-span-3 flex items-center">
            <CurwedSwiper workItems={workItems} />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default OurWorks;
