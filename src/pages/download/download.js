import React from 'react'
import '../../App.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
  'macos', 'linux', 'windows' , 'ios' , 'android'
];
const defaultOption = options[0];

function download_Page() {
  return (
    <div className='flex h-full-screen justify-center items-center flex-col'>
      <div>
        Download
      </div>
      <div className='h-[400px] w-60 bg-slate-100 rounded-2xl'>
        <div className='flex items-center justify-center h-[400px] text-lg font-semibold flex-col'>
          <p>
            Download iChat for :
          </p>
          <Dropdown options={options} value={defaultOption} placeholder="Select an option" />
          <div className='p-4'>
            <button
              class="group relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
              href="/download"
            >
              <span class="absolute -end-full transition-all group-hover:end-4">
                <svg
                  class="h-5 w-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>

              <span class="text-sm font-medium transition-all group-hover:me-4">
                Download
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default download_Page