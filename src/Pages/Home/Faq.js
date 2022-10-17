import React from "react";
import BackgroundImg from "../../assets/img/Base.png";
const Faq = () => {
  return (
    <div className="flex justify-center items-center">
      <div
        className="h-[827px] w-[1440px]
        bg-auto bg-no-repeat bg-center"
        style={{ background: `url(${BackgroundImg})` }}
      >
        <h2 className="text-5xl font-bold text-center pt-[100px] text-white">
          Frequently Asked Questions
        </h2>
        <div class="space-y-4">
          <details class="group" open>
            <summary class="flex cursor-pointer items-center justify-between rounded-lg bg-gray-50 p-4">
              <h2 class="font-medium text-gray-900">
                Lorem ipsum dolor sit amet consectetur adipisicing?
              </h2>

              <svg
                class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <p class="mt-4 px-4 leading-relaxed text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
              veritatis molestias culpa in, recusandae laboriosam neque aliquid
              libero nesciunt voluptate dicta quo officiis explicabo
              consequuntur distinctio corporis earum similique!
            </p>
          </details>

          <details class="group">
            <summary class="flex cursor-pointer items-center justify-between rounded-lg bg-gray-50 p-4">
              <h2 class="font-medium text-gray-900">
                Lorem ipsum dolor sit amet consectetur adipisicing?
              </h2>

              <svg
                class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <p class="mt-4 px-4 leading-relaxed text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
              veritatis molestias culpa in, recusandae laboriosam neque aliquid
              libero nesciunt voluptate dicta quo officiis explicabo
              consequuntur distinctio corporis earum similique!
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Faq;
