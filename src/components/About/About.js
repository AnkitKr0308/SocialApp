import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-10 ml-10 mr-10 mt-[12vh] ">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <img
            className="w-full rounded-t-lg max-h-[30vh] "
            src="images/offline.png"
            alt="Instagram"
          />

          <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Social@Offline
            </h5>

            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              The instagram page with every fun update about your creative
              neighbourhood place.
            </p>
            <Link
              to="https://www.instagram.com/socialoffline/?hl=en"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View more
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <img
            className="w-full max-h-[30vh] rounded-t-lg "
            src="images/live.jpeg"
            alt="Instagram"
          />

          <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Live@Social
            </h5>

            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              The instagram page to keep tabs on all upcoming events & gigs.
            </p>
            <Link
              to="https://www.instagram.com/live.at.social/"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View more
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <img
            className="w-full max-h-[30vh] rounded-t-lg "
            src="images/whatsapp.jpeg"
            alt="Instagram"
          />

          <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              WhatsApp Communities
            </h5>

            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Our WhatsApp Community Channel will help you keep a closer eye on
              EVERYTHING SOCIAL!
            </p>
            <Link
              to="https://wa.me/+919123083270/"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View more
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
