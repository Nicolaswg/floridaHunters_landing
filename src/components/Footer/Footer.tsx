import React from "react";

interface FooterProps {
  description?: string;
  socialLinks?: { links: string }[];
  companyDetails?: {
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zip: string;
  };
}

export const Footer = ({
  description,
  socialLinks,
  companyDetails,
}: FooterProps) => {
  return (
    <footer>
      <div className="bg-gray-800 px-8 py-10 text-gray-400 flex flex-col md:grid md:grid-cols-3">
        <div className="md:col-span-2 flex flex-row gap-6">
          <iframe
            width="520"
            height="400"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=2231%20Fortune%20Rd,%20Kissimmee%20Florida+(2231%20Fortune%20Rd,%20Kissimmee,%20FL,%C2%A034744)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
          <div className="grow flex flex-col justify-between">
            <div>
              <h4 className="text-xl mb-2 lg:text-2xl text-white font-semibold py-2 border-b border-b-white">
                The academy and hunters
              </h4>
              <p className="max-w-[60ch]">
                Join our baseball academy, where passion turns into achievement.
                We offer professional training and holistic development in a
                respectful, team-oriented environment. Here, you'll not only
                enhance your sports skills, but also grow personally. Come and
                live the experience of being a true player!
              </p>
            </div>
            <div>
              <p>Academy Address</p>
              <a
                href="https://maps.app.goo.gl/k2iTthqEouszigPA9"
                target="_blank"
                className="hover:text-white cursor-pointer"
              >
                2231 Fortune Rd, Kissimmee, FL 34744, EE. UU.
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-green-800 py-4 text-gray-100">
        <div className="container mx-auto px-4">
          <div className="-mx-4 flex flex-wrap justify-between">
            <div className="px-4 w-full text-center sm:w-auto sm:text-left">
              Copyright © 2024 Florida Hunters. All Rights Reserved.
            </div>
            <div className="px-4 w-full text-center sm:w-auto sm:text-left">
              Made with ⚾️ by <strong>Just404.</strong>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
