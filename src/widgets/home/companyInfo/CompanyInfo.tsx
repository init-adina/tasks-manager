import Container from "@shared/ui/Container";
import ProgressiveImage from "@shared/ui/core/image/ProgressiveImage";
import Headline from "@shared/ui/Headline";

function CompanyInfo() {
  return (
    <section className="company-info">
      <Container>
        <div className="pt-8 pb-16">
          <div className="info-wrapper border rounded-md p-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20">
            <div className="info-title flex flex-col gap-8">
              <Headline>
                Innovative Solutions, Empowering Businesses for Tomorrow
              </Headline>

              <div className="info text-gray-400 flex flex-col gap-4">
                <div>
                  We specialize in providing cutting-edge technology solutions
                  that help businesses grow, innovate, and stay ahead of the
                  curve. With a team of passionate experts, we deliver tailored
                  software and services that drive efficiency, enhance customer
                  experiences, and optimize operational performance.
                </div>

                <div>
                  Our mission is to empower businesses across industries by
                  harnessing the power of innovation, data, and smart technology
                  to create meaningful and lasting impacts. Whether you art a
                  startup or an enterprise, we are here to partner with you
                  every step of the way to help you succeed in the digital age.
                </div>

                <div>
                  Our diverse team of experts works collaboratively to craft
                  customized strategies, harnessing the latest technologies to
                  meet the unique needs of each client. From startups to
                  established enterprises, we provide seamless, scalable, and
                  efficient solutions that not only meet today demands but also
                  prepare businesses for the challenges of tomorrow.
                </div>
              </div>
            </div>

            <div className="company-image">
              <ProgressiveImage
                src="/assets/img/company/company.jpg"
                width={800}
                height={500}
                alt="company-image"
                className="rounded-md size-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CompanyInfo;
