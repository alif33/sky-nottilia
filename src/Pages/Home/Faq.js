import React from "react";
import BackgroundImg from "../../assets/img/Base.png";
const Faq = () => {
  return (
    <div className="flex justify-center items-center mx-2 rounded-lg">
      <div
        className="h-[827px] w-[1440px]
        bg-auto bg-no-repeat bg-center"
        style={{ background: `url(${BackgroundImg})` }}
      >
        <h2 className="lg:text-5xl text-xl font-bold text-center lg:pt-[100px] py-4 text-white">
          Frequently Asked Questions
        </h2>
        <div className="flex justify-center items-center lg:mt-[60px] mx-2">
          <div class="space-y-4 lg:w-[862px]">
            <details class="group" open>
              <summary class="flex cursor-pointer items-center justify-between rounded-lg bg-gray-50 p-4 bg-opacity-30">
                <h2 class="font-medium text-white ">
                  How do I pay for the Essentials or Premium plan?
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

              <p class="mt-4 px-4 leading-relaxed text-white   bg-opacity-30">
                You can pay with a credit card or via net banking (if you’re in
                United States). We will renew your subscription automatically at
                the end of every billing cycle.
              </p>
            </details>
            <details class="group" open>
              <summary class="flex cursor-pointer items-center justify-between rounded-lg bg-gray-50 p-4 bg-opacity-30">
                <h2 class="font-medium text-white ">
                  Can I cancel my Essentials or Premium plan subscription at any
                  time?
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

              <p class="mt-4 px-4 leading-relaxed text-white   bg-opacity-30">
                You can pay with a credit card or via net banking (if you’re in
                United States). We will renew your subscription automatically at
                the end of every billing cycle.
              </p>
            </details>
            <details class="group" open>
              <summary class="flex cursor-pointer items-center justify-between rounded-lg bg-gray-50 p-4 bg-opacity-30">
                <h2 class="font-medium text-white ">
                  We need to add new users to our team. How will that be billed?
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

              <p class="mt-4 px-4 leading-relaxed text-white   bg-opacity-30">
                You can pay with a credit card or via net banking (if you’re in
                United States). We will renew your subscription automatically at
                the end of every billing cycle.
              </p>
            </details>
            <details class="group" open>
              <summary class="flex cursor-pointer items-center justify-between rounded-lg bg-gray-50 p-4 bg-opacity-30">
                <h2 class="font-medium text-white ">
                  My team wants to cancel its subscription. How do we do that?
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

              <p class="mt-4 px-4 leading-relaxed text-white   bg-opacity-30">
                You can pay with a credit card or via net banking (if you’re in
                United States). We will renew your subscription automatically at
                the end of every billing cycle.
              </p>
            </details>
            <details class="group" open>
              <summary class="flex cursor-pointer items-center justify-between rounded-lg bg-gray-50 p-4 bg-opacity-30">
                <h2 class="font-medium text-white ">
                  Do you offer discounts for educational institutions?
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

              <p class="mt-4 px-4 leading-relaxed text-white   bg-opacity-30">
                You can pay with a credit card or via net banking (if you’re in
                United States). We will renew your subscription automatically at
                the end of every billing cycle.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
